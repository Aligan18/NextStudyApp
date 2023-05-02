import Button from '@/components/Button/Button'
import { EArrowType, EButtonType } from '@/components/Button/Button.props'
import Htag from '@/components/Htag/Htag'
import { EHtags } from '@/components/Htag/Htag.props'
import TextBox from '@/components/TextBox/TextBox'
import { ETextBoxSize } from '@/components/TextBox/TextBox.props'
import classes from './index.module.scss'
import React, { useState } from 'react'
import Tag from '@/components/Tag/Tag'
import { ETagAppearance, ETagSize } from '@/components/Tag/Tag.props'
import StarIcon from '@/components/StarGroup/StarIcon/StarIcon'
import StarGroup from '@/components/StarGroup/StarGroup'
import Layout from '@/layout/Layout'
import { withLayout } from '@/hoc/withLayout'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { HookCallbacks } from 'async_hooks'
import { IMenuModel } from '@/interfaces/menu.interface'
import { ETopLevelCategory } from '@/interfaces/page.interface'

const Home = ({menu,firstCategory}:IHomeProps) => {
  const [rating, setRating] =useState(3)

  return (
      <>
    <Htag tag={EHtags.LARGE}> Hello World </Htag>
    <Htag tag={EHtags.MEDIUM}> Hello World </Htag>
    <Htag tag={EHtags.SMALL}> Hello World </Htag>
    <Button  arrow={EArrowType.DOWN} appearance={EButtonType.PRIMARY}> Hello World</Button>
    <Button arrow={EArrowType.RIGHT} appearance={EButtonType.GHOST} > Hello World</Button>
    <TextBox size={ETextBoxSize.LARGE}>Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.</TextBox>
   
     <TextBox size={ETextBoxSize.MEDIUM}>Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.</TextBox>
    
     <TextBox size={ETextBoxSize.SMALL}>Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.</TextBox>
      <Tag appearance={ETagAppearance.GHOST}>Hello</Tag>
      <Tag size={ETagSize.SMALL} appearance={ETagAppearance.GREEN}>Hello</Tag>
      <Tag appearance={ETagAppearance.RED}>Hello</Tag>
      <Tag  size={ETagSize.SMALL} appearance={ETagAppearance.WHITE}> Figma </Tag>
      <StarGroup rating={rating} setRating={setRating}  />
      
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

export default withLayout( Home) 

interface IHomeProps extends Record<string,unknown>{
  menu: IMenuModel[],
  firstCategory: ETopLevelCategory
  
}

