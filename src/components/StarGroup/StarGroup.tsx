import React, { useEffect, useState } from 'react'
import { IStarGroupProps } from './StarGroup.props'
import {StarIcon} from '../index'
import classes from './StarGroup.module.scss'

export const StarGroup = ({quantity=5, rating, setRating }:IStarGroupProps) => {

  

  const [totalStars , setTotalStars] = useState( new Array(quantity).fill(<></>))

  useEffect(()=>{
    changeRating(rating)
   },[rating])

  const changeRating =(currentRating:number)=>{
     const updatedRating = totalStars.map((star,index)=>{
        return (<StarIcon 
                onMouseLeave={()=>changeRating(rating)} 
                  onMouseEnter={()=>changeRating(index+1)} 
                  onClick={()=>setRating(index+1)} 
                  key={index} 
                  filled={index < currentRating}/>
     )})
     
      setTotalStars(updatedRating)
  }


 
 
  
  return (<div className={classes.wrapper}>
     
       {totalStars.map((star, index:number) => <span key={index}>{star}</span> )}

  </div>
  )
}

