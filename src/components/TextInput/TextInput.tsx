import React, { ForwardedRef, forwardRef } from 'react'
import { ITextInputProps } from './TextInput.props'
import cn from 'classnames'
import classes from './TextInput.module.scss'

export const TextInput = forwardRef(({children,className,error,...props}:ITextInputProps , ref:ForwardedRef<HTMLTextAreaElement>) => {
  return (
    <div className={cn(classes.wrapper,className)}>
      <textarea   ref={ref}
                  className={classes.textInput}
                  placeholder={children} 
                  {...props}>
                  
      </textarea>
      {error && <span className={classes.error}>{error.message}</span>}
    </div>
  )
})
