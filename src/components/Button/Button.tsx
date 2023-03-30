import classNames from 'classnames'
import React  from 'react'
import { IButton , EButtonType, EArrowType } from './Button.props'
import classes from './Button.module.scss'
import cn from 'classnames'
import ArrowIcon from "../ArrowIcon/ArrowIcon"

const Button = ({children,appearance, arrow= EArrowType.NONE, className, ...props}:IButton) => {
  return (
    <button className={cn(classes.button , className,{
                        [classes.primary]: appearance == EButtonType.PRIMARY,
                        [classes.ghost] : appearance == EButtonType.GHOST,
                    })}
                    {...props}>
        {children}
        {arrow !== EArrowType.NONE && <ArrowIcon className={cn(classes.arrow ,{
                                                          [classes.arrow_right]: arrow === EArrowType.RIGHT,
                                                          [classes.arrow_down]: arrow === EArrowType.DOWN,
                                                          })}/>}
    </button>
  )
}

export default Button