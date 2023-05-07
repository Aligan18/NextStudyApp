import React from 'react'
import { useForm ,  Controller} from 'react-hook-form'
import { EButtonType } from '../Button/Button.props'
import { Button, InputElement, StarGroup, TextBox, TextInput } from '../index'
import classes from './CommentForm.module.scss'
import { IFormInputs } from './CommentForm.props'




export const CommentForm = () => {

  const {register,handleSubmit, control, formState: { errors } } = useForm<IFormInputs>( )


  const onSubmit  =(data:IFormInputs)=>{ console.log(data)}

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.wrapper}>
      <InputElement className={classes.name}  
                    error={errors.name}
                    {...register("name",{required :{value:true, message:"Заполните имя"}})}
      >
        Имя
      </InputElement>

      <InputElement className={classes.title}  
                    error={errors.title}
                    {...register("title",{required :{ value:true, 
                                                      message:"Заполните заголовок отзыва"
                                                    }})
                    }
      >
        Заголовoк отзыва
      </InputElement>
    
      <div className={classes.rating}>
        <TextBox>Оценка:</TextBox>
        <Controller name='rating'
                    control={control} 
                    render ={({field }) =>
                    (<StarGroup ref={field.ref} rating={field.value} setRating={field.onChange} />)}
         />
      </div>

     <TextInput  error={errors.description}
                className={classes.comment} 
                {...register("description",{required :{value:true, message:"Напишите комментарий"}})}
      >
        Комментарий 
      </TextInput>
    
      <Button  className={classes.button} appearance={EButtonType.PRIMARY}>
        Отправить
      </Button> 
       
     
    </form>

  )
}
