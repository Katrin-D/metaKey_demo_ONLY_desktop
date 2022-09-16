import React from 'react'
import Image from 'next/image'
import S from '../../styles/mobile/Metakrew.module.scss'
import image from '../../public/assets/Metakrew/IdleLoopFinal_LQ.gif'
import BlueButton from '../BlueButton'

function Metakrew() {
  return (
    <div className={S.main}>
      <div className={S.container}>
        <div className={S.frame}>
          <div className={S.content}>
            <h3>AVATAR PROJECT</h3>
            <h2>METAKREW</h2>
            <div className={S.line} />
            <p>
              The Metakrew is a collection of 9750 PFP avatars randomly generated from a pool of over 200 traits, loaded with Metaverse utility and claimed for
              free by Metakey-holders at the time of snapshot in November 2021.
            </p>
            <p>Every Krewmate will soon have a 3D counterpart generated from the same metadata, plugged into a variety of virtual worlds and games.</p>
          </div>

          <div className={S.image}>
            <Image src={image} layout='fill' objectFit='cover' />
          </div>
          <div className={S.btn}>
            <BlueButton bgVariant='double' text='Visit' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Metakrew
