import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import { ILayoutProps } from './Layout.props'
import SideBar from './SideBar/SideBar'
import classes from './Layout.module.scss'


const Layout = ({children}:ILayoutProps) => {
  return (<div className={classes.wrapper} >
                <Header className={classes.header}/>
                <SideBar className={classes.sidebar}/>
                <div className={classes.body}>{children}</div>
                <Footer className={classes.footer}/>
          </div >
  )
}

export default Layout