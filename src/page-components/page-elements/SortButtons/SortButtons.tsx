/* eslint-disable no-case-declarations */
import React, { useEffect, useState } from 'react'
import classes from './SortButtons.module.scss'

import { Button } from '@/components'
import { EButtonType } from '@/components/Button/Button.props'
import { ESortButtonType, ISortButton } from './SortButtons.props'


export const SortButtons = ({sortedProducts , setSortedProducts ,  product }:ISortButton) => {

  const [selecte, setSelecte ] = useState<ESortButtonType>(ESortButtonType.NONE)
  
  useEffect(()=>{ 
    setSelecte(ESortButtonType.NONE)
    setSortedProducts(product)
  },[product])

  useEffect(()=>{
      switch (selecte) {
            case ESortButtonType.RATING:
                  const rating =sortedProducts.sort((a,b)=>b.initialRating - a.initialRating )
                  setSortedProducts([...rating])
                  break;
                  
            case ESortButtonType.PRICE:
                  const price =sortedProducts.sort((a,b)=>a.price - b.price)
                  setSortedProducts([...price])
                  break;
        }
  },[selecte])

  return (
    <div className={classes.wrapper}>
        <Button onClick={()=>setSelecte(ESortButtonType.RATING)} 
                appearance={selecte === ESortButtonType.RATING ? EButtonType.PRIMARY : EButtonType.GHOST}
                >
                По рейтингу 
        </Button>
        <Button onClick={()=>setSelecte(ESortButtonType.PRICE)} 
                appearance={selecte === ESortButtonType.PRICE ? EButtonType.PRIMARY : EButtonType.GHOST}
                >
                По цене
        </Button>
    </div>
  )
}

