import React from 'react'
import Image from 'next/image'
import S from '../styles/TheKey.module.scss'
import img from '../public/assets/Metakeystills0386 1.svg'
import { useScroll } from './providers/ScrollProvider'

const startAnimationThreshold = 800
const theKeyContentTop = 200
const oneKeyAnimStart = 950
const useCasesAnimStart = 1000
const oneKeyMaxShift = 300
const useCasesMaxShift = 400
const useCasesAnimSpeed = 1.6
const finalContentAnimStart = 1500
const finalTransitionDuration = 300
const disableFixedThreshold = 2100
const finalAbsolutePosition = 1280

function TheKey() {
  const { top } = useScroll()

  const isFixed = top >= startAnimationThreshold && top < disableFixedThreshold
  const oneKeyShift = top > oneKeyAnimStart ? Math.min(top - oneKeyAnimStart, oneKeyMaxShift) : 0
  const useCasesShift =
    top > useCasesAnimStart ? Math.min((top - useCasesAnimStart) * useCasesAnimSpeed, useCasesMaxShift) : 0
  const useCasesOpacity =
    top > useCasesAnimStart
      ? Math.min((top - useCasesAnimStart) * useCasesAnimSpeed, useCasesMaxShift) / useCasesMaxShift
      : 0
  const oneKeyOpacity =
    top > finalContentAnimStart
      ? 1 - Math.min(top - finalContentAnimStart, finalTransitionDuration) / finalTransitionDuration
      : 1
  const useFinalOpacity = top > finalContentAnimStart

  return (
    <div
      id='TheKey'
      className={isFixed ? 'p-fixed' : 'p-absolute'}
      style={{ top: top < disableFixedThreshold ? 0 : finalAbsolutePosition }}
    >
      <div className='p-relative'>
        <div
          className={`p-absolute ${S.theKeyContent}`}
          style={{ top: isFixed ? theKeyContentTop : startAnimationThreshold + theKeyContentTop }}
        >
          <div
            className={S.useCases}
            style={{
              transform: `translateX(${useCasesShift}px)`,
              opacity: useFinalOpacity ? oneKeyOpacity : useCasesOpacity,
            }}
          >
            100’s of USE CASES
          </div>
          <div className={S.oneKey} style={{ transform: `translateX(-${oneKeyShift}px)`, opacity: oneKeyOpacity }}>
            1 Key
          </div>
          <div id='Final content' style={{ opacity: 1 - oneKeyOpacity }}>
            <div className={S.text1}>THE KEY</div>
            <div className={S.blur}>THE KEY</div>
            <div className={S.textFull}>
              THE KEY <span>TO THE METAVERSE</span>
            </div>
            <div className={S.img}>
              <Image src={img} alt='meta key' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheKey
