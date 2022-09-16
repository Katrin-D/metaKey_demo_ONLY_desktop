import React from 'react'
import Image from 'next/image'
import S from '../styles/Cta1.module.css'
import Line from '../public/assets/Cta1/Line 38.svg'
import { useScroll } from './providers/ScrollProvider'
import MetallicButton from './MetallicButton'

const startAnimatinThreshold = 1950
const animationDuration = 200

function Cta1() {
  const { top } = useScroll()

  const opacity =
    top >= startAnimatinThreshold ? Math.min(top - startAnimatinThreshold, animationDuration) / animationDuration : 0

  return (
    <div id='Cta1' className={S.cta1} style={{ opacity }}>
      <div className={S.blueText}>On the journey to build unlimited use cases within a single NFT</div>
      <div className={S.blur}>On the journey to build unlimited use cases within a single NFT</div>
      <div className={S.exploring1}>
        <span>EXPLORING</span> <span>HYPER INTEROPERABILITY</span>
      </div>
      <div className={S.exploring3}>
        <span style={{ opacity: '0' }}>EXPLORING</span> <span>HYPER INTEROPERABILITY</span>
      </div>
      <div className={S.exploring2}>
        <span style={{ opacity: '0' }}>EXPLORING</span> <span>HYPER INTEROPERABILITY</span>{' '}
      </div>
      <div className={S.connecting}>
        By connecting the Metakey to <b className={S.b1}>HUNDREDS</b>{' '}
        <span style={{ wordSpacing: '4px' }}>
          of <b className={S.b2}>Web3</b>
        </span>{' '}
        Projects
      </div>
      <div className={S.line}>
        <Image src={Line} />
      </div>
      <MetallicButton bgVariant='lowerRight' top={1826} left={642} />
    </div>
  )
}

export default Cta1
