import React from 'react'
import { ITextInputProps } from './TextInput.props'
import cn from 'classnames'
import classes from './TextInput.module.scss'

export const TextInput = ({children,className,...props}:ITextInputProps) => {
  return (
    <textarea   className={cn(classes.textInput,className)}
                placeholder={children} 
                {...props}>
                
    </textarea>
  )
}
