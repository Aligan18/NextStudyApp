import React, { ForwardedRef, forwardRef } from 'react'
import { IStarIconProps } from './StarIcon.props'
import cn from 'classnames'
import classes from './StarIcon.module.scss'

export const StarIcon = forwardRef(({filled, ...props  }:IStarIconProps, ref:ForwardedRef<HTMLDivElement>) => {
  return (<div ref={ref} {...props}> 
    {filled?<i className={cn("fa-solid fa-star", classes.star)}></i>
    :
        <i className="fa-regular fa-star"></i>
  }
    </div>
  )
})

