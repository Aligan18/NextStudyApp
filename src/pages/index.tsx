import Button from '@/components/Button/Button'
import { EArrowType, EButtonType } from '@/components/Button/Button.props'
import Htag from '@/components/Htag/Htag'
import { EHtags } from '@/components/Htag/Htag.props'
import TextBox from '@/components/TextBox/TextBox'
import { ETextBoxSize } from '@/components/TextBox/TextBox.props'
import classes from './index.module.scss'
import React, { useState } from 'react'
import Teg from '@/components/Teg/Teg'
import { ETegAppearance, ETegSize } from '@/components/Teg/Teg.props'
import StarIcon from '@/components/StarGroup/StarIcon/StarIcon'
import StarGroup from '@/components/StarGroup/StarGroup'
import Layout from '@/layout/Layout'
import { withLayout } from '@/hoc/withLayout'

const Home = () => {
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
      <Teg appearance={ETegAppearance.GHOST}>Hello</Teg>
      <Teg size={ETegSize.SMALL} appearance={ETegAppearance.GREEN}>Hello</Teg>
      <Teg appearance={ETegAppearance.RED}>Hello</Teg>
      <Teg href={"https://www.figma.com/file/eHIyKZXUUtMf1BQiuv6tTA/Курс-2---NextJS?node-id=0-1&t=3RAfZ5NVmaCTfVue-0"} size={ETegSize.SMALL} appearance={ETegAppearance.WHITE}> Figma </Teg>
      <StarGroup rating={rating} setRating={setRating}  />
    </>
  )
}

export default withLayout( Home) 