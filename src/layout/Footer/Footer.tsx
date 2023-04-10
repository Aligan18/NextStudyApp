import React from 'react'
import { IFooterProps } from './Footer.props'

const Footer = ({...props}:IFooterProps) => {
  return (
    <div {...props}>Footer</div>
  )
}

export default Footer