import React from 'react'
import { IHomeProps } from './Header.props'

export const Header = ({...props}:IHomeProps) => {
  return (
    <div {...props}>Header</div>
  )
}

