import React from 'react'
import Image from 'next/image'
import S from '../../styles/Mobile.module.scss'
import Asset10 from '../../public/svgs/mobile/Asset 1 10.svg'

function MetaText(props) {
  return (
    <>
      <div className={S.asset12}>
        <Image src={Asset10} />
      </div>
      <div className={S.asset11}>
        <Image src={Asset10} />
      </div>
      <div className={S.asset10}>
        <Image src={Asset10} />
      </div>
      <div className={S.textConnect}>
        <div>
          <span>CONNECTING </span>
          <span style={{ fontWeight: '600' }}> WEB 3</span>
        </div>
      </div>
    </>
  )
}

export default MetaText
