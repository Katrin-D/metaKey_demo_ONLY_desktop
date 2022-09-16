import React from 'react'
import S from '../../styles/mobile/Statistics.module.scss'
import MetallicButton from '../MetallicButton'

function Statistics() {
  return (
    <div className={S.main}>
      <h2 className={S.title}>OUR ACCOMPLISHMENTS SO FAR</h2>
      <div className={`${S.frame} ${S.frame1}`}>
        <h3>TWITTER</h3>
        <div className={S.stat}>
          <h4>FOLLOWERS</h4>
          <p className={S.value}>38.8K</p>
        </div>
        <div className={S.line} />
        <p className={S.text}>Our fantastic community of helpful people have great advice on NFTs and blockchain!</p>
      </div>
      <div className={`${S.frame} ${S.frame2}`}>
        <h3>
          METAKEY
          <br />
          UNIQUE HOLDERS
        </h3>
        <p className={`${S.value} ${S.bigValue}`}>6107</p>
        <div className={S.btn}>
          <MetallicButton bgVariant='flat' text='MORE STATS' />
        </div>
      </div>
      <div className={`${S.frame} ${S.frame3}`}>
        <h3>DISCORD</h3>
        <div className={S.line} />
        <div className={S.stat}>
          <h4>MEMBERS</h4>
          <p className={S.value}>15K</p>
        </div>
        <div className={S.stat}>
          <h4>KEYMASTERS</h4>
          <p className={S.value}>267</p>
        </div>
        <div className={S.stat}>
          <h4>ACTIVE ONLINE</h4>
          <p className={S.value}>3K</p>
        </div>
      </div>
    </div>
  )
}
export default Statistics
