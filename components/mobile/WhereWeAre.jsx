import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { EffectFade, Pagination, Autoplay } from 'swiper'
import clsx from 'clsx'
import S from '../../styles/mobile/WhereWeAreMobile.module.scss'
import { arr } from '../WhereWeAre'

function WhereWeAre() {
  return (
    <div className={S.main}>
      <div className={S.container}>
        <h2 className={S.title}>WHERE WE HANG OUT</h2>
        <div className={S.slider}>
          <div className={S.frame1} />
          <div className={S.frame2} />
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
          <div className={clsx('pagination_circle2', S.paginator)} />
        </div>
      </div>
    </div>
  )
}

export default WhereWeAre
