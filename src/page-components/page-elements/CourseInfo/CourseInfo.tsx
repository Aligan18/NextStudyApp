import Button from '@/components/Button/Button'
import { EButtonType } from '@/components/Button/Button.props'
import Htag from '@/components/Htag/Htag'
import { EHtags } from '@/components/Htag/Htag.props'
import StarGroup from '@/components/StarGroup/StarGroup'
import Teg from '@/components/Tag/Tag'
import { ETagAppearance, ETagSize } from '@/components/Tag/Tag.props'
import TextBox from '@/components/TextBox/TextBox'
import { ETextBoxSize } from '@/components/TextBox/TextBox.props'
import React, { useState } from 'react'
import classes from './CourseInfo.module.scss'
import { ICourseInfoProps } from './CourseInfo.props'
import cn from "classnames"

const CourseInfo = ({advantages, categories, characteristics, description, image, price, title, initialRating}:ICourseInfoProps) => {

  const [rating, setRating] =useState(initialRating)
  const [isOpen , setIsOpen] = useState(false)
  const changeIsOpen=() =>{
      setIsOpen(!isOpen)
  }

  return (
    <div className={classes.wrapper}>


      <div onClick={changeIsOpen} className={classes.title}>
          <img alt={title} src={ process.env.NEXT_PUBLIC_DOMAIN+ image}/>
          <div>
              <Htag tag={EHtags.MEDIUM}>{title}</Htag>
              <div className={classes.tags}>
                {categories.map(category=>
                    <Teg size={ETagSize.SMALL}>{category}</Teg>
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
            <div className={classes.characteristic}>
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

export default CourseInfo