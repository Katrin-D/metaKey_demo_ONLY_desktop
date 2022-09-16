import React from 'react'
import Image from 'next/image'
import S from '../../styles/mobile/EcosystemSupport.module.scss'
import image from '../../public/assets/EcosystemSupport/Mobile Ecosystem Support.png'

function EcosystemSupport() {
  return (
    <div className={S.main}>
      <div className={S.container}>
        <h2>WE’RE SUPPORTING THE ECOSYSTEM</h2>
        <h3 className={S.blueGlow}>METAKEY VALUE MODEL</h3>
        <div className={S.image}>
          <Image src={image} width='368' height='681' />
        </div>
        <div className={S.section1}>
          <h4 className={S.title}>Our Customers</h4>
          <p className={S.text}>
            A one time purchase can bring a life-time of value. Holders can use it in games, use it to unlock discounts,
            get airdrops from licensed brands, experience exclusive events, and more.
          </p>
        </div>
        <div className={S.section2}>
          <h4 className={S.title}>Partners</h4>
          <p className={S.text}>
            As consumers and brands enter this space, Metakey can link the two to communicate value among each other,
            being a core part of brands activating and launching their NFT strategies as they enter with our community
            at the heart of it.
          </p>
        </div>
        <div className={S.section3}>
          <h4 className={S.title}>Brands</h4>
          <p className={S.text}>
            New blockchain startups and brands entering the space need to build their reputation and anchor themselves
            into the NFT community.
          </p>
        </div>

        <div className={S.section4}>
          <h4 className={S.title}>Community</h4>
          <p className={S.text}>
            The Metakey can be that community. 10s of thousands of people owning Metakeys excited for the partners,
            airdrops and experiences we bring.
          </p>
        </div>
      </div>
    </div>
  )
}

export default EcosystemSupport
