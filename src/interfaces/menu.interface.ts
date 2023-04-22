import { ReactNode } from "react"
import { ETopLevelCategory } from "./page.interface"

export interface IMenuModel{
    _id: {
      secondCategory: string
    }
    isOpened?: boolean
    pages: IPageItem[]
  }
  
 export  interface IPageItem {
    alias: string
    title: string
    _id: string
    category: string
  }

  export interface IFirstLevelMenuItem{
    route: string
    title: string 
    id:ETopLevelCategory
    icon:ReactNode
  }