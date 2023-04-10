import React from 'react'
import { IHomeProps } from './Header.props'

const Header = ({...props}:IHomeProps) => {
  return (
    <div {...props}>Header</div>
  )
}

export default Header