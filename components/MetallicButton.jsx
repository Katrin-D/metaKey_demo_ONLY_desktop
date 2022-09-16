import PropTypes from 'prop-types'
import React from 'react'
import clsx from 'clsx'
import styles from '../styles/MetallicButton.module.scss'

const { root, upperRight, lowerRight, flat, glow, metallicShineEffect, buttonSize, lowerRightClip, upperRightClip } =
  styles

const MetallicButton = ({ bgVariant, text, href, top, left }) => {
  const bgClassName = bgVariant === 'upperRight' ? upperRight : bgVariant === 'lowerRight' ? lowerRight : flat
  const clipClassName = bgVariant === 'upperRight' ? upperRightClip : bgVariant === 'lowerRight' ? lowerRightClip : flat

  return (
    <div className={root} style={{ top, left }}>
      <div className='p-relative'>
        <div className={glow} />
        <div className={clsx('p-absolute', buttonSize, bgClassName)} />
        <a href={href} className={clsx(buttonSize, metallicShineEffect, clipClassName)}>
          {text}
        </a>
      </div>
    </div>
  )
}

MetallicButton.propTypes = {
  bgVariant: PropTypes.oneOf(['upperRight', 'lowerRight', 'flat']),
}

MetallicButton.defaultProps = {
  bgVariant: 'upperRight',
  text: 'Get my key',
  href: '',
  top: 0,
  left: 0,
}

export default MetallicButton
