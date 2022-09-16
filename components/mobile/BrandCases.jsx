import React, { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import S from '../../styles/mobile/BrandCases.module.scss'
import bg1 from '../../public/assets/BrandCases/rtfkt-studios.jpg'
import bg2 from '../../public/assets/BrandCases/unnamed.jpg'
import bg3 from '../../public/assets/BrandCases/MZ.jpg'
import bg4 from '../../public/assets/BrandCases/cyberkongz 1.jpg'
import bg5 from '../../public/assets/BrandCases/metaverse-festival-Web-Thumb-1600-x-900.jpg'
import bg6 from '../../public/assets/BrandCases/sir jackie stewart.jpg'
import icon1 from '../../public/assets/BrandCases/FEQqqRlWQAAGnDE.png'
import icon2 from '../../public/assets/BrandCases/AOxMK ball big.png'
import icon3 from '../../public/assets/BrandCases/MZ token.png'
import icon4 from '../../public/assets/BrandCases/cyberkongz head.png'
import icon5 from '../../public/assets/BrandCases/decentraland 3d.png'
import icon6 from '../../public/assets/BrandCases/SJS helmet.png'
//import { useScroll } from '../providers/ScrollProvider'

const defaultState = [false, false, false, false, false, false]

const ReadMoreButton = ({ changeTextVisibility, fullTextsVisibilities, index }) => {
  return (
    <div className={S.read_more} onClick={changeTextVisibility(index)}>
      <div className={clsx(S.plusIcon, { [S.minusIcon]: fullTextsVisibilities[index] })} />
      {!fullTextsVisibilities[index] && <p>READ MORE</p>}
      {fullTextsVisibilities[index] && <p>READ LESS</p>}
    </div>
  )
}

function BrandCases() {
  //const { top } = useScroll()
  const [fullTextsVisibilities, setFullTextsVisibilities] = useState(defaultState)

  const changeTextVisibility = (index) => (e) => {
    e.stopPropagation()
    const currentValue = fullTextsVisibilities[index]
    const newState = [...defaultState]
    newState[index] = !currentValue
    setFullTextsVisibilities(newState)
  }

  const reset = () => {
    setFullTextsVisibilities([...defaultState])
  }

  return (
    <div className={S.main}>
      <div className={S.container}>
        {/*<div*/}
        {/*  className={clsx(S.curtain, S.top, {*/}
        {/*    [S.step1]: top > 14498,*/}
        {/*    [S.step2]: top > 15040,*/}
        {/*    [S.step3]: top > 15540,*/}
        {/*  })}*/}
        {/*/>*/}
        {/*<div*/}
        {/*  className={clsx(S.curtain, S.bottom, {*/}
        {/*    [S.step1]: top > 14498,*/}
        {/*    [S.step2]: top > 15040,*/}
        {/*    [S.step3]: top > 15540,*/}
        {/*  })}*/}
        {/*/>*/}
        <div className={clsx(S.border, S.left)} />
        <div className={clsx(S.border, S.right)} />
        <div className={clsx(S.border, S.bottom)} />
        <div className={S.section1} onClick={reset}>
          <div className={S.bg}>
            <Image src={bg1} width='220' height='323' />
          </div>
          <div className={S.icon}>
            <Image src={icon1} width='137' height='137' />
          </div>
          <ReadMoreButton
            changeTextVisibility={changeTextVisibility}
            fullTextsVisibilities={fullTextsVisibilities}
            index={0}
          />
          <h2 className={S.title}>RTFKT STUDIOS</h2>
          <div className={clsx(S.hiddenText, { [S.hidden]: !fullTextsVisibilities[0] })}>
            <p className={S.text}>
              Artists of each Metakey Edition are incentivized with a 50% royalty share to add extra value to their
              Holders.
            </p>
            <p className={S.text}>
              Holders of Edition 2 were granted early guaranteed minting to the RTFKT Clonex drop: one of the most
              celebrated avatar projects to date.
            </p>
          </div>
        </div>
        <div className={S.section2} onClick={reset}>
          <div className={S.bg}>
            <Image src={bg2} width='272' height='272' />
          </div>
          <div className={S.icon}>
            <Image src={icon2} width='142' height='107' />
          </div>
          <h2 className={S.title}>AUSTRALIAN OPEN NFT</h2>
          <ReadMoreButton
            changeTextVisibility={changeTextVisibility}
            fullTextsVisibilities={fullTextsVisibilities}
            index={1}
          />
          <div className={clsx(S.hiddenText, S.hiddenText2, { [S.hidden]: !fullTextsVisibilities[1] })}>
            <p className={S.text}>
              Metakey-holders were exclusively whitelisted for an early minting of the AO Art Ball NFTs— a
              groundbreaking new way for fans to engage with spectator sport in real time.
            </p>
            <p className={S.text}>The public sale sold out in minutes.</p>
          </div>
        </div>
        <div className={S.section3} onClick={reset}>
          <div className={S.bg}>
            <Image src={bg3} width='242' height='323' />
          </div>
          <div className={S.icon}>
            <Image src={icon3} width='101' height='95' />
          </div>
          <ReadMoreButton
            changeTextVisibility={changeTextVisibility}
            fullTextsVisibilities={fullTextsVisibilities}
            index={3}
          />
          <h2 className={S.title}>METAZONE</h2>
          <div className={clsx(S.hiddenText, { [S.hidden]: !fullTextsVisibilities[3] })}>
            <p className={S.text}>
              Through the MetaZone platform, we have airdropped every Key-holder a fully functional, future-proofed
              pre-fab Decentraland building that they can customize and deploy— on their own land, or by sale or loan to
              another land owner.
            </p>
            <p className={S.text}>
              Key-holders will soon be able to earn by contributing to this "MetaKamp" collection!
            </p>
          </div>
        </div>
        <div className={S.section4} onClick={reset}>
          <div className={S.bg}>
            <Image src={bg4} width='239' height='384' />
          </div>
          <div className={S.icon}>
            <Image src={icon4} width='111' height='105' />
          </div>
          <h2 className={S.title}>CYBERKONGZ</h2>
          <ReadMoreButton
            changeTextVisibility={changeTextVisibility}
            fullTextsVisibilities={fullTextsVisibilities}
            index={2}
          />
          <div className={clsx(S.hiddenText, { [S.hidden]: !fullTextsVisibilities[2] })}>
            <p className={S.text}>
              The CyberKongz community are a key strategic partner for the Metakey— aligned in our goals for a fun,
              accessible and open Metaverse.
            </p>
            <p className={S.text}>
              As Sandbox neighbours, we're working on collaborative experiences to that end. You may spot some VX Kongz
              in the wild sporting a handsome Metakey uniform to celebrate our friendship!
            </p>
          </div>
        </div>
        <div className={S.section5} onClick={reset}>
          <div className={S.bg}>
            <Image src={bg5} width='275' height='308' />
          </div>
          <div className={S.icon}>
            <Image src={icon5} width='114' height='102' />
          </div>
          <h2 className={S.title}>DECENTRALAND METAVERSE FESTIVAL</h2>
          <ReadMoreButton
            changeTextVisibility={changeTextVisibility}
            fullTextsVisibilities={fullTextsVisibilities}
            index={4}
          />
          <div className={clsx(S.hiddenText, { [S.hidden]: !fullTextsVisibilities[4] })}>
            <p className={S.text}>
              The Metakey acted as an exclusive VIP backstage pass for the first Metaverse Festival, including unique
              wearables and meetups with headline artists.
            </p>
          </div>
        </div>
        <div className={S.section6} onClick={reset}>
          <div className={S.bg}>
            <Image src={bg6} width='312' height='185' />
          </div>
          <div className={S.icon}>
            <Image src={icon6} width='114' height='114' />
          </div>
          <h2 className={clsx(S.title, S.limitWidth)}>
            SIR JACKIE STEWART <span className={S.regularCase}>(1969 Formula 1 Driver)</span>
          </h2>
          <ReadMoreButton
            changeTextVisibility={changeTextVisibility}
            fullTextsVisibilities={fullTextsVisibilities}
            index={5}
          />
          <div className={clsx(S.hiddenText, { [S.hidden]: !fullTextsVisibilities[5] })}>
            <p className={S.text}>
              Sir Jackie Stewart is a legend of Formula One racing, with multiple Grand Prix and World Championship
              victories throughout his 1965-1973 career. His officially licensed NFT helmet (designed by Automobilist)
              dropped exclusively to Metakey holders as a Decentraland wearable and one of the first official Formula
              One driver NFTs, in June 2021.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandCases
