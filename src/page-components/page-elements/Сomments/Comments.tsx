import { CommentForm, Htag, StarGroup, TextBox } from '@/components'
import { EHtags } from '@/components/Htag/Htag.props'
import { ETextBoxSize } from '@/components/TextBox/TextBox.props'
import React from 'react'
import classes from "./Сomments.module.scss"

export const Сomments = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper_header}>
        <div className={classes.avatar}><i className="fa-solid fa-user-tie"></i></div>
        <Htag tag={EHtags.SMALL} className={classes.name}> Ganiyev Alisher </Htag>
        <div className={classes.date}>10 марта 2021</div>
        <div className={classes.rating}>
          <StarGroup   rating={4} setRating={()=>{}}  />
        </div>
       
      </div>
      <TextBox size={ETextBoxSize.SMALL}>Напишу сразу в двух курсах, так как проходил оба.
         Java будет многим непросвещённым сложновата в изучении,
          но здесь перевес из-за лидирующего положения языка как самого популярного в программировании.
           Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую большую зарплату.
            Хотя Python начинает догонять Java по многим моментам, но вот в крупном екоме разработке Джава все-таки 
            остается главенствующей сейчас. Скажу так – полнота программы и интенсивность присуща обоим курсам GeekBrains. 
            Хочу отметить, что с первого дня занятий вы приступаете к практике и получаете опыт коммерческой разработки уже
         в свое резюме. Скажу вам как прошедший это – реально помогло в трудоустройстве!
      </TextBox>
      <hr className={classes.hr}/>

      <CommentForm></CommentForm>

    </div>
  )
}

