import React from 'react'
import Image from 'next/image'
import S from '../styles/TestamonialCard.module.scss'

function TestamonialCard({ card }) {
  return (
    <div className={S.frame}>
      <div className={S.image}>
        <Image src={card.photo} width='195' height='188' />
      </div>
      <h3 className={S.name}>{card.name}</h3>
      <h4 className={S.position}>{card.position}</h4>
      <div className={S.companyLogo}>
        <Image src={card.companyLogo} width={card.logoWidth} height={card.logoHeight} />
      </div>
      <q className={S.review}>{card.review}</q>
    </div>
  )
}

export default TestamonialCard
