import React from 'react'
import S from '../styles/Testamonials.module.scss'
import TestamonialCard from './TestamonialCard'
import Matty from '../public/assets/TestamonialCard/matty 1.png'
import YatSiu from '../public/assets/TestamonialCard/YatSiu.png'
import Barry from '../public/assets/TestamonialCard/barry 1.png'
import logo1 from '../public/assets/TestamonialCard/METAKEY 1.svg'
import logo2 from '../public/assets/TestamonialCard/Asset 1 21.svg'
import logo3 from '../public/assets/TestamonialCard/Asset 3 16.svg'

const data = [
  {
    name: 'Matty | DCL Blogger',
    photo: Matty,
    position: 'FOUNDER & CEO',
    companyLogo: logo1,
    logoWidth: 132,
    logoHeight: 30,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
  },
  {
    name: 'Yat Siu',
    photo: YatSiu,
    position: 'FOUNDER & CEO',
    companyLogo: logo2,
    logoWidth: 72,
    logoHeight: 41,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
  },
  {
    name: 'Barry Silbert',
    photo: Barry,
    position: 'FOUNDER & CEO',
    companyLogo: logo3,
    logoWidth: 83,
    logoHeight: 58,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
  },
]

function Testamonials() {
  return (
    <div className={S.main}>
      <div className={S.bg} />
      <div className={S.container}>
        {data && data.map((item, index) => <TestamonialCard key={index} card={item} />)}
      </div>
    </div>
  )
}

export default Testamonials
