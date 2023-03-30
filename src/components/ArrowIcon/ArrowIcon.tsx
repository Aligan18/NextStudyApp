import React from 'react'
import { IArrowIcon } from './ArrowIcon.props'

const ArrowIcon  = ({...props}:IArrowIcon) => {
  return (
    <img   src={'./arrow.svg'} {...props}/> 
  )
}

export default ArrowIcon