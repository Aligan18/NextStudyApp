import Button from '@/components/Button/Button'
import { EButtonType } from '@/components/Button/Button.props'

import React, { useEffect, useState } from 'react'
import { ESortButtonType, ISortButton } from './SortButtoms.props'


const SortButtons = ({sortedProducts , setSortedProducts , page, product }:ISortButton) => {

  const [selecte, setSelecte ] = useState<ESortButtonType>(ESortButtonType.NONE)
  
  useEffect(()=>{ 
    setSelecte(ESortButtonType.NONE)
    setSortedProducts(product)
  },[page.alias])

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
    <div>
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

export default SortButtons