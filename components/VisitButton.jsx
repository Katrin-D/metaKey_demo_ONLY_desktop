import React from 'react'
import S from '../styles/visitButt.module.scss'

function VisitButton() {
  return (
    <div className={S.blur}>
      <div className={S.button}>
        <a href='' target='_blank'>
          Visit
        </a>
      </div>
    </div>
  )
}

export default VisitButton
