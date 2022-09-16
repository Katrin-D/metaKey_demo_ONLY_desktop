import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import styles from '../styles/WhatIsMetakey.module.scss'
import useTranslation from '../hooks/useTranslation'

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

const WhatIsAMetakey = () => {
  const { translation, translate } = useTranslation()
  const [block1Displacement, setBlock1Displacement] = useState([0, 0])
  const [block2Displacement, setBlock2Displacement] = useState([0, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      setBlock1Displacement([getRandomInt(15) - 7, getRandomInt(15) - 7])
      setBlock2Displacement([getRandomInt(15) - 7, getRandomInt(15) - 7])
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      id='What is a Metakey'
      className={clsx(styles.root, { [styles.fixed]: translate })}
      style={{ transform: `translateY(${translation}px)` }}
    >
      <div className={styles.relativeWrapper}>
        <div
          className={clsx(styles.block, styles.block1)}
          style={{ transform: `translate(${block1Displacement[0]}px, ${block1Displacement[1]}px)` }}
        >
          <h2 className={styles.title}>What is a Metakey?</h2>
          <p className={clsx(styles.body, styles.body1)}>
            The Metakey is an NFT, (ERC1155), that can be used across partnered platforms to unlock{' '}
            <b>avatars, game assets, course materials, discounts</b> and anything else our team and partners can dream
            of.
          </p>
          <p className={clsx(styles.body, styles.body2)}>
            Your Metakey will be your <b>access and experience card</b> to <b>every</b> project/game/website we partner
            with.
          </p>
        </div>
        <div
          className={clsx(styles.block, styles.block2)}
          style={{ transform: `translate(${block2Displacement[0]}px, ${block2Displacement[1]}px)` }}
        >
          <h2 className={styles.title}>How Does it Work?</h2>
          <p className={clsx(styles.body, styles.body1)}>
            <b>Purchase your Metakey</b> from our verified stores. <b>That’s it</b>. Once it’s in your wallet you will{' '}
            <b>instantly</b> unlock our <b>current</b> and <b>future integrations</b> along with a thriving community of
            likeminded NFT explorers.
          </p>
          <p className={clsx(styles.body, styles.body2)}>
            Join our <b>Discord</b> and follow our <b>Twitter</b> to stay up to date with Metakey releases. Now sit
            back, relax and <b>reap the rewards</b>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhatIsAMetakey
