import { UpButton } from '@/components'
import React from 'react'
import { Footer, Header, SideBar } from './index'
import classes from './Layout.module.scss'

import { ILayoutProps } from './Layout.props'



export const Layout = ({children}:ILayoutProps) => {
  return (<div className={classes.wrapper} >
                <UpButton/>
                <Header className={classes.header}/>
                <SideBar className={classes.sidebar}/>
                <div className={classes.body}>{children}</div>
                <Footer className={classes.footer}/>
          </div >
  )
}

