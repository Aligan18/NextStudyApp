import Menu from '@/components/Menu/Menu'
import Search from '@/pages/search'
import React from 'react'
import { ISideBarProps } from './SideBar.props'
import cn from "classnames"
import classes from './SideBar.module.scss'

const SideBar = ({className,...props}:ISideBarProps) => {
  return (
    <div {...props} className={cn(className , classes.wrapper )}>
      <div className={classes.search}> Поиск </div>
      <Menu/>
    </div>
  )
}

export default SideBar