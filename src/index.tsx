import {
  SettingsInterface,
  PropsInterface,
  ImperitiveHandleInterface
} from './types.ts'

import {
  forwardRef,
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
} from 'react'

import ArrowButtons from './components/arrowButtons.tsx'
import Pagination from './components/pagination.tsx'

import {
  getMoveVal
} from './helpers.ts'

import './styles.scss'

const CardCarousel = forwardRef<ImperitiveHandleInterface, PropsInterface>((props, carouselRef) => {

  const {
    children,
    settings
  } = props

  const defaultSettings: SettingsInterface = {
    // Presentation settings
    buffer: 50, // buffer for whether to switch to next card if it sits right on the border of the viewbox (px)
    gap: 20, // gap size between each card/silde (px)
    padding: 50, // padding either side of the viewbox.
    cardsToShow: 0, // Defines the width of each card, if set to 0 the width will be inherited from the each cards children
    transitionSpeed: 300, // speed for transitions (ms)
    
    // Control settings
    yieldToImages: false,
    pagination: false,
    touchControls: true,
    arrows: true, // enable or disable arrows
    nextArrow: null, // provide custom markup for the next button
    prevArrow: null, // provide custom markup for the prev button

    // Events
    beforeChange: null, // fires just before change
    afterChange: null, // fires just after change
    onTouchStart: null, // fires just after touch start
    onTouchMove: null, // fires just after touch move
    onTouchEnd: null, // fires just after touch end
  }

  const [config, setConfig] = useState<SettingsInterface>({
    ...defaultSettings,
    ...settings
  })
  
  // State
  const [touchX, setTouchX] = useState<number>(0)
  const [displayControls, setDisplayControls] = useState<boolean>(false)
  const [itemWidth, setItemWidth] = useState<number>(0)
  const [isResizing, setIsResizing] = useState<boolean>(false)
  const [itemsWrapperWidth, setItemsWrapperWidth] = useState<number>(0)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [itemCount, setItemCount] = useState<number>(0)
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false)
  const [animateTransition, setAnimateTransition] = useState<boolean>(false)

  // Refs
  const carouselItemsRef = useRef<HTMLDivElement | null>(null)
  const carouselWrapperRef = useRef<HTMLDivElement | null>(null)
  const offsetRef = useRef<number>(0)

  useEffect(() => {
    setConfig({
      ...defaultSettings,
      ...settings
    })

    // update position in case the padding or gap have been changed
    updateCarouselPosition()
  }, [JSON.stringify(settings)])


  useEffect(() => {
    if (!children?.length) return
    if (itemCount !== children.length-1) {
      setItemCount(children.length-1)
    }
  }, [children])

  useEffect(() => {
    if (animateTransition) {
      scrub(`${offsetRef.current}px`)
      setTimeout(() => {setAnimateTransition(false)}, config.transitionSpeed)
    }
  }, [animateTransition])


  // Set inital width for the carousel items
  useEffect(() => {
    if (itemCount !== 0 && itemsWrapperWidth === 0) {
      getItemsWrapperWidth()
    }
  }, [carouselItemsRef.current, itemCount])

  // Run checks to reposition the carousel items on width change
  useEffect(() => {
    itemsWrapperWidth !== 0 && updateCarouselPosition()
  }, [itemsWrapperWidth])


  // Set inital width for each card, if applicable
  useEffect(() => {
    if (config.cardsToShow !== 0 && itemWidth === 0) {
      getItemWidth()
    }
  }, [carouselWrapperRef.current])


  // Add window resize listener
  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }

  }, [typeof window !== undefined, imagesLoaded, itemCount])

  
  // Handle resize of browser window
  const resizeTimer = useRef(null)
  const handleResize = () => {
    clearTimeout(resizeTimer.current)
    setItemsWrapperWidth(99999)
    setIsResizing(true)

    resizeTimer.current = setTimeout(() => {
      setIsResizing(false)
      getItemWidth()
      getItemsWrapperWidth()
      resizeTimer.current = null
    }, 500)
  }


  // /////////////////////////////////
  // WIP - Tidy up reset on resize
  // /////////////////////////////////

  const updateCarouselPosition = () => {

    const itemsBox = carouselItemsRef.current?.getBoundingClientRect()
    const wrapperBox = carouselWrapperRef.current?.getBoundingClientRect()

    // Only enable controls if the items container is larger than the wrapper.
    setDisplayControls(itemsBox?.width > wrapperBox?.width)
    snapToItem(0)
  }


  // If cardsToShow has been set, calculate the width of each item based on the viewBox size.
  const getItemWidth = () => {
    const wrapperBox = carouselWrapperRef.current?.getBoundingClientRect()

    if (config.cardsToShow !== 0 && carouselWrapperRef.current) {
      setItemWidth(wrapperBox.width/config.cardsToShow)
    }
  }


  // Check for the presense of images in the card content,
  // wait for them to load before calculating width of cards.
  const checkIfCardImagesLoaded = (element:Element) => {
    const hasImages = element.getElementsByTagName('img')

    if (!hasImages || typeof hasImages !== 'object') return Promise.resolve(true)

    return Promise.all(
      Array.from(hasImages).map((img) =>
        new Promise(resolve => { img.onload = img.onerror = resolve; })
      )
    )
  }

  // Get the inital wrapper width based on the width of all children with their associated padding values
  const getItemsWrapperWidth = () => {
    if (!carouselItemsRef.current) return
    
    const carouselChildren = carouselItemsRef.current.children;
    const paddingWidth = config.gap * itemCount;

    if (carouselChildren) {
      let carouselWidth = 0;

      const processWidth = (child:any) => {
        const firstChild = child.children[0]
        const childWidth = firstChild?.offsetWidth
        carouselWidth += config.cardsToShow > 0 ? itemWidth : childWidth
      }

      if (config.yieldToImages && !imagesLoaded) {
        Promise.all(
          Array.from(carouselChildren).map((child:any) =>
            checkIfCardImagesLoaded(child).then(() => {
              processWidth(child)
            })
          )
        ).then(() => {
          setImagesLoaded(true)
          setItemsWrapperWidth(carouselWidth + paddingWidth)
        })

      } else {
        Array.from(carouselChildren).map((child:any) => {
          processWidth(child)
        });
        setItemsWrapperWidth(carouselWidth + paddingWidth)
      }
    }
  }

  const snapToItem = async (index:number) => {

    // Check if we are at the start of the list and haven't changed index,
    // if so just center to 0 and return.
    if (currentIndex === index && currentIndex === 0) {
      offsetRef.current = 0
      setAnimateTransition(true)
      return
    }
 
    let dir = index >= currentIndex ? 'next' : 'prev'

    const targetItem = carouselItemsRef.current.children.item(index)

    if (!targetItem) return

    const wrapperBox = carouselWrapperRef.current?.getBoundingClientRect()
      
      // trigger beforeChange listener
      config.beforeChange && config.beforeChange(currentIndex, index)

      const {moveVal, atStart, atEnd} = await getMoveVal(targetItem, carouselItemsRef.current, wrapperBox, dir)
      
      // Update offset.
      offsetRef.current = moveVal
      setAnimateTransition(true)
      if (atStart) { 
        index = 0
      } else if (atEnd) {
        index = itemCount
      }

      setCurrentIndex(index)
    
      config.afterChange && config.afterChange(index)
  }

  const handleTouchStart = (e) => {
    if (!config.touchControls) return
    const _touchX = e.x ?? e?.changedTouches[0]?.clientX // desktop event props ?? mobile (touch) event props
    setTouchX(_touchX)
    config.onTouchStart && config.onTouchStart(_touchX)
  }

  const handleTouchMove = (e) => {
    if (!config.touchControls) return
    const _eX = e.x ?? e?.changedTouches[0]?.clientX // desktop event props ?? mobile (touch) event props
    const _touchDelta = _eX - touchX
    config.onTouchMove && config.onTouchMove(_touchDelta)

    // If the user has interacted with the slider, disable scroll till they are done
    if (Math.abs(_touchDelta) > 100) {
      document.body.style.overflow = 'hidden'
    }

    scrub(`${offsetRef.current + _touchDelta}px`)
  }

  const handleTouchEnd = () => {
    // Release the scroll back to the body
    document.body.style.removeProperty('overflow')
    if (!config.touchControls) return
    config.onTouchEnd && config.onTouchEnd()
    checkActiveItem()
  }

  // Handle move transform
  const scrub = (val) => {
    carouselItemsRef.current.style.transform = `translateX(${val})`
  }

  // Check which item is currently front and center
  const checkActiveItem = (callback?) => {
    const wrapperBox = carouselWrapperRef.current?.getBoundingClientRect()
    const scrollItems = carouselItemsRef.current.children
    const centerPoint = wrapperBox.width / 2
    const centerPointBuffer = config.gap / 2

    // Itterate over each child and check it's position
    Array.from(scrollItems).map((child, index) => {
      const childRect = child.getBoundingClientRect()

      // If the childs left bounds are less than the center point and right bounds are greater than
      // the center point, we've found our star!
      if (
        (childRect.left - wrapperBox.left - centerPointBuffer <= centerPoint &&
        childRect.right - wrapperBox.left + centerPointBuffer >= centerPoint)
        ||
        (childRect.left > centerPoint && 0 === index) // check for first item
        ||
        (childRect.right < centerPoint && itemCount === index) // check for last item
      ) {
        snapToItem(index)
        callback && callback(index)
      }
    })
  }


  // Generic movement function called by next / prev movement interactions.
  const handleMoveInteract = (dir) => {
    let changedIndex = 0

    if (dir === 'next') {
      changedIndex = currentIndex+1 < itemCount ? currentIndex+1 : itemCount
    } else {
      changedIndex = currentIndex-1 > 0 ? currentIndex-1 : 0
    }

    return snapToItem(changedIndex)
  }


  // Interaction functions
  const nextCard = () => handleMoveInteract('next')
  const prevCard = () => handleMoveInteract('prev')
  
  const goToCard = (index) => {
    if (
      !carouselItemsRef.current || 
      !carouselWrapperRef.current  
    ) return
      snapToItem(index)
  }


  // Pass functions to external
  useImperativeHandle(carouselRef, () => ({
    nextCard,
    prevCard,
    goToCard: (index) => goToCard(index),
    getCurrentIndex: () => {return currentIndex}
  }));

  if (
    !children?.length
  ) return null

  if (
    children.length < 1
  ) return null

  // Main Carousel markup
  return (
    <div className={`cardCarousel ${isResizing ? 'resizing' : ''} ${itemsWrapperWidth !== 0 ? 'show' : ''}`} style={{ "padding": `0 ${config.padding}px` }}>
      <div
        className="cardCarousel-inner"
        ref={carouselWrapperRef}
        onTouchStart={ handleTouchStart }
        onTouchMove={ handleTouchMove }
        onTouchEnd={ handleTouchEnd }
      >
        <div
          ref={carouselItemsRef}
          className="cardCarousel-items"
          style={{
            "display": "flex", // Here as a placeholder value so that rendering is correct if a delay in loading styles occurs
            "alignItems": "center",  // Here as a placeholder value so that rendering is correct if a delay in loading styles occurs
            "width": itemsWrapperWidth !== 0 ? `${itemsWrapperWidth}px` : '99999px',
            "gap": `${config.gap}px`,
            "transition": animateTransition ? `transform ease-in-out ${config.transitionSpeed}ms` : ''
          }}>
          { children?.map((child, key) => {
            return (
              <div
                key={key}
                className="cardCarousel-item-content"
                data-active={key === currentIndex}
                style={itemWidth ? {"width": `${itemWidth}px`} : {}}>
                {child}
              </div>
            )
          }) }
        </div>
      </div>
      
      {displayControls &&
        <>
          { config.pagination &&
            <Pagination
              currentIndex={currentIndex}
              itemCount={itemCount}
              goToCard={goToCard}
            />
          }

          { config.arrows &&
            <ArrowButtons
              nextArrow={config.nextArrow}
              prevArrow={config.prevArrow}
              currentIndex={currentIndex}
              prevCard={prevCard}
              itemCount={itemCount}
              nextCard={nextCard}
            />
          }
        </>
      }

    </div>
  )
})

export default CardCarousel