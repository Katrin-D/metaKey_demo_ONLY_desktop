import PropTypes from 'prop-types'
import React from 'react'
import clsx from 'clsx'
import S from '../styles/BlueButton.module.scss'

const { buttonSize, blur, button, longButton, defaultButton, lowerLeft, double, link } = S

const BlueButton = ({ bgVariant, text, type, href }) => {
  return (
    <div className={blur}>
      <div className={clsx(button, buttonSize, bgVariant === 'lowerLeft' ? lowerLeft : double)}>
        <a
          href={href}
          target='_blank'
          className={clsx(
            link,
            type === 'long' ? longButton : defaultButton,
            bgVariant === 'lowerLeft' ? lowerLeft : double
          )}
          rel='noreferrer'
        >
          {text}
        </a>
      </div>
    </div>
  )
}

BlueButton.propTypes = {
  bgVariant: PropTypes.oneOf(['lowerLeft', 'double']),
  type: PropTypes.oneOf(['long', 'default']),
}

BlueButton.defaultProps = {
  bgVariant: 'lowerLeft',
  text: 'Visit',
  type: 'default',
  href: '',
}

export default BlueButton
