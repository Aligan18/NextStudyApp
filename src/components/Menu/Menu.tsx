import { useMenuContext } from '@/context/menu.context'
import { IFirstLevelMenuItem, IMenuModel, IPageItem } from '@/interfaces/menu.interface'
import { ETopLevelCategory } from '@/interfaces/page.interface'
import React from 'react'
import cn from 'classnames'
import classes from "./Menu.module.scss"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { firstLevelMenu } from '@/helpers/firstLevelMenu'


export const Menu = () => {
  
  const {menu,firstCategory,setMenu} = useMenuContext()
  const router = useRouter()
  
  
  

  const changeIsOpened =(secondCategory:string)=>{
    setMenu && setMenu(menu.map(m=>{
        if(m._id.secondCategory===secondCategory){
         m.isOpened= !m.isOpened
        }
        return m
    }))
  }

  const renderFirstList =()=>{



    return <>
                  {firstLevelMenu.map(menuItem=>
                      <div key={menuItem.id}>
                        <Link href ={`/${menuItem.route}`}>
                          <div >
                            <div className={cn(classes.first_category ,{
                                              [classes.first_category_active] : firstCategory === menuItem.id
                            })}>
                                {menuItem.icon}
                                <span>{menuItem.title}</span>
                            </div> 
                          </div>
                        </Link>
                          {menuItem.id === firstCategory && renderSecondList(menuItem)}
                      </div>
                  )}
          </>

  }
  const renderSecondList =(menuItem:IFirstLevelMenuItem)=>{

    

    return(
          <div>
              {menu.map((m)=>{
                  if (m._id.secondCategory.includes(router.asPath.split("/")[2])){
                      m.isOpened= true
                  }
                  return (

                    <div key={m._id.secondCategory}  >
                        <div  className={cn (classes.second_category,
                                              {[classes.second_category_selected] : m.isOpened})} 
                              onClick={()=>changeIsOpened(m._id.secondCategory)}> 
                                     {m._id.secondCategory}
                        </div>
                        <div className={cn(classes.second_category_block ,classes.left_border , {
                              [classes.second_category_block_opened] : m.isOpened 
                        })}>
                            {  renderThirdList(m.pages, menuItem.route)}
                        </div>
                    </div>
              )})}
          </div>
        ) 

        
  }

  const renderThirdList =(pages :IPageItem[],route:string)=>{
    return <div className={classes.thrid_category_hover}>
              {pages.map((p)=><Link key={p._id} href={`/${route}/${p.alias}`}>
                                  <div  className={cn(classes.thrid_category,{
                                                      [classes.thrid_category_active]: router.asPath === `/${route}/${p.alias}`
                                                })}
                                    >
                                        {p.title}
                                </div>
                              </Link>
              )}
          </div>
  }


  

  return (
    <div>
        {renderFirstList()}
    </div>
  )
}

