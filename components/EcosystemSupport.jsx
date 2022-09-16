import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import S from '../styles/EcosystemSupport.module.scss'
import image from '../public/assets/EcosystemSupport/Component 2.png'

const { title, title1, title2, title3, title4, text, text1, text2, text3, text4 } = S

function EcosystemSupport() {
  return (
    <div className={S.main}>
      <div className={S.container}>
        <h2>WE’RE SUPPORTING THE ECOSYSTEM</h2>
        <h3 className={S.blueGlow}>METAKEY VALUE MODEL</h3>
        <div className={S.content}>
          <div className={S.image}>
            <Image src={image} width='560' height='425' />
          </div>
          <h4 className={clsx(title, title1)}>Our Customers</h4>
          <p className={clsx(text, text1)}>
            A one time purchase can bring a life-time of value. Holders can use it in games, use it to unlock discounts,
            get airdrops from licensed brands, experience exclusive events, and more.
          </p>
          <h4 className={clsx(title, title2)}>Community</h4>
          <p className={clsx(text, text2)}>
            The Metakey can be that community. 10s of thousands of people owning Metakeys excited for the partners,
            airdrops and experiences we bring.
          </p>
          <h4 className={clsx(title, title3)}>Partners</h4>
          <p className={clsx(text, text3)}>
            As consumers and brands enter this space, Metakey can link the two to communicate value among each other,
            being a core part of brands activating and launching their NFT strategies as they enter with our community
            at the heart of it.
          </p>
          <h4 className={clsx(title, title4)}>Brands</h4>
          <p className={clsx(text, text4)}>
            New blockchain startups and brands entering the space need to build their reputation and anchor themselves
            into the NFT community.
          </p>
        </div>
      </div>
    </div>
  )
}

export default EcosystemSupport
