import React from 'react'
import { IRequestStatusProps } from './RequestStatus.props'
import classes from './RequestStatus.module.scss'
import { Tag } from '../Tag/Tag'
import { ETagAppearance, ETagSize } from '../Tag/Tag.props'


export const RequestStatus = ({error, success}:IRequestStatusProps) => {
  return (
    <div className={classes.wrapper}>
        {error&& <Tag  size={ETagSize.LARGE} appearance={ETagAppearance.RED} className={classes.error}>Сервер не отвечает !!!</Tag>}

        {success&& <Tag size={ETagSize.LARGE} appearance={ETagAppearance.GREEN} className={classes.success}>Запрос успешно отправлен</Tag>}
    </div>
  )
}
