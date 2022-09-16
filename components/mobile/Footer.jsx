import React from 'react'
import Image from 'next/image'
import S from '../../styles/mobile/Footer.module.scss'
import MetallicButton from '../MetallicButton'
import MetaKey from '../../public/assets/Footer/Logo.svg'

function Footer() {
  return (
    <div className={S.main}>
      <div className={S.container}>
        <div className={S.btn}>
          <MetallicButton />
        </div>
        <div className={S.footer_section}>
          <h2>Follow Us</h2>
          <div className={`${S.items} ${S.items2}`}>
            <ul>
              <li className={S.twitter}>
                <a href=''>Twitter</a>
              </li>
              <li className={S.discord}>
                <a href=''>Discord</a>
              </li>
              <li className={S.youtube}>
                <a href=''>Youtube</a>
              </li>
              <li className={S.twitch}>
                <a href=''>Twitch</a>
              </li>
              <li className={S.medium}>
                <a href=''>Medium</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={S.footer_section}>
          <h2>Menu</h2>
          <div className={`${S.items} ${S.items1}`}>
            <ul>
              <li>
                <a href=''>ABOUT METAKEY</a>
              </li>
              <li>
                <a href=''>EDITIONS & SUPPLY</a>
              </li>
              <li>
                <a href=''>THE COMMUNITY</a>
              </li>
              <li>
                <a href=''>BRAND CASES</a>
              </li>
              <li>
                <a href=''>STATISTICS</a>
              </li>
              <li>
                <a href=''>THE TEAM</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={S.logo}>
          <Image src={MetaKey} width='227' height='46' />
          <p>&#169; Metakey, Pte Ltd. 2021.</p>
        </div>
      </div>
    </div>
  )
}
export default Footer
