import React from 'react'
import { ETegAppearance, ETegSize, ITeg } from './Teg.props'
import classes from './Teg.module.scss'
import cn from 'classnames'


const Teg = ({children, appearance = ETegAppearance.WHITE ,className , href,  size = ETegSize.MEDIUM , ...props}:ITeg) => {
  return (
        <div className={cn( classes.teg , className,{
                            [classes.ghost] : appearance === ETegAppearance.GHOST,
                            [classes.green] : appearance === ETegAppearance.GREEN,
                            [classes.red] : appearance === ETegAppearance.RED,
                            [classes.white] : appearance === ETegAppearance.WHITE,
                            [classes.medium] : size === ETegSize.MEDIUM,
                            [classes.small] : size === ETegSize.SMALL,


        })}>
            {href? 
            <a href={href}>{children}</a>
            :
            <>{children}</>
            }   
            
        </div>
  )
}

export default Teg