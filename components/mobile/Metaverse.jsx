import React from 'react'
import S from '../../styles/mobile/Metaverse.module.scss'

function Metaverse() {
  return (
    <div className={S.main}>
      <div className={S.container}>
        <h2>What is the Metaverse All About?</h2>
        <div className={S.read_more}>
          <div className={S.plusIcon} />
          <p>Read more</p>
        </div>
        <div className={S.text}>
          <p>
            The Metaverse is a connected digital world that where you can take your identity and digital assets to your
            favourite web properties.
          </p>
          <p>Think Ready Player One.</p>
          <p>
            It will be built on blockchain and allow NFT to have functionality in different games, websites, virtual
            worlds.
          </p>
          <p>
            The Metakey is preparing for this by building a community and networking with as many web3 builders as
            possible.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Metaverse
