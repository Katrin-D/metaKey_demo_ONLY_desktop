import React from 'react'
import S from '../../styles/mobile/TheTeam.module.scss'
import TeamCard from '../TeamCard'
import { team } from '../../data/teamData'

function TheTeam() {
  return (
    <div className={S.main}>
      <h2 className={S.title}>THE TEAM</h2>
      <div className={S.container}>{team && team.map((item, index) => <TeamCard key={index} card={item} />)}</div>
    </div>
  )
}

export default TheTeam
