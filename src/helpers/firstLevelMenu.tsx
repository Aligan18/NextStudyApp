import { IFirstLevelMenuItem } from "@/interfaces/menu.interface";
import { ETopLevelCategory } from "@/interfaces/page.interface";




export const firstLevelMenu : IFirstLevelMenuItem[] = 
  [ {title:"Курсы",id: ETopLevelCategory.Courses , icon:<i className="fa-solid fa-graduation-cap"></i>, route : "courses" }, 
    {title:"Сервесы", id: ETopLevelCategory.Services, icon:<i className="fa-solid fa-cloud"></i>, route : "services" }, 
    {title:"Книги", id:ETopLevelCategory.Books, icon:<i className="fa-solid fa-book"></i>, route : "books" }, 
    {title:"Товары", id:ETopLevelCategory.Products ,icon:<i className="fa-solid fa-box-open"></i>, route : "products" }, 
]
