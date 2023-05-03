import React from 'react'
import { ISearchProps } from './Search.props'
import classes from './Search.module.scss'
import cn from 'classnames'
import Button from '../Button/Button'
import { EButtonType } from '../Button/Button.props'

const SearchInput = ({className, children, ...props}:ISearchProps) => {
  return (
  <div className={cn(className,classes.wrapper)}>
      <input className={classes.input}  placeholder={children} {...props}/>

      <Button className={classes.button} appearance={EButtonType.PRIMARY}> 
          <i className="fa-solid fa-magnifying-glass"></i>
      </Button>
   </div>
  )
}

export default SearchInput