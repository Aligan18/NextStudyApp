import React from "react";
import Image from "next/image";
import cn from "classnames";
import classes from "./CourseInfo.module.scss";
import { motion } from "framer-motion";

import { EButtonType } from "@/components/Button/Button.props";
import { EHtags } from "@/components/Htag/Htag.props";
import { ETagSize } from "@/components/Tag/Tag.props";
import { ETextBoxSize } from "@/components/TextBox/TextBox.props";
import { ICourseInfoProps } from "./CourseInfo.props";
import { Htag, StarGroup, TextBox, Button, Tag } from "@/components";
import { VarAboutInfo } from "./CoutseInfo.animate";
import ImageWrapper from "@/components/ImageWrapper/ImageWrapper";

export const CourseInfo = ({
  isOpen,
  setIsOpen,
  advantages,
  categories,
  characteristics,
  description,
  image,
  price,
  title,
  initialRating,
  isOpenComments,
  setIsOpenComments,
}: ICourseInfoProps) => {
  return (
    <div className={classes.wrapper}>
      <div onClick={() => setIsOpen(!isOpen)} className={classes.title}>
        <ImageWrapper image={image} title={title} />
        <div className={classes.product_wrapper}>
          <Htag tag={EHtags.MEDIUM}>{title}</Htag>
          <div>
            {categories.map((category) => (
              <Tag key={category} size={ETagSize.SMALL}>
                {category}
              </Tag>
            ))}
          </div>
        </div>
        <Htag tag={EHtags.MEDIUM}>{price}</Htag>
        <StarGroup changeable={false} rating={initialRating} />
      </div>

      <motion.div
        variants={VarAboutInfo}
        initial={isOpen ? "visible" : "hidden"}
        animate={isOpen ? "visible" : "hidden"}
        className={cn(classes.info_list)}
      >
        <div className={classes.about}>
          <TextBox>{description}</TextBox>
        </div>

        <div className={classes.character_wrapper}>
          {characteristics.map((characteristic) => (
            <div key={characteristic.name} className={classes.characteristic}>
              <Htag className={classes.character_items} tag={EHtags.SMALL}>
                {characteristic.name}
              </Htag>
              <TextBox className={classes.character_items}>
                {characteristic.value}
              </TextBox>
            </div>
          ))}
        </div>

        <div className={classes.advantages}>
          <Htag className={classes.character_items} tag={EHtags.SMALL}>
            Преимущества
          </Htag>
          <TextBox size={ETextBoxSize.SMALL}> {advantages}</TextBox>
        </div>

        <div className={classes.buttons}>
          <Button
            className={classes.button_space}
            appearance={EButtonType.PRIMARY}
          >
            Узнать подробнее
          </Button>
          {isOpenComments !== undefined && setIsOpenComments && (
            <Button
              onClick={() => setIsOpenComments(!isOpenComments)}
              className={classes.button_space}
              appearance={EButtonType.GHOST}
            >
              Читать отзывы
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  );
};
