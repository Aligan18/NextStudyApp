import React from 'react'
import { IFooterProps } from './Footer.props'
import classes from './Footer.module.scss'
import cn from 'classnames'
const Footer = ({className , ...props}:IFooterProps) => {
  return (
    <footer className={cn(classes.wrapper , className) } {...props}>
      <div className={classes.text}>OwlTop  Все права защищены</div>
      <div className={classes.agreement}>Пользовательское соглашение</div>
      <div className={classes.confidentiality}>Политика конфиденциальности</div>
    </footer>
  )
}

export default Footer