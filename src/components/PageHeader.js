import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import './PageHeader.css'

const PageHeader = ({
  title,
  subtitle,
  backgroundImage,
  large,
  className = ''
}) => {
  if (large) className += ' PageHeader-large'
  return (
    <div className={`PageHeader relative ${className}`}>
      {backgroundImage && (
        <Image background src={backgroundImage} alt={title} size="cover" />
      )}
      <div className="container relative">
        <h1 className="PageHeader--Title">{title}</h1>
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader