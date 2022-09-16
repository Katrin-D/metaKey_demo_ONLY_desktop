import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper'

import S from '../styles/Investors.module.scss'
import frame from '../public/assets/Investors/InvestorsRectangleGap.svg'
import logo1 from '../public/assets/Investors/Asset 1.svg'
import logo2 from '../public/assets/Investors/Asset 2.svg'
import logo3 from '../public/assets/Investors/Asset 3.svg'
import logo4 from '../public/assets/Investors/Asset 4.svg'
import logo5 from '../public/assets/Investors/Asset 5.svg'
import logo6 from '../public/assets/Investors/Asset 6.svg'
import logo7 from '../public/assets/Investors/Asset 7.svg'
import logo8 from '../public/assets/Investors/Asset 8.svg'
import logo9 from '../public/assets/Investors/Asset 9.svg'
import logo10 from '../public/assets/Investors/Asset 10.svg'
import logo11 from '../public/assets/Investors/Asset 11.svg'
import logo12 from '../public/assets/Investors/Asset 12.svg'
import logo13 from '../public/assets/Investors/Asset 13.svg'
import logo14 from '../public/assets/Investors/Asset 14.svg'
import logo15 from '../public/assets/Investors/Asset 15.svg'
import slider_bg from '../public/assets/Investors/Rectangle 12.svg'
import photo1 from '../public/assets/Investors/Screen Shot 2022-02-10 at 12.40 1.jpg'

function Investors() {
  return (
    <div className={S.main}>
      <div className={S.container}>
        <div className={S.frame}>
          <Image src={frame} width='649' height='586' />
        </div>
        <h2 className={S.title}>BACKED BY TOP FIRMS & INDUSTRY LEADERS</h2>
        <div className={S.logos}>
          <div className={S.logo}>
            <a href='' className={S.logo1}>
              <Image src={logo1} width='89' height='50' />
            </a>
          </div>
          <div className={S.logo}>
            <a href='' className={S.logo2}>
              <Image src={logo2} width='66' height='36' />
            </a>
          </div>
          <div className={S.logo}>
            <a href='' className={S.logo3}>
              <Image src={logo3} width='93' height='65' />
            </a>
          </div>
          <div className={S.logo}>
            <a href='' className={S.logo4}>
              <Image src={logo4} width='107' height='11' />
            </a>
          </div>
          <div className={S.logo}>
            <a href='' className={S.logo5}>
              <Image src={logo5} width='93' height='26' />
            </a>
          </div>
          <div className={S.logo}>
            <a href='' className={S.logo6}>
              <Image src={logo6} width='108' height='19' />
            </a>
          </div>
          <div className={S.logo}>
            <a href='' className={S.logo7}>
              <Image src={logo7} width='123' height='27' />
            </a>
          </div>
          <div className={S.logo}>
            <a href='' className={S.logo8}>
              <Image src={logo8} width='93' height='33' />
            </a>
          </div>
          <div className={S.logo}>
            <a href='' className={S.logo9}>
              <Image src={logo9} width='113' height='33' />
            </a>
          </div>
          <div className={S.logo}>
            <a href='' className={S.logo10}>
              <Image src={logo10} width='67' height='54' />
            </a>
          </div>
          <div className={S.logo}>
            <a href='' className={S.logo11}>
              <Image src={logo11} width='138' height='55' />
            </a>
          </div>
          <div className={S.logo}>
            <a href='' className={S.logo12}>
              <Image src={logo12} width='70' height='35' />
            </a>
          </div>
          <div className={S.logo}>
            <a href='' className={S.logo13}>
              <Image src={logo13} width='90' height='30' />
            </a>
          </div>
          <div className={S.logo}>
            <a href='' className={S.logo14}>
              <Image src={logo14} width='152' height='36' />
            </a>
          </div>
          <div className={S.logo}>
            <a href='' className={S.logo15}>
              <Image src={logo15} width='54' height='44' />
            </a>
          </div>
        </div>
        <p className={S.and_more}>AND MANY MORE...</p>
        <div className={S.slider}>
          <div className={S.slider_bg}>
            <Image src={slider_bg} width='391' height='392' />
          </div>
          <Swiper
            pagination={{
              el: '.pagination_circle',
              type: 'bullets',
              bulletClass: 'pagination_bullet',
              bulletActiveClass: 'pagination_bullet_active',
            }}
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className={S.swiper}
          >
            <SwiperSlide>
              <div className={S.photo}>
                <Image src={photo1} width='294' height='119' />
              </div>
              <h3 className={S.article_title}>Metakey Aces at the Australian Open Metaverse</h3>
              <p className={S.article_text}>
                Metakey is collaborating with The Australian Open (AO) — one of the biggest international tennis
                tournaments in the world! The AO wil be the...
              </p>
              <a href='' className={S.read_more}>
                Read More
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <div className={S.photo}>
                <Image src={photo1} width='294' height='119' />
              </div>
              <h3 className={S.article_title}>Metakey Aces 2</h3>
              <p className={S.article_text}>
                Metakey is collaborating with The Australian Open (AO) — one of the biggest international tennis
                tournaments in the world! The AO wil be the...
              </p>
              <a href='' className={S.read_more}>
                Read More
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <div className={S.photo}>
                <Image src={photo1} width='294' height='119' />
              </div>
              <h3 className={S.article_title}>Metakey Aces 3</h3>
              <p className={S.article_text}>
                Metakey is collaborating with The Australian Open (AO) — one of the biggest international tennis
                tournaments in the world! The AO wil be the...
              </p>
              <a href='' className={S.read_more}>
                Read More
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <div className={S.photo}>
                <Image src={photo1} width='294' height='119' />
              </div>
              <h3 className={S.article_title}>Metakey Aces 4</h3>
              <p className={S.article_text}>
                Metakey is collaborating with The Australian Open (AO) — one of the biggest international tennis
                tournaments in the world! The AO wil be the...
              </p>
              <a href='' className={S.read_more}>
                Read More
              </a>
            </SwiperSlide>
          </Swiper>
          <div className='pagination_circle' />
        </div>
      </div>
    </div>
  )
}
export default Investors
