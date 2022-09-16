import React from 'react'
import Image from 'next/image'
import S from '../../styles/mobile/EditionsSupplyMobile.module.scss'
import frame from '../../public/assets/EditionsSupply/mobile/Group 66.svg'
import edition1 from '../../public/assets/EditionsSupply/edition 1 1.jpg'
import edition2_1 from '../../public/assets/EditionsSupply/eidtion 2 small 1.jpg'
import edition2_2 from '../../public/assets/EditionsSupply/mobile/edition 2 1.jpg'
import edition3 from '../../public/assets/EditionsSupply/edition 3 1.jpg'
import edition4 from '../../public/assets/EditionsSupply/mobile/edition 4 1.jpg'
import edition5 from '../../public/assets/EditionsSupply/edition 5 1.jpg'
import anim1 from '../../public/assets/EditionsSupply/mattyfinal 20102.png'
import anim2 from '../../public/assets/EditionsSupply/metakey_loop_black_alpha000.png'
import anim3 from '../../public/assets/EditionsSupply/METAKEY-marc0matic-002 1.png'
import anim4 from '../../public/assets/EditionsSupply/Metakeystills0186 1.png'
import anim5 from '../../public/assets/EditionsSupply/tba key 1.png'

function EditionsSupply() {
  return (
    <div className={S.main}>
      <div className={S.container}>
        <div className={S.intro}>
          <h2>WHICH KEY SHOULD I GET?</h2>
          <div className={S.first_text}>
            <p>Metakey will continue releasing Keys BUT there are categories.</p>
            <p>
              The first 3 are our "Collectors' Series". If you own all 3, you will be eligible to claim every future Key
              Edition for free. They also have very low supply.
            </p>
            <p>All other editions have a much larger supply and will be themed with differently styled integrations.</p>
            <p>
              ALL Keys will give you access to everything we do, however we often have extra special perks for earlier
              edition holders.
            </p>
          </div>
        </div>
        <div className={S.content}>
          <div className={S.frame}>
            <Image src={frame} width='359' height='968' />
            <h3>COLLECTORS SERIES</h3>
          </div>
          <div className={S.edition1}>
            <div className={S.bg}>
              <Image src={edition1} width='130' height='106' />
              <h4 className={S.bg_text}>Edition 1</h4>
            </div>
            <div className={S.animation}>
              <Image src={anim1} width='182' height='182' />
            </div>
            <div className={S.textarea}>
              <h5 className={S.title}>THE GENESIS</h5>
              <p className={S.text}>
                Edition 1 was released May 5th 2021 designed by renowned crypto artist Alan Bolton. It will forever
                stand as The Genesis of the Metakey.
              </p>
              <p className={`${S.supply} ${S.supply_bottom}`}>
                SUPPLY&nbsp;&nbsp;|&nbsp;&nbsp;<span>500</span>
              </p>
            </div>
          </div>
          <div className={S.edition2}>
            <div className={S.textarea}>
              <h5 className={S.title}>THE ARTIFACT</h5>
              <p className={S.text}>
                Long before Clonex there was the Metakey Edition 2 — designed by RTFKT Studios. The Artifact has offered
                Holders early access to RTFKT's greatest products.
              </p>
              <p className={`${S.supply} ${S.supply_top}`}>
                SUPPLY&nbsp;&nbsp;|&nbsp;&nbsp;<span>750</span>
              </p>
            </div>
            <div className={S.bg2_2}>
              <Image src={edition2_2} width='115' height='192' />
              <h4 className={S.bg_text}>Edition 2</h4>
            </div>
            <div className={S.bg2_1}>
              <Image src={edition2_1} width='62' height='62' />
            </div>
            <div className={S.animation}>
              <Image src={anim2} width='182' height='182' />
            </div>
          </div>
          <div className={S.edition3}>
            {/*<div className={S.bg_white} />*/}
            <div className={S.bg}>
              <Image src={edition3} width='157' height='134' />
              <h4 className={S.bg_text}>Edition 3</h4>
            </div>
            <div className={S.animation}>
              <Image src={anim3} width='221' height='221' />
            </div>
            <div className={S.textarea}>
              <h5 className={S.title}>THE ULTIMATE</h5>
              <p className={S.text}>
                With the wild imagination of Marc-0-Matic, Edition 3 represents our commitment to the emerging
                Metaverse.
              </p>
              <p className={`${S.supply} ${S.supply_bottom}`}>
                SUPPLY&nbsp;&nbsp;|&nbsp;&nbsp;<span>1000</span>
              </p>
            </div>
          </div>
          <div className={S.edition4}>
            <div className={S.textarea}>
              <h5 className={S.title}>THE CAPTAIN</h5>
              <p className={S.text}>
                With the Captain and the Metakrew's flagship, our sci fi IP takes flight with a greatly expanded
                community in Edition 4, designed by Jair Marino.
              </p>
              <p className={`${S.supply} ${S.supply_top}`}>
                SUPPLY&nbsp;&nbsp;|&nbsp;&nbsp;<span>7500</span>
              </p>
            </div>
            <div className={S.bg}>
              <Image src={edition4} width='200' height='126' />
              <h4 className={S.bg_text}>Edition 4</h4>
            </div>
            <div className={S.animation}>
              <Image src={anim4} width='293' height='165' />
            </div>
          </div>
          <div className={S.edition5}>
            <div className={S.bg}>
              <Image src={edition5} width='83' height='93' />
              <h4 className={S.bg_text}>Edition 5</h4>
            </div>
            <div className={S.animation}>
              <Image src={anim5} width='206' height='166' />
            </div>

            <div className={S.textarea}>
              <h5 className={S.title}>THE ??????</h5>
              <p className={S.text}>
                Our team is committed to developing new Editions and expanding the Metakey community, only when the time
                is right.{' '}
              </p>
              <p className={`${S.supply} ${S.supply_bottom}`}>
                SUPPLY&nbsp;&nbsp;|&nbsp;&nbsp;<span>TBD</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditionsSupply
