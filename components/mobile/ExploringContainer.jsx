import React from 'react'
import S from '../../styles/Mobile.module.scss'

function ExploringContainer(props) {
  return (
    <>
      <div id='blueText'>
        <div className={S.blueText1}>
          <div>On the journey to build unlmited use cases </div>
          <div> withinn a single NFT</div>
        </div>
        <div className={S.blueText2}>
          <div>On the journey to build unlmited use cases </div>
          <div> withinn a single NFT</div>
        </div>
      </div>

      <div id='exploring'>
        <div className={S.exploring1}>
          EXPLORING <span>HYPER INTEROPERABILITY</span>
        </div>
        <div className={S.exploring2}>
          <div>
            <span>EXPLORING</span> HYPER
          </div>
          <div>INTEROPERABILITY</div>
        </div>
        <div className={S.exploring3}>
          <div>
            <span>EXPLORING</span> HYPER
          </div>
          <div>INTEROPERABILITY</div>
        </div>
      </div>

      <div className={S.connecting}>
        <div>
          <span className={S.grey}>By connecting the Metakey to </span>
        </div>
        <div>
          <b className={S.b1}>HUNDREDS</b>{' '}
          <span>
            <span className={S.grey}>of</span> <b className={S.b2}> Web3</b>
          </span>{' '}
          <span className={S.grey}>Projects</span>
        </div>
      </div>
      <div className={S.lineCenter}>
        <div className={S.line} />
      </div>
    </>
  )
}

export default ExploringContainer
