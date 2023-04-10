import React from 'react'
import { ISideBarProps } from './SideBar.props'

const SideBar = ({...props}:ISideBarProps) => {
  return (
    <div {...props}>SideBar</div>
  )
}

export default SideBar