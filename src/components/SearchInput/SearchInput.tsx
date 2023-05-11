import React, { useState } from 'react'
import classes from './SearchInput.module.scss'
import cn from 'classnames'

import { ISearchProps } from './SearchInput.props'
import { EButtonType } from '../Button/Button.props'
import { InputElement } from '../index'
import { useRouter } from 'next/router'
import { ButtonIcon } from '../ButtonIcon/ButtonIcon'

export const SearchInput = ({className, children, ...props}:ISearchProps) => {
  const route = useRouter()
 
  const [value, setValue] = useState<string>('')
  console.log(value)

  const goToSearch =()=>{
    route.push({
         pathname:"/search",
         query:{
            value: value,
         }           
    })
  }

  const handleKeyDown =(event:React.KeyboardEvent<HTMLInputElement>)=>{
     if(event.key === 'Enter'){ goToSearch() }
  }

  return (
  <div className={cn(className,classes.wrapper)} {...props}>
    <InputElement handleKeyDown={handleKeyDown} value={value} setValue={setValue} >{children}</InputElement>

      <ButtonIcon icon='search'
                  onClick={goToSearch}
                  className={classes.button} 
                  appearance={EButtonType.PRIMARY}
      /> 
      
   </div>
  )
}
