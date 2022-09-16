import React from 'react'
import S from '../../styles/Mobile.module.scss'

function TheKeyMob(props) {
  return (
    <div>
      <div className={S.text1}>
        THE KEY <span style={{ opacity: '0' }}>TO THE METAVERSE</span>
      </div>
      <div className={S.blur}>
        THE KEY <span style={{ opacity: '0' }}>TO THE METAVERSE</span>
      </div>
      <div className={S.textFull}>
        THE KEY <b style={{ opacity: '0' }}>_</b>
        <span> TO THE METAVERSE</span>
      </div>
    </div>
  )
}

export default TheKeyMob
