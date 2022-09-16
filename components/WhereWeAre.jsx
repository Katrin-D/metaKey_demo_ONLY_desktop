import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { EffectFade, Pagination, Autoplay } from 'swiper'

import S from '../styles/WhereWeAre.module.scss'
import animation from '../public/assets/WhereWeAre/image 35.png'
import logo1 from '../public/assets/WhereWeAre/Asset 4 2.svg'
import logo2 from '../public/assets/WhereWeAre/Asset 21 1.svg'
import logo3 from '../public/assets/WhereWeAre/Asset 5 9.svg'
import logo4 from '../public/assets/WhereWeAre/Asset 20 1.svg'
import logo5 from '../public/assets/WhereWeAre/Asset 19 1.svg'
import logo6 from '../public/assets/WhereWeAre/Asset 17 1.svg'
import logo7 from '../public/assets/WhereWeAre/Asset 18 1.svg'

export const arr = [
  {
    logo: logo1,
    width: 177,
    height: 30,
    text: 'Decentraland is the premiere Ethereum-powered virtual world; developed and owned by its users, who can create, experience and monetize content and applications. This world is home to the Metakey Shark Tank, our content-laden flagship (soon to land) and HQ, and a plethora of events and experiences to which the Metakey has and will continue to grant exclusive VIP access.',
  },
  {
    logo: logo2,
    width: 137,
    height: 35,
    text: 'Twitch hosts many of our regular community events and partnership activations— catch them live to interact with the team and keep ahead of the curve!',
  },
  {
    logo: logo3,
    width: 146,
    height: 44,
    text: 'Twitch hosts many of our regular community events and partnership activations— catch them live to interact with the team and keep ahead of the curve!',
  },
  {
    logo: logo4,
    width: 164,
    height: 31,
    text: 'Twitter is where we leak alpha, concept art, WIP development shots and all the latest Metakey news every day.',
  },
  {
    logo: logo5,
    width: 163,
    height: 31,
    text: 'The Metakey Discord is the beating heart of our community. Here we provide Holder-exclusive expert insights on all significant NFT projects, hold constant giveaways, run our DAO votes and facilitate feedback and discussion.',
  },
  {
    logo: logo6,
    width: 144,
    height: 31,
    text:
      'YouTube is home to the Captain`s Log— our regular divulgence of all internal development in and around Metakey HQ.\n' +
      '\n' +
      'We also regularly edit and post Shark Tank sessions; AMA`s; interviews with artists and partners; and gameplay from the most promising NFT-integrated Metaverse spaces.',
  },
  {
    logo: logo7,
    width: 185,
    height: 28,
    text: 'Medium is where we log and examine all of our processes— development, artwork, integrations— as well as extensive breakdowns of Metakey news and FAQs.',
  },
]

function WhereWeAre() {
  return (
    <div className={S.main}>
      <div className={S.container}>
        <h2 className={S.title}>WHERE WE HANG OUT</h2>
        <div className={S.slider}>
          <div className={S.frame1} />
          <div className={S.frame2} />
          <div className={S.animation}>
            <Image src={animation} width='688' height='373' />
          </div>
          <Swiper
            pagination={{
              el: '.pagination_circle2',
              type: 'bullets',
              bulletClass: 'pagination_bullet',
              bulletActiveClass: 'pagination_bullet_active',
            }}
            effect={'fade'}
            fadeEffect={{ crossFade: true }}
            modules={[Pagination, Autoplay, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className={S.swiper}
          >
            {arr.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={S.logo}>
                  <Image src={item.logo} width={item.width} height={item.height} />
                </div>
                <p className={S.text}>{item.text}</p>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='pagination_circle2' />
        </div>
      </div>
    </div>
  )
}

export default WhereWeAre
