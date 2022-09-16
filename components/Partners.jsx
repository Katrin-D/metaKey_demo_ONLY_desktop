import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import S from '../styles/Partners.module.scss'
import logo15 from '../public/assets/Partners/Asset 22.svg'
import logo3 from '../public/assets/Partners/Asset 23.svg'
import logo1 from '../public/assets/Partners/Asset 24.svg'
import logo8 from '../public/assets/Partners/Asset 25.svg'
import logo7 from '../public/assets/Partners/Asset 26.svg'
import logo6 from '../public/assets/Partners/Asset 27.svg'
import logo10 from '../public/assets/Partners/Asset 28.svg'
import logo14 from '../public/assets/Partners/Asset 29.svg'
import logo12 from '../public/assets/Partners/Asset 30.svg'
import logo4 from '../public/assets/Partners/Asset 31.svg'
import logo11 from '../public/assets/Partners/Asset 32.svg'
import logo5 from '../public/assets/Partners/Asset 33.svg'
import logo9 from '../public/assets/Partners/Asset 34.svg'
import logo2 from '../public/assets/Partners/Asset 35.svg'
import logo13 from '../public/assets/Partners/Asset 36.svg'

function Partners({ position, animationInterval, height }) {
  const [logosWidth, setLogosWidth] = useState(0)
  const [overflowValue, setOverflowValue] = useState(0)
  const [translationValue, setTranslationValue] = useState(0)

  useEffect(() => {
    if (overflowValue) {
      setTimeout(() => {
        if (translationValue === 0) {
          setTranslationValue(overflowValue)
        } else {
          setTranslationValue(0)
        }
      }, animationInterval || 2100)
    }
  }, [overflowValue, translationValue, animationInterval])

  useEffect(() => {
    if (logosWidth !== 0) {
      setOverflowValue(document.body.clientWidth - logosWidth)
    }
  }, [logosWidth])

  /**
   * @param {HTMLElement} element
   */
  const logosRef = (element) => {
    if (logosWidth === 0 && element) {
      setLogosWidth(element.offsetWidth)
    }
  }

  return (
    <div className={S.main} style={{ top: position, height }}>
      <div
        className={S.logos}
        ref={logosRef}
        style={{
          transform: `translateX(${translationValue}px)`,
          transitionDuration: animationInterval !== undefined ? `${animationInterval - 100}ms` : undefined,
        }}
      >
        <Image src={logo1} width='166' height='166' />
        <Image src={logo2} width='79' height='79' />
        <Image src={logo3} width='109' height='109' />
        <Image src={logo4} width='56' height='56' />
        <Image src={logo5} width='171' height='171' />
        <Image src={logo6} width='198' height='198' />
        <Image src={logo7} width='138' height='138' />
        <Image src={logo8} width='195' height='195' />
        <Image src={logo9} width='92' height='92' />
        <Image src={logo10} width='91' height='91' />
        <Image src={logo11} width='136' height='136' />
        <Image src={logo12} width='32' height='32' />
        <Image src={logo13} width='107' height='107' />
        <Image src={logo14} width='73' height='73' />
        <Image src={logo15} width='64' height='64' />
      </div>
    </div>
  )
}

export default Partners
