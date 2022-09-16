import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import VisitButton from '../VisitButton'

import icon1 from '../../public/assets/WhatCanIDO/icon1.svg'
import icon2 from '../../public/assets/WhatCanIDO/icon2.svg'
import icon3 from '../../public/assets/WhatCanIDO/icon3.svg'
import icon4 from '../../public/assets/WhatCanIDO/icon4.svg'
import icon5 from '../../public/assets/WhatCanIDO/icon5.svg'
import icon6 from '../../public/assets/WhatCanIDO/icon6.svg'
import icon7 from '../../public/assets/WhatCanIDO/icon7.svg'
import icon8 from '../../public/assets/WhatCanIDO/icon8.svg'
import icon9 from '../../public/assets/WhatCanIDO/icon9.svg'
import icon10 from '../../public/assets/WhatCanIDO/icon10.svg'
import icon11 from '../../public/assets/WhatCanIDO/icon11.svg'

import styles from '../../styles/mobile/WhatCanIDo.module.scss'

export default function WhatCanIDo() {
  return (
    <div className={styles.root}>
      <div className={styles.mainBox}>
        <h3 className={styles.title}>WHAT CAN I DO WITH A METAKEY?</h3>
        <ul className={styles.list}>
          <li className={clsx(styles.listItem, styles.listItem1)}>
            <div>
              <Image src={icon1} width='58' height='56' />
              <div className={clsx(styles.lineBlock, styles.lineBlock1)}>
                <div id='Line1' className={clsx(styles.line, styles.line1)} />
                <div id='Line2' className={clsx(styles.line, styles.line2)} />
                <div id='Line3' className={clsx(styles.line, styles.line3)} />
                <div id='Line4' className={clsx(styles.line, styles.line4)} />
              </div>
            </div>
            <div>
              <h4>1. VIRTUAL EVENTS</h4>
              <p>
                Metakey runs virtual events across our hundreds of lands across Decentraland, Sandbox, Somnium Space,
                etc with officially licensed partners such as Australian Open!
              </p>
            </div>
          </li>
          <li className={clsx(styles.listItem, styles.listItem2)}>
            <div>
              <Image src={icon2} width='69' height='51' />
              <div className={clsx(styles.lineBlock, styles.lineBlock2)}>
                <div id='Line5' className={clsx(styles.line, styles.line1)} />
                <div id='Line6' className={clsx(styles.line, styles.line2)} />
                <div id='Line7' className={clsx(styles.line, styles.line3)} />
                <div id='Line8' className={clsx(styles.line, styles.line4)} />
                <div id='Line9' className={clsx(styles.line, styles.line5)} />
              </div>
            </div>
            <div>
              <div>
                <h4>2. METAKADEMY</h4>
                <p>
                  <span>The Metakademy is a Metakey-holder exclusive course database for NFT enthusiasts</span>
                  <br />
                  <br />
                  We curate the best short-course content from experts in the field,
                  <span className={styles.text}>(Minting NFTs, Land Trading, Creating Art, etc!)</span>
                </p>
                <div className={styles.visitButton}>
                  <VisitButton />
                </div>
              </div>
            </div>
          </li>
          <li className={clsx(styles.listItem, styles.listItem3)}>
            <div>
              <Image src={icon3} width='66' height='72' />
              <div className={clsx(styles.lineBlock, styles.lineBlock3)}>
                <div id='Line10' className={clsx(styles.line, styles.line1)} />
              </div>
            </div>
            <div>
              <div>
                <h4>3. WEARABLE AIRDROPS</h4>
                <p>
                  The Metaverse will be VAST and wearables or any other digital goods will all be collectible. We
                  partner with licensed brands to airdrop these to Metakey Owners.
                </p>
              </div>
            </div>
          </li>
          <li className={clsx(styles.listItem, styles.listItem4)}>
            <div className={styles.itemLine4}>
              <Image src={icon4} width='74' height='63' />
              <div className={clsx(styles.lineBlock, styles.lineBlock4)}>
                <div id='Line11' className={clsx(styles.line, styles.line1)} />
                <div id='Line12' className={clsx(styles.line, styles.line2)} />
                <div id='Line13' className={clsx(styles.line, styles.line3)} />
                <div id='Line14' className={clsx(styles.line, styles.line4)} />
                <div id='Line15' className={clsx(styles.line, styles.line5)} />
              </div>
            </div>
            <div>
              <h4>4. GAME INTEGRATIONS</h4>
              <p>
                We're working with Web3 games to integrate the Metakey! You'll be able to use it to access private
                spaces or use different skins within partnered games.
              </p>
            </div>
          </li>
          <li className={clsx(styles.listItem, styles.listItem5)}>
            <div className={styles.itemLine5}>
              <Image src={icon5} width='67' height='67' />
              <div className={clsx(styles.lineBlock, styles.lineBlock5)}>
                <div id='Line15' className={clsx(styles.line, styles.line1)} />
                <div id='Line17' className={clsx(styles.line, styles.line2)} />
                <div id='Line18' className={clsx(styles.line, styles.line3)} />
                <div id='Line19' className={clsx(styles.line, styles.line4)} />
              </div>
            </div>
            <div>
              <div>
                <h4>5. METAKREW</h4>
                <p>
                  The Metakrew is our Avatar project. They offer a dynamic and community-focused virtual identity in
                  social spaces like Decentraland.
                </p>
                <div className={styles.visitButton}>
                  <VisitButton />
                </div>
              </div>
            </div>
          </li>
          <li className={clsx(styles.listItem, styles.listItem6)}>
            <div className={styles.itemLine6}>
              <Image src={icon6} width='65' height='69' />
              <div className={clsx(styles.lineBlock, styles.lineBlock6)}>
                <div id='Line20' className={clsx(styles.line, styles.line1)} />
                <div id='Line21' className={clsx(styles.line, styles.line2)} />
                <div id='Line22' className={clsx(styles.line, styles.line3)} />
                <div id='Line23' className={clsx(styles.line, styles.line4)} />
                <div id='Line24' className={clsx(styles.line, styles.line5)} />
                <div id='Line25' className={clsx(styles.line, styles.line6)} />
              </div>
            </div>
            <div>
              <h4>6. ADVERTISING</h4>
              <p>
                Our websites such as Cryptoartpulse have banner ad slots that you use for free if you have a Metakey! We
                also hold events such as our ‘Shark Tank’ which allow start ups to pitch their ideas to our team for the
                chance to win a cash prize!
                <br />
                <span className={styles.text}>(We'll keep building/finding new spaces)</span>
              </p>
            </div>
          </li>
          <li className={clsx(styles.listItem, styles.listItem7)}>
            <div className={styles.itemLine7}>
              <Image src={icon7} width='69' height='73' />
              <div className={clsx(styles.lineBlock, styles.lineBlock7)}>
                <div id='Line26' className={clsx(styles.line, styles.line1)} />
              </div>
            </div>
            <div>
              <h4>7. COMPETITIONS</h4>
              <p>We get PLENTY of competitions and airdrop opportunities for the Metakey community.</p>
            </div>
          </li>
          <li className={clsx(styles.listItem, styles.listItem8)}>
            <div className={styles.itemLine8}>
              <Image src={icon8} width='47' height='63' />
              <div className={clsx(styles.lineBlock, styles.lineBlock8)}>
                <div id='Line27' className={clsx(styles.line, styles.line1)} />
                <div id='Line28' className={clsx(styles.line, styles.line2)} />
                <div id='Line29' className={clsx(styles.line, styles.line3)} />
                <div id='Line30' className={clsx(styles.line, styles.line4)} />
                <div id='Line31' className={clsx(styles.line, styles.line5)} />
              </div>
            </div>
            <div>
              <h4>8. WHITELISTING</h4>
              <p>
                Having a strong community, we get access to some of the best NFT whitelists possible.
                <br />
                <span className={styles.text}>(Such as RTFKT - Clone X, and the Australian Open - Art Ball)</span>
              </p>
            </div>
          </li>
          <li className={clsx(styles.listItem, styles.listItem9)}>
            <div className={styles.itemLine9}>
              <Image src={icon9} width='62' height='45' />
              <div className={clsx(styles.lineBlock, styles.lineBlock9)}>
                <div id='Line32' className={clsx(styles.line, styles.line1)} />
              </div>
            </div>
            <div>
              <h4>9. CURATED NFT ALPHA</h4>
              <p>
                Can't keep up with NFT drops? We have a full-time analyst and a buzzing NFT community that share tips!
              </p>
              <div className={styles.visitButton}>
                <VisitButton />
              </div>
            </div>
          </li>
          <li className={clsx(styles.listItem, styles.listItem10)}>
            <div className={styles.itemLine10}>
              <Image src={icon10} width='69' height='58' />
              <div className={clsx(styles.lineBlock, styles.lineBlock10)}>
                <div id='Line33' className={clsx(styles.line, styles.line1)} />
                <div id='Line34' className={clsx(styles.line, styles.line2)} />
                <div id='Line35' className={clsx(styles.line, styles.line3)} />
                <div id='Line36' className={clsx(styles.line, styles.line4)} />
                <div id='Line37' className={clsx(styles.line, styles.line5)} />
                <div id='Line38' className={clsx(styles.line, styles.line6)} />
                <div id='Line39' className={clsx(styles.line, styles.line7)} />
              </div>
            </div>
            <div>
              <h4>10. DISCOUNTS</h4>
              <p>
                Metakey are working on digital and real world discounts to shops and subscriptions for Metakey owners.
              </p>
            </div>
          </li>
          <li className={clsx(styles.listItem, styles.listItem11)}>
            <div className={styles.itemLine11}>
              <Image src={icon11} width='62' height='46' />
            </div>
            <div>
              <h4>11. BRAND ACTIVATION</h4>
              <p>
                There are MANY brands coming to the NFT space. Metakey are working on as many as possible to do
                airdrops, whitelists, video streams, meetups and more!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
