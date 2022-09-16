import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper'

import styles from '../../styles/mobile/Investors.module.scss'
import frame from '../../public/svgs/mobile/frameInvestors.svg'
import logo1 from '../../public/assets/Investors/Asset 1.svg'
import logo2 from '../../public/assets/Investors/Asset 2.svg'
import logo3 from '../../public/assets/Investors/Asset 3.svg'
import logo4 from '../../public/assets/Investors/Asset 4.svg'
import logo5 from '../../public/assets/Investors/Asset 5.svg'
import logo6 from '../../public/assets/Investors/Asset 6.svg'
import logo7 from '../../public/assets/Investors/Asset 7.svg'
import logo8 from '../../public/assets/Investors/Asset 8.svg'
import logo9 from '../../public/assets/Investors/Asset 9.svg'
import logo10 from '../../public/assets/Investors/Asset 10.svg'
import logo11 from '../../public/assets/Investors/Asset 11.svg'
import logo12 from '../../public/assets/Investors/Asset 12.svg'
import logo13 from '../../public/assets/Investors/Asset 13.svg'
import logo14 from '../../public/assets/Investors/Asset 14.svg'
import logo15 from '../../public/assets/Investors/Asset 15.svg'
import photo1 from '../../public/assets/Investors/Screen Shot 2022-02-10 at 12.40 1.jpg'

export default function Investors() {
  return (
    <div className={styles.mainBox}>
      <div className={styles.container}>
        <div className={styles.frame}>
          <Image src={frame} width='303' height='269' />
        </div>
        <h2 className={styles.title}>BACKED BY TOP FIRMS & INDUSTRY LEADERS</h2>
        <div className={styles.logos}>
          <div className={styles.logo}>
            <a href='' className={styles.logo1}>
              <Image src={logo1} width='48' height='27' />
            </a>
          </div>
          <div className={styles.logo}>
            <a href='' className={styles.logo2}>
              <Image src={logo2} width='36' height='19' />
            </a>
          </div>
          <div className={styles.logo}>
            <a href='' className={styles.logo3}>
              <Image src={logo3} width='50' height='35' />
            </a>
          </div>
          <div className={styles.logo}>
            <a href='' className={styles.logo4}>
              <Image src={logo4} width='58' height='6' />
            </a>
          </div>
          <div className={styles.logo}>
            <a href='' className={styles.logo5}>
              <Image src={logo5} width='50' height='18' />
            </a>
          </div>
          <div className={styles.logo}>
            <a href='' className={styles.logo6}>
              <Image src={logo6} width='58' height='10' />
            </a>
          </div>
          <div className={styles.logo}>
            <a href='' className={styles.logo7}>
              <Image src={logo7} width='66' height='15' />
            </a>
          </div>
          <div className={styles.logo}>
            <a href='' className={styles.logo8}>
              <Image src={logo8} width='50' height='18' />
            </a>
          </div>
          <div className={styles.logo}>
            <a href='' className={styles.logo9}>
              <Image src={logo9} width='61' height='18' />
            </a>
          </div>
          <div className={styles.logo}>
            <a href='' className={styles.logo10}>
              <Image src={logo10} width='36' height='29' />
            </a>
          </div>
          <div className={styles.logo}>
            <a href='' className={styles.logo11}>
              <Image src={logo11} width='75' height='30' />
            </a>
          </div>
          <div className={styles.logo}>
            <a href='' className={styles.logo12}>
              <Image src={logo12} width='38' height='19' />
            </a>
          </div>
          <div className={styles.logo}>
            <a href='' className={styles.logo13}>
              <Image src={logo13} width='49' height='16' />
            </a>
          </div>
          <div className={styles.logo}>
            <a href='' className={styles.logo14}>
              <Image src={logo14} width='82' height='19' />
            </a>
          </div>
          <div className={styles.logo}>
            <a href='' className={styles.logo15}>
              <Image src={logo15} width='29' height='24' />
            </a>
          </div>
        </div>
        <p className={styles.and_more}>AND MANY MORE...</p>
        <div className={styles.slider}>
          <div className={styles.slider_bg} />
          <Swiper
            pagination={{
              el: '.pagination_circle_mob',
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
            className={styles.swiper}
          >
            <SwiperSlide>
              <div className={styles.photo}>
                <Image src={photo1} width='180' height='73' />
              </div>
              <h3 className={styles.article_title}>Metakey Aces at the Australian Open Metaverse</h3>
              <p className={styles.article_text}>
                Metakey is collaborating with The Australian Open (AO) — one of the biggest international tennis tournaments in the world! The AO wil be the...
              </p>
              <a href='' className={styles.read_more}>
                Read More
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.photo}>
                <Image src={photo1} width='180' height='73' />
              </div>
              <h3 className={styles.article_title}>Metakey Aces 2</h3>
              <p className={styles.article_text}>
                Metakey is collaborating with The Australian Open (AO) — one of the biggest international tennis tournaments in the world! The AO wil be the...
              </p>
              <a href='' className={styles.read_more}>
                Read More
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.photo}>
                <Image src={photo1} width='180' height='73' />
              </div>
              <h3 className={styles.article_title}>Metakey Aces 3</h3>
              <p className={styles.article_text}>
                Metakey is collaborating with The Australian Open (AO) — one of the biggest international tennis tournaments in the world! The AO wil be the...
              </p>
              <a href='' className={styles.read_more}>
                Read More
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.photo}>
                <Image src={photo1} width='180' height='73' />
              </div>
              <h3 className={styles.article_title}>Metakey Aces 4</h3>
              <p className={styles.article_text}>
                Metakey is collaborating with The Australian Open (AO) — one of the biggest international tennis tournaments in the world! The AO wil be the...
              </p>
              <a href='' className={styles.read_more}>
                Read More
              </a>
            </SwiperSlide>
          </Swiper>
          <div className='pagination_circle_mob' />
        </div>
      </div>
    </div>
  )
}
