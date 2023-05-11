import React from 'react'
import { IFooterProps } from './Footer.props'
import classes from './Footer.module.scss'
import cn from 'classnames'

export const Footer = ({className , ...props}:IFooterProps) => {
  return (
    <footer className={cn(classes.wrapper , className) } {...props}>
    
    </footer>
  )
}

