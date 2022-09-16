import PropTypes from 'prop-types'
import React, { Children, cloneElement, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import VisitButton from './VisitButton'
import S from '../styles/WhatCanIDO.module.scss'
import icon1 from '../public/assets/WhatCanIDO/Asset 1 13.png'
import icon2 from '../public/assets/WhatCanIDO/Asset 2 4.png'
import icon3 from '../public/assets/WhatCanIDO/Asset 3 8.png'
import icon4 from '../public/assets/WhatCanIDO/Asset 4 3.png'
import icon5 from '../public/assets/WhatCanIDO/Asset 5 10.png'
import icon6 from '../public/assets/WhatCanIDO/Asset 6 3.png'
import icon7 from '../public/assets/WhatCanIDO/Asset 7 3.png'
import icon8 from '../public/assets/WhatCanIDO/Asset 8 3.png'
import icon9 from '../public/assets/WhatCanIDO/Asset 11 3.png'
import icon10 from '../public/assets/WhatCanIDO/Asset 10 3.png'
import icon11 from '../public/assets/WhatCanIDO/Asset 9 3.png'
import image1 from '../public/assets/WhatCanIDO/festivals image 1.png'
import image2 from '../public/assets/WhatCanIDO/metakademy 1.jpg'
import image3 from '../public/assets/WhatCanIDO/wearables 1.png'
import image4 from '../public/assets/WhatCanIDO/Untitled-5 1.png'
import image5 from '../public/assets/WhatCanIDO/unnamed 1.jpg'
import image6 from '../public/assets/WhatCanIDO/shark tank 1.png'
import image7 from '../public/assets/WhatCanIDO/competitions 1.png'
import image8 from '../public/assets/WhatCanIDO/Screen Shot 2022-02-07 at 10.20 1.jpg'
import image9 from '../public/assets/WhatCanIDO/NFT_BUZZ_2_55 1.jpg'
import image10 from '../public/assets/WhatCanIDO/discount1.png'
import image11 from '../public/assets/WhatCanIDO/Screen Shot 2022-01-10 at 2.01 1.png'
import { useScroll } from './providers/ScrollProvider'

const {
  lineBlock,
  lineBlock1,
  lineBlock2,
  lineBlock3,
  lineBlock4,
  lineBlock5,
  lineBlock6,
  lineBlock7,
  lineBlock8,
  lineBlock9,
  lineBlock10,
  lineBlock11,
  line,
  line1,
  line2,
  line3,
  line4,
  line5,
} = S

const Polyline = ({ children, className, top, animationRange }) => {
  const [k, setK] = useState(0)
  const linesRef = useRef(children.map(() => null))
  const [min, max] = animationRange
  const animationLength = max - min

  useEffect(() => {
    const relativeProgress = Math.min(Math.max(top - min, 0), animationLength) / k

    linesRef.current.reduce((lineOffset, currentLine) => {
      const lineRotation = currentLine.dataset.rotation || 0
      const lineLength = currentLine.offsetWidth
      currentLine.style.transform =
        `rotate(${lineRotation}deg)` +
        `scaleX(${Math.min(Math.max((relativeProgress - lineOffset) / lineLength, 0), 1)})`
      return lineOffset + lineLength
    }, 0)
  }, [top, k])

  return (
    <div className={className}>
      {Children.map(children, (child, index) => {
        return cloneElement(child, {
          ref: (element) => {
            linesRef.current[index] = element
            if (k === 0 && index === children.length - 1 && element) {
              let totalLength = linesRef.current.reduce((accumulator, current) => accumulator + current.offsetWidth, 0)
              setK(animationLength / totalLength)
            }
          },
        })
      })}
    </div>
  )
}

Polyline.propTypes = {
  top: PropTypes.number.isRequired,
  animationRange: PropTypes.arrayOf(PropTypes.number).isRequired,
}

function WhatCanIDO() {
  const { top } = useScroll()

  const halfHeight = typeof window !== 'undefined' ? window.innerHeight / 3 : 1

  return (
    <div className={S.main}>
      <div className={S.container}>
        <h2>WHAT CAN I DO WITH A METAKEY?</h2>
        <Polyline className={clsx(lineBlock, lineBlock1)} top={top} animationRange={[4100, 4100 + halfHeight]}>
          <div id='Line1' className={clsx(line, line1)} />
          <div id='Line2' className={clsx(line, line2)} data-rotation={21} />
          <div id='Line3' className={clsx(line, line3)} />
        </Polyline>
        <Polyline className={clsx(lineBlock, lineBlock2)} top={top} animationRange={[4220, 4220 + halfHeight]}>
          <div id='Line4' className={clsx(line, line1)} data-rotation={90} />
          <div id='Line5' className={clsx(line, line2)} />
          <div id='Line6' className={clsx(line, line3)} />
        </Polyline>
        <Polyline className={clsx(lineBlock, lineBlock3)} top={top} animationRange={[4530, 4530 + halfHeight]}>
          <div id='Line7' className={clsx(line, line1)} data-rotation={90} />
          <div id='Line8' className={clsx(line, line2)} data-rotation={150} />
          <div id='Line9' className={clsx(line, line3)} data-rotation={90} />
        </Polyline>
        <Polyline className={clsx(lineBlock, lineBlock4)} top={top} animationRange={[4920, 4920 + halfHeight]}>
          <div id='Line10' className={clsx(line, line1)} data-rotation={90} />
          <div id='Line11' className={clsx(line, line2)} />
          <div id='Line12' className={clsx(line, line3)} />
          <div id='Line13' className={clsx(line, line4)} data-rotation={16} />
          <div id='Line14' className={clsx(line, line5)} />
        </Polyline>
        <Polyline className={clsx(lineBlock, lineBlock5)} top={top} animationRange={[5220, 5220 + halfHeight]}>
          <div id='Line15' className={clsx(line, line1)} data-rotation={90} />
          <div id='Line16' className={clsx(line, line2)} />
          <div id='Line17' className={clsx(line, line3)} />
        </Polyline>
        <Polyline className={clsx(lineBlock, lineBlock6)} top={top} animationRange={[5555, 5555 + halfHeight]}>
          <div id='Line18' className={clsx(line, line1)} />
          <div id='Line19' className={clsx(line, line2)} data-rotation={27} />
          <div id='Line20' className={clsx(line, line3)} />
          <div id='Line21' className={clsx(line, line4)} data-rotation={90} />
        </Polyline>
        <Polyline className={clsx(lineBlock, lineBlock7)} top={top} animationRange={[5766, 5766 + halfHeight]}>
          <div id='Line22' className={clsx(line, line1)} />
          <div id='Line23' className={clsx(line, line2)} data-rotation={-32.8} />
          <div id='Line24' className={clsx(line, line3)} />
          <div id='Line25' className={clsx(line, line4)} data-rotation={90} />
        </Polyline>
        <Polyline className={clsx(lineBlock, lineBlock8)} top={top} animationRange={[6026, 6026 + halfHeight]}>
          <div id='Line22' className={clsx(line, line1)} />
          <div id='Line23' className={clsx(line, line2)} />
          <div id='Line24' className={clsx(line, line3)} data-rotation={90} />
          <div id='Line25' className={clsx(line, line4)} data-rotation={66} />
          <div id='Line26' className={clsx(line, line5)} data-rotation={90} />
        </Polyline>
        <Polyline className={clsx(lineBlock, lineBlock9)} top={top} animationRange={[6326, 6326 + halfHeight]}>
          <div id='Line27' className={clsx(line, line1)} />
          <div id='Line28' className={clsx(line, line2)} />
        </Polyline>
        <Polyline className={clsx(lineBlock, lineBlock10)} top={top} animationRange={[6586, 6586 + halfHeight]}>
          <div id='Line29' className={clsx(line, line1)} data-rotation={90} />
          <div id='Line30' className={clsx(line, line2)} data-rotation={124} />
          <div id='Line31' className={clsx(line, line3)} data-rotation={90} />
          <div id='Line32' className={clsx(line, line4)} />
          <div id='Line33' className={clsx(line, line5)} />
        </Polyline>
        <Polyline className={clsx(lineBlock, lineBlock11)} top={top} animationRange={[6906, 6906 + halfHeight / 3]}>
          <div id='Line34' className={clsx(line, line1)} data-rotation={90} />
          <div />
        </Polyline>
        <div className={S.sections}>
          <div className={S.section1}>
            <div className={S.content}>
              <div className={S.icon}>
                <Image src={icon1} width='58' height='56' />
              </div>
              <h3 className={S.section_title}>1. VIRTUAL EVENTS</h3>
              <div className={S.section_text}>
                <p>
                  Metakey runs virtual events across our hundreds of lands across Decentraland, Sandbox, Somnium Space,
                  etc with officially licensed partners such as Australian Open!
                </p>
              </div>
            </div>
            <div className={S.image}>
              <Image src={image1} width='414' height='189' />
            </div>
          </div>
          <div className={S.section2}>
            <div className={S.image}>
              <Image src={image2} width='388' height='191' />
            </div>
            <div className={S.content}>
              <div className={S.icon}>
                <Image src={icon2} width='69' height='51' />
              </div>
              <h3 className={S.section_title}>2. METAKADEMY</h3>
              <div className={S.section_text}>
                <p>The Metakademy is a Metakey-holder exclusive course database for NFT enthusiasts</p>
                <p>
                  We curate the best short-course content from experts in the field,
                  <span className={S.small_text}>(Minting NFTs, Land Trading, Creating Art, etc!)</span>
                </p>
              </div>
              <VisitButton />
            </div>
          </div>
          <div className={S.section3}>
            <div className={S.content}>
              <div className={S.icon}>
                <Image src={icon3} width='66' height='72' />
              </div>
              <h3 className={S.section_title}>3. WEARABLE AIRDROPS</h3>
              <div className={S.section_text}>
                <p>
                  The Metaverse will be VAST and wearables or any other digital goods will all be collectible. We
                  partner with licensed brands to airdrop these to Metakey Owners.
                </p>
              </div>
            </div>
          </div>
          <div className={S.section4}>
            <div className={S.image}>
              <Image src={image3} width='448' height='193' />
            </div>
            <div className={S.content}>
              <div className={S.icon}>
                <Image src={icon4} width='74' height='63' />
              </div>
              <h3 className={S.section_title}>4. GAME INTEGRATIONS</h3>
              <div className={S.section_text}>
                <p>
                  We're working with Web3 games to integrate the Metakey! You'll be able to use it to access private
                  spaces or use different skins within partnered games.
                </p>
              </div>
            </div>
            <div className={S.image}>
              <Image src={image4} width='224' height='224' />
            </div>
          </div>
          <div className={S.section5_6}>
            <div className={S.content}>
              <div className={S.content6}>
                <div className={S.icon}>
                  <Image src={icon6} width='65' height='69' />
                </div>
                <h3 className={S.section_title}>6. ADVERTISING</h3>
                <div className={S.section_text}>
                  <p>
                    Our websites such as Cryptoartpulse have banner ad slots that you use for free if you have a
                    Metakey! We also hold events such as our ‘Shark Tank’ which allow start ups to pitch their ideas to
                    our team for the chance to win a cash prize! (We'll keep building/finding new spaces)
                  </p>
                </div>
              </div>
            </div>
            <div className={S.image}>
              <Image src={image5} width='234' height='244' />
            </div>
            <div className={S.content}>
              <div className={S.content5}>
                <div className={S.icon}>
                  <Image src={icon5} width='67' height='67' />
                </div>
                <h3 className={S.section_title}>5. METAKREW</h3>
                <div className={S.section_text}>
                  <p>
                    The Metakrew is our Avatar project. They offer a dynamic and community-focused virtual identity in
                    social spaces like Decentraland.
                  </p>
                </div>
                <VisitButton />
              </div>
            </div>
          </div>
          <div className={S.section7}>
            <div className={S.image}>
              <Image src={image6} width='405' height='248' />
            </div>
            <div className={S.content}>
              <div className={S.icon}>
                <Image src={icon7} width='69' height='73' />
              </div>
              <h3 className={S.section_title}>7. COMPETITIONS</h3>
              <div className={S.section_text}>
                <p>We get PLENTY of competitions and airdrop opportunities for the Metakey community.</p>
              </div>
            </div>
          </div>
          <div className={S.section8}>
            <div className={S.content}>
              <div className={S.icon}>
                <Image src={icon8} width='47' height='63' />
              </div>
              <h3 className={S.section_title}>8. WHITELISTING</h3>
              <div className={S.section_text}>
                <p>
                  Having a strong community, we get access to some of the best NFT whitelists possible.
                  <br />
                  <span className={S.small_text}>(Such as RTFKT - Clone X, and the Australian Open - Art Ball)</span>
                </p>
              </div>
            </div>
            <div className={S.image}>
              <Image src={image7} width='407' height='206' />
            </div>
          </div>
          <div className={S.section9}>
            <div className={S.image}>
              <Image src={image8} width='232' height='232' />
            </div>
            <div className={S.content}>
              <div className={S.icon}>
                <Image src={icon9} width='62' height='45' />
              </div>
              <h3 className={S.section_title}>9. CURATED NFT ALPHA</h3>
              <div className={S.section_text}>
                <p>
                  Can't keep up with NFT drops? We have a full-time analyst and a buzzing NFT community that share tips!
                </p>
              </div>
              <VisitButton />
            </div>
            <div className={`${S.image} ${S.image9}`}>
              <Image src={image9} width='249' height='233' />
            </div>
          </div>
          <div className={S.section10}>
            <div className={S.image}>
              <Image src={image10} width='404' height='204' />
            </div>
            <div className={S.content}>
              <div className={S.icon}>
                <Image src={icon10} width='69' height='58' />
              </div>
              <h3 className={S.section_title}>10. DISCOUNTS</h3>
              <div className={S.section_text}>
                <p>
                  Metakey are working on digital and real world discounts to shops and subscriptions for Metakey owners.
                </p>
              </div>
            </div>
          </div>
          <div className={S.section11}>
            <div className={S.content}>
              <div className={S.icon}>
                <Image src={icon11} width='62' height='46' />
              </div>
              <h3 className={S.section_title}>11. BRAND ACTIVATION</h3>
              <div className={S.section_text}>
                <p>
                  There are MANY brands coming to the NFT space. Metakey are working on as many as possible to do
                  airdrops, whitelists, video streams, meetups and more!
                </p>
              </div>
            </div>
            <div className={S.image}>
              <Image src={image11} width='501' height='203' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatCanIDO
