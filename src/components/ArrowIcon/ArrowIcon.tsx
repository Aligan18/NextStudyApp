import React from 'react'

import { IArrowIcon } from './ArrowIcon.props'

export const ArrowIcon  = ({...props}:IArrowIcon) => {
  return (
    <img  alt='arrow'  src={'./arrow.svg'} {...props}/> 
  )
}

