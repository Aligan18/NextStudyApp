import React from 'react'
import { ETextBoxSize, ITextBoxProps } from './TextBox.props'
import classes from './TextBox.module.scss'
import cn from 'classnames'

const TextBox = ({size = ETextBoxSize.MEDIUM, children, className, ...props}:ITextBoxProps) => {
  return (
    <p className={cn(classes.text , className, {
                     [classes.large ]: size === ETextBoxSize.LARGE ,
                     [classes.medium] : size === ETextBoxSize.MEDIUM ,
                     [classes.small] : size === ETextBoxSize.SMALL ,

                    }
        )}
        {...props}
        > {children}
    </p>
  )
}

export default TextBox