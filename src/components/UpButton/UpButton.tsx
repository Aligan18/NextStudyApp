import React, { useEffect } from 'react'
import classes from './UpButton.module.scss'
import {motion,  useAnimation} from 'framer-motion'
import { useGetYCoordinate } from '@/hooks/useGetCoordinate'

export const UpButton = () => {

    const y = useGetYCoordinate()
    const controls =useAnimation()

    useEffect(()=>{
        controls.start({opacity:y/ document.body.scrollHeight})
    },[y , controls])

    
    const handleClick =()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <motion.button animate={controls}  initial={{opacity:0}} onClick={handleClick} className={classes.button}>
        <i className="fa-solid fa-chevron-up"></i>
    </motion.button>
  )
}
