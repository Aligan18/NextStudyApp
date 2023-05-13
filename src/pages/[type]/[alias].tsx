import { API } from '@/helpers/api'
import { firstLevelMenu } from '@/helpers/firstLevelMenu'
import { withLayout } from '@/hoc/withLayout'
import { IMenuModel } from '@/interfaces/menu.interface'
import { ETopLevelCategory, ITopPageModel } from '@/interfaces/page.interface'
import { IProductModel } from '@/interfaces/product.interface'
import { TopPageComponent } from '@/page-components'
import axios from 'axios'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'



const TopPage = ({ page , product ,firstCategory}: ITopPageProps) => {

  return<> 
        <Head>
            <title>{page.metaTitle}</title>
            <meta name="description" content={page.metaDescription}/>
            <meta property="og:locale" content="ru_RU" />
            <meta property="og:title" content={page.metaTitle} />
            <meta property="og:description" content={page.metaDescription} />
            <meta property="og:type" content="article" />
            <meta property="og:locale" content="ru_RU" />
            <meta property="og:url" content={`${API.courses}/${page.alias}`} />

        </Head>
            <TopPageComponent  page={page} 
                                product={product} 
                                firstCategory={firstCategory}
            />
        
        </>

}

export default  withLayout(TopPage)


export const getStaticPaths: GetStaticPaths = async()=>{

    let paths:string[]= []
    for (let category of firstLevelMenu){
       const {data:menu} = await axios.post<IMenuModel[]>(API.topPage.find,{firstCategory : category.id })
       paths = paths.concat(menu.flatMap(m=>m.pages.map(p =>`/${category.route}/${p.alias}` )))
    }
     

    return {
        paths ,
        fallback:'blocking'
    }
}


export const getStaticProps : GetStaticProps<ITopPageProps> = async({params}:GetStaticPropsContext<ParsedUrlQuery>)=>{
    if (!params){
        return {
            notFound:true
        }
    }

    const firstCategory =  firstLevelMenu.find((first)=> first.route === params.type) 
    if (!firstCategory){
        return {
            notFound:true
        }
    }

    try {
    
    const { data: menu } = await axios.post<IMenuModel[]>(API.topPage.find,{firstCategory : firstCategory.id })
    const {data : page } = await axios.get<ITopPageModel>(API.topPage.byAlias+ params.alias)  
    const {data: product} = await axios.post<IProductModel[]>(API.page.find,  {
                                                                "category": page.category,
                                                                "limit" : 10 
                                                                })

    return {
            props:{
                firstCategory : firstCategory.id,
                menu,
                product,
                page,
            }    
            }                
    } catch (error) {
        return {
            notFound:true
        }
    }
    
    
    }


interface ITopPageProps  extends Record<string, unknown> {
    firstCategory:ETopLevelCategory
    menu: IMenuModel[]
    product:IProductModel[]
    page: ITopPageModel
}