import { API } from "@/helpers/api";
import axios from "axios";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { EButtonType } from "../Button/Button.props";
import { Button, InputElement, StarGroup, TextBox, TextInput } from "../index";
import { RequestStatus } from "../RequestStatus/RequestStatus";
import classes from "./CommentForm.module.scss";
import { ICommentsForm, IFormInputs } from "./CommentForm.props";

export const CommentForm = ({ productId }: ICommentsForm) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>();
  const [successSend, setSuccsesSend] = useState<boolean>(false);
  const [errorSend, setErrorSend] = useState(false);

  const onSubmit = async (formData: IFormInputs) => {
    console.log(formData);
    try {
      const { data } = await axios.post(API.review.createDemo, {
        ...formData,
        productId,
      });
      setSuccsesSend(true);
    } catch (error) {
      setErrorSend(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.wrapper}>
        <InputElement
          className={classes.name}
          error={errors.name}
          {...register("name", {
            required: { value: true, message: "Заполните имя" },
          })}
        >
          Имя
        </InputElement>

        <InputElement
          className={classes.title}
          error={errors.title}
          {...register("title", {
            required: { value: true, message: "Заполните заголовок отзыва" },
          })}
        >
          Заголовoк отзыва
        </InputElement>

        <div className={classes.rating}>
          <TextBox>Оценка:</TextBox>
          <Controller
            name="rating"
            rules={{ required: { value: true, message: "Укажите рейтинг" } }}
            control={control}
            render={({ field }) => (
              <StarGroup
                error={errors.rating}
                changeable={true}
                ref={field.ref}
                rating={field.value}
                setRating={field.onChange}
              />
            )}
          />
        </div>

        <TextInput
          error={errors.description}
          className={classes.comment}
          {...register("description", {
            required: { value: true, message: "Напишите комментарий" },
          })}
        >
          Комментарий
        </TextInput>
        <div className={classes.button}>
          <Button appearance={EButtonType.PRIMARY}>Отправить</Button>
          {errorSend && <RequestStatus error={errorSend} />}
          {successSend && <RequestStatus success={successSend} />}
        </div>
      </form>
    </>
  );
};
