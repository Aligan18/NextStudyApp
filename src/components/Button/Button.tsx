import classNames from 'classnames'
import React from 'react'
import { IButton , EButtonType } from './Button.props'
import classes from './Button.module.scss'
import cn from 'classnames'

const Button = ({children,type}:IButton) => {
  return (
    <button className={cn(classes.button ,{
                        [classes.primary]: type == EButtonType.PRIMARY,
                        [classes.ghost] : type == EButtonType.GHOST,
                    })}>
        {children}
    </button>
  )
}

export default Button