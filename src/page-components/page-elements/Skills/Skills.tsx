
import { EHtags } from '@/components/Htag/Htag.props'
import { ETagAppearance, ETagSize } from '@/components/Tag/Tag.props'
import React from 'react'
import { ISkillProps } from './Skills.props'
import classes from './Skills.module.scss'
import { Htag, Tag } from '@/components'

export  const Skills = ({skills}:ISkillProps) => {
  return (
  <div className={classes.wrapper}>
      <Htag tag={EHtags.MEDIUM}>Получаемые навыки</Htag>


      <div className={classes.tags}>
          {skills.map((skill:string)=>
            <Tag key={skill} appearance={ETagAppearance.GHOST}>{skill}</Tag>
          )} 
      </div>
  </div>)
}

