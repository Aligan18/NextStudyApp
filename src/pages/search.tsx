
import React, { useEffect, useState } from 'react'
import { withLayout } from '@/hoc/withLayout'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { IMenuModel } from '@/interfaces/menu.interface'
import { ETopLevelCategory, ITopPageModel } from '@/interfaces/page.interface'
import { useRouter } from 'next/router'
import { API } from '@/helpers/api'
import { SearchList } from '@/page-components/page-elements'


const Search = () => {
  const [pages , setPages]= useState<ITopPageModel[]>([])
  const router = useRouter()
  console.log(router.query.value)
  const getSearchPages = async()=>{
    const {data } = await axios.get<ITopPageModel[]>(API.topPage.searchPage+router.query.value)
    setPages(data)
  }

  useEffect(()=>{
     router.query.value && getSearchPages()
  },[router.query.value])

  console.log(pages)
  return <div>
          {pages.map((page)=>
            <SearchList key={page._id} alias={page.alias}  description={page.metaDescription} title={page.title}/>
          )}
          
      </div>
  
}

export const getStaticProps : GetStaticProps<IHomeProps> = async () =>{
  const   firstCategory = ETopLevelCategory.Courses
  const { data:menu } = await axios.post<IMenuModel[]>(API.topPage.find,{firstCategory})

  return {
       
      props: {
        menu,
        firstCategory
      }
  }
}

export default withLayout( Search) 

interface IHomeProps extends Record<string,unknown>{
  menu: IMenuModel[],
  firstCategory: ETopLevelCategory
  
}

