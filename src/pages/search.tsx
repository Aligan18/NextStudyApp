
import React from 'react'
import { withLayout } from '@/hoc/withLayout'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { IMenuModel } from '@/interfaces/menu.interface'
import { ETopLevelCategory } from '@/interfaces/page.interface'

const Search = () => {
 

  return (
      <>
        Search
    </>
  )
}

export const getStaticProps : GetStaticProps<IHomeProps> = async () =>{
  const   firstCategory = ETopLevelCategory.Courses
  const { data:menu } = await axios.post<IMenuModel[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",{firstCategory})

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

