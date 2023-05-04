import React from 'react'
import { IStarIconProps } from './StarIcon.props'
import cn from 'classnames'
import classes from './StarIcon.module.scss'

export const StarIcon = ({filled, ...props  }:IStarIconProps) => {
  return (<div {...props}> 
    {filled?<i className={cn("fa-solid fa-star", classes.star)}></i>
    :
        <i className="fa-regular fa-star"></i>
  }
    </div>
  )
}

