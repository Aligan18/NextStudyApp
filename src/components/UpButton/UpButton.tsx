import React, { useEffect } from 'react'
import classes from './UpButton.module.scss'
import {motion,  useAnimation} from 'framer-motion'
import { useGetYCoordinate } from '@/hooks/useGetCoordinate'
import { ButtonIcon } from '../ButtonIcon/ButtonIcon'

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
    <motion.div animate={controls}  initial={{opacity:0}} >
        <ButtonIcon onClick={handleClick}  
                    className={classes.buttonUp} 
                    appearance={'primary'} 
                    icon={'arrow'}   />
    </motion.div>
  )
}
