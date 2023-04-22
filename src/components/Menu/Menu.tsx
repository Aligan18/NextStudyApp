import { useMenuContext } from '@/context/menu.context'
import { IFirstLevelMenuItem, IMenuModel, IPageItem } from '@/interfaces/menu.interface'
import { ETopLevelCategory } from '@/interfaces/page.interface'
import React from 'react'
import cn from 'classnames'
import classes from "./Menu.module.scss"


const Menu = () => {

const {menu,firstCategory,setMenu} = useMenuContext()

  const secondCategory ="Бизнес"
  const thirdCategory = ""

  const menuArray : IFirstLevelMenuItem[] = 
    [ {title:"Курсы",id: ETopLevelCategory.Courses , icon:<i className="fa-solid fa-graduation-cap"></i>, route : "courses" }, 
      {title:"Сервесы", id: ETopLevelCategory.Services, icon:<i className="fa-solid fa-cloud"></i>, route : "courses" }, 
      {title:"Книги", id:ETopLevelCategory.Books, icon:<i className="fa-solid fa-book"></i>, route : "courses" }, 
      {title:"Товары", id:ETopLevelCategory.Products ,icon:<i className="fa-solid fa-box-open"></i>, route : "courses" }, 
  ]

  const renderFirstList =()=>{
    return <>
                  {menuArray.map(menuItem=>
                      <div key={menuItem.id}>
                          <a href ={`/${menuItem.route}`}>
                            <div className={cn(classes.first_category ,{
                                              [classes.first_category_active] : firstCategory === menuItem.id
                            })}>
                                {menuItem.icon}
                                <span>{menuItem.title}</span>
                            </div> 
                          </a>
                          {menuItem.id === firstCategory && renderSecondList(menuItem)}
                      </div>
                  )}
          </>

  }
  const renderSecondList =(menuItem:IFirstLevelMenuItem)=>{
    return(
          <div>
              {menu.map((m)=>
                    <div key={m._id.secondCategory}>
                        <div className={classes.second_category}> {m._id.secondCategory}</div>
                        <div className={cn(classes.second_category_block ,classes.left_border , {
                              [classes.second_category_block_opened] : m.isOpened 
                        })}>
                            {  renderThirdList(m.pages, menuItem.route)}
                        </div>
                    </div>
              )}
          </div>
        ) 

        
  }

  const renderThirdList =(pages :IPageItem[],route:string)=>{
    return <div className={classes.thrid_category_hover}>
              {pages.map((p)=><a  href={`/${route}/${p.alias}`} 
                                  key={p._id}
                                  className={cn(classes.thrid_category,{
                                        [classes.thrid_category_active]:false
                                  })}
                                  >
                                      {p.title}
                              </a>
              )}
          </div>
  }


  
 console.log(firstCategory)
  return (
    <div>
        {renderFirstList()}
    </div>
  )
}

export default Menu