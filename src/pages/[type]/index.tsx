
import React from 'react'
import { withLayout } from '@/hoc/withLayout'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import axios from 'axios'
import { IMenuModel } from '@/interfaces/menu.interface'
import { ETopLevelCategory } from '@/interfaces/page.interface'
import { firstLevelMenu } from '@/helpers/firstLevelMenu'
import { ParsedUrlQuery } from 'querystring'

const TypeIndex = ({firstCategory}:ITypeProps) => {
 

  return (
      <>
        TypeIndex {firstCategory}
    </>
  )
}

export default withLayout( TypeIndex) 


export const getStaticProps : GetStaticProps<ITypeProps> = async ({params}:GetStaticPropsContext<ParsedUrlQuery>) =>{
  
    if(!params){
        return{
            notFound:true
        }
    }
    
    const firstCategory = firstLevelMenu.find((category)=>category.route=== params.type)

    if(!firstCategory){
        return{
            notFound:true
        }
    }

    try {
        const { data:menu } = await axios.post<IMenuModel[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",{firstCategory: firstCategory.id})
        return {
       
            props: {
              menu,
              firstCategory : firstCategory.id
            }
        }
    } catch (error) {
        return{
            notFound:true
        }
    }
}

export const getStaticPaths: GetStaticPaths = async()=>{

    return {
        paths : firstLevelMenu.map(category=> "/"+category.route) ,
        fallback:true
    }
}



interface ITypeProps extends Record<string,unknown>{
  menu: IMenuModel[],
  firstCategory: ETopLevelCategory
  
}

