import { withLayout } from '@/hoc/withLayout'
import { IMenuModel } from '@/interfaces/menu.interface'
import { ITopPageModel } from '@/interfaces/page.interface'
import { IProductModel } from '@/interfaces/product.interface'
import axios from 'axios'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
const firstCategory = 0
const Courses = ({menu, page , product}:ICoursesProps) => {
  return (
    <div>
        {product && product.length}
    </div>
  )
}

export default  withLayout(Courses)


export const getStaticPaths: GetStaticPaths = async()=>{
    const { data: menu } = await axios.post<IMenuModel[]>(process.env.NEXT_PUBLIC_DOMAIN+'/api/top-page/find',{firstCategory })
   
    return {
        paths: menu.flatMap(m=>m.pages.map(p =>"/courses/" +p.alias )),
        fallback:true
    }
}


export const getStaticProps : GetStaticProps<ICoursesProps> = async({params}:GetStaticPropsContext<ParsedUrlQuery>)=>{
    if (!params){
        return {
            notFound:true
        }
    }
    const { data: menu } = await axios.post<IMenuModel[]>(process.env.NEXT_PUBLIC_DOMAIN+'/api/top-page/find',{firstCategory })
    const {data : page } = await axios.get<ITopPageModel>(process.env.NEXT_PUBLIC_DOMAIN+'/api/top-page/byAlias/'+ params.alias)  
    const {data: product} = await axios.post<IProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN+"/api/product/find",  {
                                                                                                "category": page.category,
                                                                                                "limit" : 10 
                                                                                            })
    return {
        props:{
            firstCategory,
            menu,
            product,
            page,
        }
    }
}



interface ICoursesProps  extends Record<string, unknown> {
    firstCategory:number
    menu: IMenuModel[]
    product:IProductModel[]
    page: ITopPageModel
}