import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import { ILayoutProps } from './Layout.props'
import SideBar from './SideBar/SideBar'


const Layout = ({children}:ILayoutProps) => {
  return (<>
    <Header/>
    <div>
        <SideBar/>
        <div>{children}</div>
    </div>
    <Footer/>
    </>
  )
}

export default Layout