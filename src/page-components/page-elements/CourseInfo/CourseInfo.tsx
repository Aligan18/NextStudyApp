import Button from '@/components/Button/Button'
import { EButtonType } from '@/components/Button/Button.props'
import Htag from '@/components/Htag/Htag'
import { EHtags } from '@/components/Htag/Htag.props'
import StarGroup from '@/components/StarGroup/StarGroup'
import Teg from '@/components/Teg/Teg'
import { ETegAppearance, ETegSize } from '@/components/Teg/Teg.props'
import TextBox from '@/components/TextBox/TextBox'
import { ETextBoxSize } from '@/components/TextBox/TextBox.props'
import React, { useState } from 'react'
import classes from './CourseInfo.module.scss'
import { ICourseInfoProps } from './CourseInfo.props'
import cn from "classnames"

const CourseInfo = ({productInfo}:ICourseInfoProps) => {

  const [rating, setRating] =useState(productInfo.initialRating)
  const [isOpen , setIsOpen] = useState(false)
  const changeIsOpen=() =>{
      setIsOpen(!isOpen)
  }

  return (
    <div className={classes.wrapper}>


      <div onClick={changeIsOpen} className={classes.title}>
          <img alt={productInfo.title} src={ process.env.NEXT_PUBLIC_DOMAIN+ productInfo.image}/>
          <div>
              <Htag tag={EHtags.MEDIUM}>{productInfo.title}</Htag>
              <div className={classes.tags}>
                {productInfo.categories.map(category=>
                    <Teg size={ETegSize.SMALL}>{category}</Teg>
                )}
              </div>
          </div>
          <Htag tag={EHtags.MEDIUM} > {productInfo.price}</Htag>
          <StarGroup rating={rating} setRating={setRating}></StarGroup>
      </div>


      <div className={cn( {[classes.info_list] : isOpen,
                           [classes.isClose] : isOpen === false})}>
        <div className={classes.about}>
          <TextBox>{productInfo.description}</TextBox>
        </div>


        <div className={classes.character_wrapper}>
          {productInfo.characteristics.map(characteristic=>
            <div className={classes.characteristic}>
              <Htag className={classes.character_items} tag={EHtags.SMALL}>{characteristic.name}</Htag>
              <TextBox className={classes.character_items} >{characteristic.value}</TextBox>
            </div>
          )}
        </div>


        <div className={classes.advantages}>
            <Htag className={classes.character_items} tag={EHtags.SMALL}>Преимущество</Htag>
            <TextBox size={ETextBoxSize.SMALL} > {productInfo.advantages}</TextBox>
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