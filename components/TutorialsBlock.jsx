import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import style from '../styles/Tutorials.module.scss'
import keyCard from '../public/assets/keyCard.svg'
import asset28 from '../public/assets/Asset 2 8.svg'
import mouse from '../public/assets/mouse.svg'
import useTranslation from '../hooks/useTranslation'

const {
  linkBlock,
  blueGlow,
  tutorialLink,
  relativeWrapper,
  root,
  explanationLink,
  key_card,
  planetImage,
  line,
  line1,
  line2,
  line3,
  line4,
  line5,
  line6,
  exploreBlock,
  expanded,
  lineExpanded,
  line2Expanded,
  line5Expanded,
  reverse,
  fixed,
} = style

const TutorialsBlock = () => {
  const { translation, translate } = useTranslation()
  const [keyCardElement, setKeyCardElement] = useState(/** @type {?HTMLElement} */ null)
  const [planetElement, setPlanetElement] = useState(/** @type {?HTMLElement} */ null)
  const [cardAnimationStarted, setCardAnimationStarted] = useState(false)
  const [cardAnimationReverse, setCardAnimationReverse] = useState(false)
  const [planetAnimationStarted, setPlanetAnimationStarted] = useState(false)
  const [planetAnimationReverse, setPlanetAnimationReverse] = useState(false)

  // card hover listeners
  useEffect(() => {
    if (!keyCardElement) {
      return
    }
    const mouseEnterListener = () => {
      setCardAnimationStarted(true)
      setCardAnimationReverse(false)
    }
    const mouseOutListener = () => {
      setCardAnimationStarted(false)
      setCardAnimationReverse(true)
    }
    keyCardElement.addEventListener('mouseenter', mouseEnterListener)
    keyCardElement.addEventListener('mouseout', mouseOutListener)

    return () => {
      keyCardElement.removeEventListener('mouseenter', mouseEnterListener)
      keyCardElement.removeEventListener('mouseout', mouseOutListener)
    }
  }, [keyCardElement])

  // planet hover listeners
  useEffect(() => {
    if (!planetElement) {
      return
    }
    const mouseEnterListener = () => {
      setPlanetAnimationStarted(true)
      setPlanetAnimationReverse(false)
    }
    const mouseOutListener = () => {
      setPlanetAnimationStarted(false)
      setPlanetAnimationReverse(true)
    }
    planetElement.addEventListener('mouseenter', mouseEnterListener)
    planetElement.addEventListener('mouseout', mouseOutListener)

    return () => {
      planetElement.removeEventListener('mouseenter', mouseEnterListener)
      planetElement.removeEventListener('mouseout', mouseOutListener)
    }
  }, [planetElement])

  const keyCardRef = (element) => {
    if (element && !keyCardElement) {
      setKeyCardElement(element)
    }
  }

  const planetRef = (element) => {
    if (element && !planetElement) {
      setPlanetElement(element)
    }
  }

  return (
    <div
      id='Tutorials'
      className={clsx(root, { [fixed]: translate })}
      style={{ transform: `translateY(${translation}px)` }}
    >
      <div className={relativeWrapper}>
        <a
          className={clsx(linkBlock, tutorialLink, {
            [expanded]: cardAnimationStarted,
            [reverse]: cardAnimationReverse,
          })}
          href=''
        >
          CLICK HERE FOR A <b>TUTORIAL</b> ON <b className={blueGlow}>PURCHASING YOUR METAKEY</b>
        </a>
        <a
          className={clsx(linkBlock, explanationLink, {
            [expanded]: planetAnimationStarted,
            [reverse]: planetAnimationReverse,
          })}
          href=''
        >
          CLICK HERE FOR AN <b className={blueGlow}>IN DEPTH EXPLANATION</b> OF HOW OUR KEY WORKS ON THE{' '}
          <b>BLOCKCHAIN</b>
        </a>
        <div
          id='Line1'
          className={clsx(line, line1, { [lineExpanded]: cardAnimationStarted, [reverse]: cardAnimationReverse })}
        />
        <div
          id='Line2'
          className={clsx(line, line2, { [line2Expanded]: cardAnimationStarted, [reverse]: cardAnimationReverse })}
        />
        <div
          id='Line3'
          className={clsx(line, line3, { [lineExpanded]: cardAnimationStarted, [reverse]: cardAnimationReverse })}
        />
        <div
          id='Line4'
          className={clsx(line, line4, { [lineExpanded]: planetAnimationStarted, [reverse]: planetAnimationReverse })}
        />
        <div
          id='Line5'
          className={clsx(line, line5, { [line5Expanded]: planetAnimationStarted, [reverse]: planetAnimationReverse })}
        />
        <div
          id='Line6'
          className={clsx(line, line6, { [lineExpanded]: planetAnimationStarted, [reverse]: planetAnimationReverse })}
        />
        <div className={key_card} ref={keyCardRef}>
          <Image src={keyCard} width={185} height={280} />
        </div>
        <div className={planetImage} ref={planetRef}>
          <Image src={asset28} width={141} height={141} />
        </div>
        <div className={exploreBlock}>
          <span>Explore</span>
          <Image src={mouse} width={12} height={24} />
        </div>
      </div>
    </div>
  )
}

export default TutorialsBlock
