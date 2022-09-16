import React from 'react'
import Image from 'next/image'
import S from '../../styles/Mobile.module.scss'
import ship from '../../public/assets/header/OpenSea.svg'
import discord from '../../public/assets/header/Discord.svg'
import twitter from '../../public/assets/header/Twitter.svg'

function SocIcons(props) {
  return (
    <div className={S.containerSocIcons}>
      <a href=''>
        <div className={S.spaceBetweenIco}>
          <Image src={ship} width='20' height='16' />
        </div>
      </a>
      <a href=''>
        <div className={S.spaceBetweenIco}>
          <Image src={discord} width='20' height='14' />
        </div>
      </a>
      <a href=''>
        <div>
          <Image src={twitter} width='20' height='14' />
        </div>
      </a>
    </div>
  )
}

export default SocIcons
