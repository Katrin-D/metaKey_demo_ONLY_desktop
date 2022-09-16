import React from 'react'
import clsx from 'clsx'
import { useScroll } from './providers/ScrollProvider'
import S from '../styles/Header.module.scss'

const bet = 500 // Burger start expansion threshold
const l2md = 70 // burger's line 2 max displacement
const l3md = l2md * 2 // burger's line 3 max displacement
const l2es = 0.3 // line 2 expansion speed
const l3es = l2es * 2 // line 2 expansion speed
const mlh = 17 // max line height in burger menu
const m2md = 84 // menu 2 max displacement
const l3minw = 11 // line 3 min width
const l3maxw = 20 // line 3 max width
const l3al = l3maxw - l3minw // line 3 animation length

const BurgerMenu = () => {
  const { top } = useScroll()

  const burgerLine2Displacement = top > bet ? Math.min((top - bet) * l2es, l2md) : 0
  const burgerLine3Displacement = top > bet ? Math.min((top - bet) * l3es, l3md) : 0
  const transform1 = `translateY(${burgerLine2Displacement}px)`
  const transform2 = `translateY(${burgerLine3Displacement}px)`
  const burgerMenuLineHeight = (burgerLine2Displacement / l2md) * mlh
  const menuOpacity = burgerLine2Displacement / l2md
  const menu2Displacement = (burgerLine2Displacement / l2md) * m2md
  const line3Width = (burgerLine2Displacement / l2md) * l3al + l3minw
  const menuItemsAvailability = top > bet ? undefined : 'none'

  const isMenuBlack =
    (top > 4380 && top < 8043) ||
    (top > 8867 && top < 10829) ||
    (top > 13912 && top < 15800) ||
    (top > 16260 && top < 17720) ||
    (top > 19020 && top < 20400)

  return (
    <>
      <ul
        className={`${S.burgerMenu} ${S.burgerMenuList1}`}
        style={{ lineHeight: `${burgerMenuLineHeight}px`, opacity: menuOpacity, display: menuItemsAvailability }}
      >
        <li>
          <a className={clsx({ [S.blackColor]: isMenuBlack })} href=''>
            Home
          </a>
        </li>
        <li>
          <a className={clsx({ [S.blackColor]: isMenuBlack })} href=''>
            What is it
          </a>
        </li>
        <li>
          <a className={clsx({ [S.blackColor]: isMenuBlack })} href=''>
            Editions
          </a>
        </li>
        <li>
          <a className={clsx({ [S.blackColor]: isMenuBlack })} href=''>
            Product
          </a>
        </li>
      </ul>
      <ul
        className={`${S.burgerMenu} ${S.burgerMenuList2}`}
        style={{
          top: menu2Displacement,
          opacity: menuOpacity,
          lineHeight: `${burgerMenuLineHeight}px`,
          display: menuItemsAvailability,
        }}
      >
        <li>
          <a className={clsx({ [S.blackColor]: isMenuBlack })} href=''>
            3d avatars
          </a>
        </li>
        <li>
          <a className={clsx({ [S.blackColor]: isMenuBlack })} href=''>
            Integration
          </a>
        </li>
        <li>
          <a className={clsx({ [S.blackColor]: isMenuBlack })} href=''>
            Roadmap
          </a>
        </li>
        <li>
          <a className={clsx({ [S.blackColor]: isMenuBlack })} href=''>
            Team
          </a>
        </li>
      </ul>
      <div className={S.hamburger}>
        <div className={clsx(S.lineMenu, S.lineMenu1, { [S.blackBgc]: isMenuBlack })} />
        <div
          className={clsx(S.lineMenu, S.lineMenu2, { [S.blackBgc]: isMenuBlack })}
          style={{ transform: transform1 }}
        />
        <div
          className={clsx(S.lineMenu, S.lineMenu3, { [S.blackBgc]: isMenuBlack })}
          style={{ transform: transform2, width: line3Width }}
        />
      </div>
    </>
  )
}

export default BurgerMenu
