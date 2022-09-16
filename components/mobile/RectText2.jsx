import React from 'react'
import Image from 'next/image'
import S from '../../styles/Mobile.module.scss'
import rect from '../../public/svgs/mobile/Rectangle 203.svg'

function RectText2(props) {
  return (
    <>
      <div className={S.rect2}>
        <Image src={rect} />
      </div>

      <div className={S.rectText2}>
        <div className={S.titleRect}>
          <b>How Does it Work?</b>
        </div>
        <div style={{ opacity: '0' }}>0</div>
        <div>
          <b>Purchase your Metakey</b> from our
        </div>
        <div>
          verified stores. <b>That’s it</b>. Once it’s in
        </div>
        <div>
          your wallet you will <b>instantly</b> unlock
        </div>
        <div>
          our <b>current</b> and <b>future</b>
        </div>
        <div>integrations along with a thriving</div>
        <div>community of likeminded NFT</div>
        <div>explorers.</div>
        <div style={{ opacity: '0' }}>0</div>
        <div>
          Join our <b>Discord</b> and follow our
        </div>
        <div>
          {' '}
          <b>Twitter</b> to stay up to date with
        </div>
        <div>Metakey releases. Now sit back, relax</div>
        <div>
          and <b>reap the rewards</b>.
        </div>
      </div>
    </>
  )
}

export default RectText2
