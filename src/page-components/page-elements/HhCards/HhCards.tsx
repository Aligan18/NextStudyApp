import React, { ForwardedRef, forwardRef } from 'react'
import classes from "./HhCards.module.scss"
import cn from 'classnames'
import { IHhCards } from './HhCards.props'
import { ETextBoxSize } from '@/components/TextBox/TextBox.props'
import { EHtags } from '@/components/Htag/Htag.props'
import { ETagAppearance } from '@/components/Tag/Tag.props'
import { TextBox, Tag, Htag } from '@/components'
import { FieldRefs } from 'react-hook-form'


export const HhCards = forwardRef(({count,juniorSalary,middleSalary, seniorSalary, title, }:IHhCards , ref:ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className={classes.wrapper}>

      <div className={classes.title}>
          <TextBox size={ETextBoxSize.LARGE}>Вакансии - {title}</TextBox>
          <Tag appearance={ETagAppearance.RED}>hh.ru</Tag>
      </div>


      <div className={cn (classes.count, classes.card)}>
          <Htag tag={EHtags.SMALL}>Всего вакансий</Htag>
          <Htag className={classes.primary} tag={EHtags.LARGE}>{count}</Htag>
      </div>


      <div className={cn (classes.vacancy, classes.card)}>
          <div className={cn(classes.vacancy_item, classes.junior) }>
            <TextBox>JUNIOR</TextBox>
            <Htag tag={EHtags.LARGE}>{juniorSalary}</Htag>
          </div>

          <div className={cn(classes.vacancy_item, classes.middle)}>
            <TextBox>MIDDLE</TextBox>
            <Htag tag={EHtags.LARGE}>{middleSalary}</Htag>
          </div>
                    
          <div className={cn(classes.vacancy_item, classes.senior)}>
            <TextBox>SENIOR</TextBox>
            <Htag tag={EHtags.LARGE}>{seniorSalary}</Htag>
          </div>
      </div>

    </div>
  )
})

