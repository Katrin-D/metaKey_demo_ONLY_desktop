import React from 'react'
import S from '../styles/Twitter.module.scss'

function Twitter() {
  return (
    <div className={S.main}>
      <div className={S.twitterContainer} />
      <div className={S.twittsContainer}>
        <div className={S.twitt} />
        <div className={S.twitt} />
      </div>
    </div>
  )
}

export default Twitter
