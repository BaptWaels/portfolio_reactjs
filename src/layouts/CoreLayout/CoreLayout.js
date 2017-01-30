import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children, location, intl, switchLanguage }) => {
  return (
    <div className="core-layout">
      <Header location={location} />
      {React.cloneElement(children, { intl, switchLanguage })}
    </div>
  )
}

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
