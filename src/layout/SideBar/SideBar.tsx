import Menu from '@/components/Menu/Menu'
import React from 'react'
import { ISideBarProps } from './SideBar.props'
import cn from "classnames"
import classes from './SideBar.module.scss'
import SearchInput from '@/components/Search/Search'

const SideBar = ({className,...props}:ISideBarProps) => {
  return (
    <div {...props} className={cn(className , classes.wrapper )}>
      <SearchInput  className={classes.search}>Поиск...</SearchInput>
      <Menu/>
    </div>
  )
}

export default SideBar