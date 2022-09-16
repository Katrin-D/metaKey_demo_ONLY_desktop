import React from 'react'
import S from '../styles/FAQs.module.scss'

function FAQs() {
  return (
    <div className={S.main}>
      <h2 className={S.title}>FREQUENTLY ASKED QUESTIONS</h2>
      <div className={S.questions}>
        <div className={S.col}>
          <div className={S.question}>
            <h3>Where do I buy a Metakey?</h3>
            <p>You can buy any Metakey Edition on secondaries via our official collections on OpenSea or Rarible.</p>
          </div>
          <div className={S.question}>
            <h3>What is the difference between each Edition?</h3>
            <p>
              Every Edition offers the same core functionality. Distinct Editions offer cosmetic variations on various
              integrations and drops; a different level of scarcity; and occasional Edition-exclusive benefits offered
              by the Edition artist/s.
            </p>
          </div>
          <div className={S.question}>
            <h3>What are the benefits of holding a Metakey?</h3>
            <p>
              The Metakey is the NFT that keeps on giving. We are committed to packing each Edition with magnitudes of
              value beyond the original mint price. The benefits accumulate exponentially the longer you hold!
            </p>
          </div>
        </div>
        <div className={S.col}>
          <div className={S.question}>
            <h3>What is the Metakrew?</h3>
            <p>
              The Metakrew is our avatar collection— interoperable between multiple games and Metaverse spaces. The
              Metakrew is your identity in the Metaverse!
            </p>
          </div>
          <div className={S.question}>
            <h3>When is the next Metakey Edition?</h3>
            <p>
              The next Metakey Edition will not be released before the value of the current Edition is solidified, nor
              before demand has organically reached the point that the current Edition is no longer accessible to new
              users.
            </p>
          </div>
          <div className={S.question}>
            <h3>How do I stay up to date with Metakey news?</h3>
            <p>You should follow us on Twitter, Discord, YouTube, Medium and Twitch via the links below!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FAQs
