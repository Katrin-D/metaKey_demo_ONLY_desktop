import React from 'react'
import Image from 'next/image'
import Asset19 from '../public/assets/Landing/Asset 1 9.svg'
import Asset18 from '../public/assets/Landing/Asset 1 8.svg'
import Asset17 from '../public/assets/Landing/Asset 1 7.svg'
import platform from '../public/assets/header/website_image_2022 1.svg'
import S from '../styles/landing.module.scss'
import { useScroll } from './providers/ScrollProvider'
import MetallicButton from './MetallicButton'

function Landing() {
  const { top } = useScroll()

  const socialDisplacement = Math.min(top * 2.5, 125 * 2.5)
  const opacityText = socialDisplacement ? 125 / top - 0.5 : 1

  return (
    <div id='Landing'>
      <div className={S.asset19} style={{ transform: `translateY(${top * 0.1}px)`, opacity: `${opacityText}` }}>
        <Image src={Asset19} />
      </div>
      <div className={S.asset18} style={{ transform: `translateY(${top * 0.1}px)`, opacity: `${opacityText}` }}>
        <Image src={Asset18} />
      </div>
      <div className={S.asset17} style={{ transform: `translateY(${top * 0.1}px)`, opacity: `${opacityText}` }}>
        <Image src={Asset17} />
      </div>

      <div className={S.platform} style={{ transform: `translateY(-${top * 0.7}px)` }}>
        <Image src={platform} alt='NFT platform' />
      </div>
      <div
        className={` ${S.textConnecting} `}
        style={{ transform: `translateY(-${top * 0.8}px)`, opacity: `${opacityText}` }}
      >
        <span>CONNECTING</span>
        <span style={{ fontWeight: '700' }}> WEB 3</span>
      </div>
      <MetallicButton top={511} left={236} />
    </div>
  )
}

export default Landing
