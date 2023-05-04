import React, { useState } from 'react'
import Image from 'next/image'
import cn from "classnames"
import classes from './CourseInfo.module.scss'

import { EButtonType } from '@/components/Button/Button.props'
import { EHtags } from '@/components/Htag/Htag.props'
import { ETagAppearance, ETagSize } from '@/components/Tag/Tag.props'
import { ETextBoxSize } from '@/components/TextBox/TextBox.props'
import { ICourseInfoProps } from './CourseInfo.props'
import { Htag, StarGroup, TextBox, Button, Tag } from '@/components'


export  const CourseInfo = ({advantages, categories, characteristics, description, image, price, title, initialRating}:ICourseInfoProps) => {

  const [rating, setRating] =useState(initialRating)
  const [isOpen , setIsOpen] = useState(false)
  const changeIsOpen=() =>{
      setIsOpen(!isOpen)
  }

  return (
    <div className={classes.wrapper}>


      <div onClick={changeIsOpen} className={classes.title}>
          <Image width={70} height={70} alt={title} src={ process.env.NEXT_PUBLIC_DOMAIN+ image}/>
          <div>
              <Htag tag={EHtags.MEDIUM}>{title}</Htag>
              <div className={classes.tags}>
                {categories.map(category=>
                    <Tag key={category} size={ETagSize.SMALL}>{category}</Tag>
                )}
              </div>
          </div>
          <Htag tag={EHtags.MEDIUM} > {price}</Htag>
          <StarGroup rating={rating} setRating={setRating}></StarGroup>
      </div>


      <div className={cn( {[classes.info_list] : isOpen,
                           [classes.isClose] : isOpen === false})}>
        <div className={classes.about}>
          <TextBox>{description}</TextBox>
        </div>


        <div className={classes.character_wrapper}>
          {characteristics.map(characteristic=>
            <div key={characteristic.name} className={classes.characteristic}>
              <Htag className={classes.character_items} tag={EHtags.SMALL}>{characteristic.name}</Htag>
              <TextBox className={classes.character_items} >{characteristic.value}</TextBox>
            </div>
          )}
        </div>


        <div className={classes.advantages}>
            <Htag className={classes.character_items} tag={EHtags.SMALL}>Преимущество</Htag>
            <TextBox size={ETextBoxSize.SMALL} > {advantages}</TextBox>
        </div>

        
        <div className={classes.buttons}>
          <Button className={classes.button_space} appearance={EButtonType.PRIMARY}>Узнать подробнее</Button>
          <Button className={classes.button_space} appearance={EButtonType.GHOST}>Читать отзывы</Button>
        </div>
      </div>

    </div>
  )
}

