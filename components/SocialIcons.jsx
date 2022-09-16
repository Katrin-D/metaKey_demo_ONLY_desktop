import PropTypes from 'prop-types'
import React from 'react'
import Image from 'next/image'
import S from '../styles/social.module.scss'
import ship from '../public/assets/header/OpenSea.svg'
import blackShip from '../public/assets/header/OpenSeaBlack.svg'
import discord from '../public/assets/header/Discord.svg'
import blackDiscord from '../public/assets/header/DiscordBlack.svg'
import twitter from '../public/assets/header/Twitter.svg'
import blackTwitter from '../public/assets/header/TwitterBlack.svg'

const SocialIcons = ({ socialDisplacement, isSocialBlack }) => {
  return (
    <div className={S.fixedSocialWrapper}>
      <div className={S.relativeSocialWrapper}>
        <div className={S.social} style={{ transform: `translateY(-${socialDisplacement}px)` }}>
          <a href=''>
            <div style={{ opacity: 1 - isSocialBlack }}>
              <Image src={ship} width='20' height='16' />
            </div>
            <div style={{ top: 2, opacity: isSocialBlack }}>
              <Image src={blackShip} width='20' height='15' />
            </div>
          </a>
          <a href=''>
            <div style={{ opacity: 1 - isSocialBlack }}>
              <Image src={discord} width='20' height='14' />
            </div>
            <div style={{ opacity: isSocialBlack }}>
              <Image src={blackDiscord} width='20' height='14' />
            </div>
          </a>
          <a href=''>
            <div style={{ opacity: 1 - isSocialBlack }}>
              <Image src={twitter} width='20' height='14' />
            </div>
            <div style={{ opacity: isSocialBlack }}>
              <Image src={blackTwitter} width='20' height='13' />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

SocialIcons.propTypes = {
  isSocialBlack: PropTypes.number,
  socialDisplacement: PropTypes.number.isRequired,
}

SocialIcons.defaultProps = {
  isSocialBlack: 0,
}

export default SocialIcons
