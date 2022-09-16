import React from 'react'
import Image from 'next/image'
import S from '../../styles/mobile/Cta2.module.scss'
import anim from '../../public/assets/Cta2/metakey_loop_black_alpha000 2.png'
import MetallicButton from '../MetallicButton'

function Cta2() {
  return (
    <div className={S.main}>
      <div className={S.container}>
        <h2 className={S.blueGlow}>WE ARE PARTNERING WITH</h2>
        <div className={S.big_title}>
          <div className={S.layer1}>
            <span>EVERY MAJOR BRAND IN THE </span>
            <span>METAVERSE</span>
          </div>
          <div className={S.layer3}>
            <span style={{ opacity: '0' }}>EVERY MAJOR BRAND IN THE </span> <span>METAVERSE</span>
          </div>
          <div className={S.layer2}>
            <span style={{ opacity: '0' }}>EVERY MAJOR BRAND IN THE </span> <span>METAVERSE</span>
          </div>
        </div>
        <div className={S.line} />
        <p className={S.text}>Reach out to partner with us today</p>
        <div className={S.btn}>
          <MetallicButton bgVariant='lowerRight' text='Click here' />
        </div>
        <div className={S.animation}>
          <Image src={anim} width='289' height='225' />
        </div>
      </div>
    </div>
  )
}

export default Cta2
