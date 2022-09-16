import React from 'react'
import Image from 'next/image'
import S from '../../styles/mobile/Cta3.module.scss'
import anim from '../../public/assets/Cta3/HQ_Render_001.png'
import BlueButton from '../BlueButton'

function Cta3() {
  return (
    <div className={S.main}>
      {' '}
      <div className={S.shadow}>
        <div className={S.container}>
          <p className={S.suptitle}>WE’RE PROUD OF</p>
          <div className={S.big_title}>
            <div className={S.layer1}>
              <span>OUR DISCORD COMMUNITY WITH OVER </span>
              <span>15K MEMBERS</span>
            </div>
            <div className={S.layer2}>
              <span style={{ opacity: '0' }}>OUR DISCORD COMMUNITY WITH OVER </span>
              <span>15K MEMBERS</span>
            </div>
          </div>
          <div className={S.line} />
          <div className={S.joinBtn}>
            <BlueButton bgVariant='lowerLeft' text='JOIN OUR DISCORD' type='long' />
          </div>
          <div className={S.imageBox}>
            <Image src={anim} width='301' height='169' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cta3
