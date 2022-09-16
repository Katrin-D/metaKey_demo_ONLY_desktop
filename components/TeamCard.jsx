import React from 'react'
import Image from 'next/image'
import S from '../styles/TeamCard.module.scss'

function TeamCard({ card }) {
  return (
    <div className={S.main}>
      <div className={S.bg} />
      <Image src={card.photo} width='126' height='127' />
      <p className={S.name}>{card.name}</p>
      <p className={S.position}>{card.position}</p>
    </div>
  )
}

export default TeamCard
