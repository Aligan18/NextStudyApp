import React from 'react'
import { IArrowIcon } from './ArrowIcon.props'

export const ArrowIcon  = ({...props}:IArrowIcon) => {
  return (
    <img   src={'./arrow.svg'} {...props}/> 
  )
}

