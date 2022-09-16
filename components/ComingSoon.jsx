import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { EffectFade, Pagination } from 'swiper'

import S from '../styles/ComingSoon.module.scss'
import slider_bg from '../public/assets/ComingSoon/Rectangle 78.svg'
import animation1 from '../public/assets/ComingSoon/Component 1.png'

function ComingSoon() {
  const nav = ['GAMES', '3D AVATARS', 'LARGE SCALE FESTIVALS', 'IRL MEETUPSS', 'MUCH MORE']

  return (
    <div className={S.main}>
      <div className={S.container}>
        <h2 className={S.title}>COMING SOON</h2>
        <div className={S.slider}>
          <div>
            <Image src={slider_bg} width='1171' height='483' />
          </div>
          <div className={S.animation}>
            <Image src={animation1} width='816' height='666' />
          </div>
          <Swiper
            pagination={{
              el: '.pagination_line',
              type: 'bullets',
              bulletClass: 'pagination_line_bullet',
              bulletActiveClass: 'pagination_line_bullet_active',
              clickableClass: 'pagination_line_clickable',
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '<h3>' + nav[index] + '</h3>' + '</span>'
              },
            }}
            effect={'fade'}
            fadeEffect={{ crossFade: true }}
            modules={[Pagination, EffectFade]}
            spaceBetween={150}
            slidesPerView={1}
            className={S.swiper}
          >
            <SwiperSlide>
              <p className={S.text}>
                The Metakey is currently developing a Metaverse gaming/social hub — the immersive world of New Ganymede.
                <br />
                <br />
                Here, Key and Krew-holders will be able to earn seasonal rewards that will be interoperable throughout
                the Metaverse.
                <br />
                <br />
                It will also enable direct travel into the worlds of partnered games, as well as our own.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className={S.text}>
                The Metakey is currently developing a Metaverse gaming/social hub— the immersive world of New Ganymede.
                Here, Key and Krew-holders will be able to earn seasonal rewards that will be interoperable throughout
                the Metaverse. It will also enable direct travel into the worlds of partnered games, as well as our own.
                The Metakey also holds significant land parcels in Decentraland, The Sandbox and Somnium Space in which
                we are actively building games and gamified experiences with interoperable rewards!
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className={S.text}>
                The Entire Metakrew collection assets are being modelled in 3D at a fidelity consistent with and
                import-ready for AAA games built on Unreal and Unity engines. They are also being converted into a
                number of distinct styles including voxelated iterations specifically for The Sandbox. Metakrew-holders
                will have their avatars automatically generated and playable in New Ganymede, The Sandbox, Decentraland
                and many more games!
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className={S.text}>
                Metakey will organize some of the LARGEST and most compelling social festivals and events known to the
                Web3 space. Our artists and developers bring an unrivalled build quality for events design, our
                community team delivers the execution, and our Holders are always rewarded for attendance and
                engagement.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className={S.text}>
                Following the Metakey’s contribution to NFT Melbourne 2022, we are preparing for a future of regular IRL
                social, networking and educational opportunities— in Australia and possibly abroad— as soon as
                conditions are safe and accessible to facilitate them.
              </p>
            </SwiperSlide>
          </Swiper>
          <div className='pagination_line' />
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
