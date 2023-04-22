import Menu from '@/components/Menu/Menu'
import React from 'react'
import { ISideBarProps } from './SideBar.props'

const SideBar = ({...props}:ISideBarProps) => {
  return (
    <div {...props}>
      <Menu/>
    </div>
  )
}

export default SideBar