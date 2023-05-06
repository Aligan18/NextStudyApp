import React from 'react'
import { EButtonType } from '../Button/Button.props'
import { Button, InputElement, StarGroup, TextBox, TextInput } from '../index'
import classes from './CommentForm.module.scss'




export const CommentForm = () => {
  return (
    <div className={classes.wrapper}>
      <InputElement className={classes.name} value='' setValue={()=>{}}>
        Имя
      </InputElement>

      <InputElement  className={classes.title} value='' setValue={()=>{}}>
        Заголовoк отзыва
      </InputElement>

      <div className={classes.rating}>
        <TextBox>Оценка:</TextBox>
        <StarGroup rating={5} setRating={()=>{}}/>
      </div>

     <TextInput className={classes.comment}>
        Комментарий 
      </TextInput>
      
     <Button className={classes.button} appearance={EButtonType.PRIMARY}>
        Отправить
      </Button>

    </div>
  )
}
