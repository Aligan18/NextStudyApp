import Button from '@/components/Button/Button'
import { EButtonType } from '@/components/Button/Button.props'

import React from 'react'
import { ESortButtonType, ISortButton } from './SortButtoms.props'


const SortButtons = ({selecte, setSelecte }:ISortButton) => {

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