import React from 'react'
import Image from 'next/image'
import S from '../styles/Cta4.module.scss'
import anim from '../public/assets/Cta4/Metakeystills0317 1.png'
import BlueButton from './BlueButton'

function Cta4() {
  return (
    <div className={S.main}>
      <div className={S.container}>
        <p className={S.suptitle}>YOU’RE NOT TOO LATE</p>
        <div className={S.big_title}>
          <div className={S.layer1}>
            <span>METAKEY IS </span>
            <span>JUST GETTING STARTED</span>
          </div>
          <div className={S.layer2}>
            <span style={{ opacity: '0' }}>METAKEY IS </span>
            <span>JUST GETTING STARTED</span>
          </div>
        </div>
        <div className={S.line} />
        <div className={S.joinBtn}>
          <BlueButton bgVariant='lowerLeft' text='GET MY KEY' />
        </div>
        <div>
          <Image src={anim} width='567' height='317' />
        </div>
      </div>
    </div>
  )
}

export default Cta4
