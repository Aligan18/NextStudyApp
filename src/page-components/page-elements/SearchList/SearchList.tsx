import React from 'react'
import cn from "classnames"
import classes from './SearchList.module.scss'

import { EHtags } from '@/components/Htag/Htag.props'
import { ISearchListProps } from './SearchList.props'
import { Htag, TextBox,  } from '@/components'
import { useRouter } from 'next/router'


export  const SearchList = ({ description, title, alias  }:ISearchListProps) => {
  const router = useRouter()

  return (
    <div className={classes.wrapper}>
      <div onClick={()=>{router.push("/courses/"+ alias)}} className={classes.title}>
         
          <div className={classes.product_wrapper}>
              <Htag className={classes.primary} tag={EHtags.MEDIUM}>
                    {title}
              </Htag>   
          </div>
      </div>
      <div  className={cn( classes.info_list)}>
        <div className={classes.about}>
          <TextBox>{description}</TextBox>
        </div>
      </div>
    </div>
  )
}

