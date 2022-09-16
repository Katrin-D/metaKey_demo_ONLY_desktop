import React from 'react'
import Image from 'next/image'
import Logo from '../public/assets/header/Logo.svg'
import blackLogo from '../public/Logo.png'
import S from '../styles/Header.module.scss'
import BurgerMenu from './BurgerMenu'
import { useScroll } from './providers/ScrollProvider'
import SocialIcons from './SocialIcons'

function Header() {
  const { top } = useScroll()

  const socialDisplacement = Math.min(top * 2.5, 125 * 2.5)
  const isSocialBlack =
    ((top > 4442 && top < 8096) ||
      (top > 8920 && top < 10888) ||
      (top > 13972 && top < 15840) ||
      (top > 16320 && top < 17760) ||
      (top > 19073 && top < 20140)) * 1

  return (
    <div className={S.header}>
      <div className={S.subWrapper}>
        <div className={S.logo}>
          <div style={{ opacity: 1 - isSocialBlack }}>
            <Image src={Logo} width='37' height='33' />
          </div>
          <div style={{ opacity: isSocialBlack }}>
            <Image src={blackLogo} width='37' height='33' />
          </div>
        </div>
        <SocialIcons socialDisplacement={socialDisplacement} isSocialBlack={isSocialBlack} />
        <BurgerMenu />
      </div>
    </div>
  )
}

export default Header
