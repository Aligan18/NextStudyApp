/* eslint-disable no-unused-vars */
import { IMenuModel } from "@/interfaces/menu.interface";
import { ETopLevelCategory } from "@/interfaces/page.interface";
import { createContext, ReactNode,  useContext, useState } from "react";



export interface IMenuContext {
    menu: IMenuModel[]
    firstCategory: ETopLevelCategory
    setMenu? : (newMenu:IMenuModel[]) => void
}


export const MenuContext = createContext<IMenuContext>({ menu: [], firstCategory: ETopLevelCategory.Courses})

export  const MenuContextProvider =({menu , firstCategory , children}:IMenuContext & {children:ReactNode} )=>{

    const [menuState , setMenuState] = useState<IMenuModel[]>(menu)

    const setMenu =(newMenu:IMenuModel[])=>{
        setMenuState(newMenu)
    }

    return (
        <MenuContext.Provider  value ={{menu: menuState, firstCategory, setMenu}}>
            {children}
        </MenuContext.Provider>
    )
}

export const useMenuContext = ()=>{
    return  useContext(MenuContext)
}
