import React from 'react'
import classes from './InputElement.module.scss' 
import { IInputElement } from './InputElement.props'

export const InputElement = ({handleKeyDown,children,setValue,value, className,...props  }:IInputElement) => {
  return (
    <div className={className}>
         <input  value={value} 
              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setValue(e.target.value)}
              onKeyDown={ (event: React.KeyboardEvent<HTMLInputElement>)=> handleKeyDown && handleKeyDown(event)}
              className={classes.input}   
              placeholder={typeof(children)==="string" ? children:undefined} 
              {...props}
      />
    </div>
  )
}
