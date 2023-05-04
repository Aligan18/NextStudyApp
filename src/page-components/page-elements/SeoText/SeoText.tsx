import React from 'react'
import {ISeoTextProps} from './SeoText.props'
import classes from './SeoText.module.scss'

export  const SeoText = ({seoText}:ISeoTextProps) => {
  return (
    <div className={classes.seoText} dangerouslySetInnerHTML={{__html: seoText}}></div>
  )
}

