import Htag from '@/components/Htag/Htag'
import { EHtags } from '@/components/Htag/Htag.props'
import Teg from '@/components/Teg/Teg'
import { ETegAppearance } from '@/components/Teg/Teg.props'
import React from 'react'
import classes from "./HhCards.module.scss"
import cn from 'classnames'
import { IHhCards } from './HhCards.props'
import TextBox from '@/components/TextBox/TextBox'

const HhCards = ({count,juniorSalary,middleSalary, seniorSalary, title, }:IHhCards) => {
  return (
    <div className={classes.wrapper}>

      <div className={classes.title}>
          <TextBox >Вакансии - {title}</TextBox>
          <Teg appearance={ETegAppearance.RED}>hh.ru</Teg>
      </div>


      <div className={cn (classes.count, classes.card)}>
          <Htag tag={EHtags.SMALL}>Всего вакансий</Htag>
          <Htag className={classes.primary} tag={EHtags.LARGE}>{count}</Htag>
      </div>


      <div className={cn (classes.vacancy, classes.card)}>
          <div className={classes.vacancy_item }>
            <TextBox>JUNIOR</TextBox>
            <Htag tag={EHtags.LARGE}>{juniorSalary}</Htag>
          </div>

          <div className={classes.vacancy_item}>
            <TextBox>MIDDLE</TextBox>
            <Htag tag={EHtags.LARGE}>{middleSalary}</Htag>
          </div>
          
          <div className={classes.vacancy_item}>
            <TextBox>SENIOR</TextBox>
            <Htag tag={EHtags.LARGE}>{seniorSalary}</Htag>
          </div>
      </div>

    </div>
  )
}

export default HhCards