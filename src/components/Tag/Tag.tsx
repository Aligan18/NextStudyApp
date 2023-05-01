import React from 'react'
import { ETagAppearance, ETagSize, ITag } from './Tag.props'
import classes from "./Tag.module.scss"
import cn from 'classnames'


const Tag = ({children, appearance = ETagAppearance.WHITE ,className , href,  size = ETagSize.MEDIUM , ...props}:ITag) => {
  return (
        <div className={cn( classes.teg , className,{
                            [classes.ghost] : appearance === ETagAppearance.GHOST,
                            [classes.green] : appearance === ETagAppearance.GREEN,
                            [classes.red] : appearance === ETagAppearance.RED,
                            [classes.white] : appearance === ETagAppearance.WHITE,
                            [classes.medium] : size === ETagSize.MEDIUM,
                            [classes.small] : size === ETagSize.SMALL,


        })}>
            {href? 
            <a href={href}>{children}</a>
            :
            <>{children}</>
            }   
            
        </div>
  )
}

export default Tag