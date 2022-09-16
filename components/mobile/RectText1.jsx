import React from 'react'
import Image from 'next/image'
import S from '../../styles/Mobile.module.scss'
import rect from '../../public/svgs/mobile/Rectangle 203.svg'

function RectText1(props) {
  return (
    <>
      <div className={S.rect1}>
        <Image src={rect} />
      </div>

      <div className={S.rectText1}>
        <div className={S.titleRect}>
          <b>What is a Metakey?</b>
        </div>
        <div style={{ opacity: '0.001' }}>0</div>
        <div>The Metakey is an NFT, (ERC1155),</div>
        <div>that can be used across partnered</div>
        <div>
          platforms to unlock <b>avatars</b>, <b>game</b>
        </div>
        <div>
          <b>assets</b>, <b>course</b> <b>materials</b>,
        </div>
        <div>
          <b>discounts</b> and anything
        </div>
        <div>else our team and partners can</div>
        <div>dream of.</div>
        <div style={{ opacity: '0.001' }}>0</div>
        <div>
          Your Metakey will be your <b>access and</b>
        </div>
        <div>
          <b>experience card</b> to <b>every</b> project/
        </div>
        <div>game/website we partner with.</div>
      </div>
    </>
  )
}

export default RectText1
