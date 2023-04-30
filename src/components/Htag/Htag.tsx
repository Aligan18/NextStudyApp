import React from 'react'
import { HtegProps, EHtags } from './Htag.props'
import classes from './Htag.module.scss'
import cn from 'classnames'


const Htag = ({children,tag,className, ...props}:HtegProps) => {
    switch (tag){
        case EHtags.LARGE :
            return <h1 className={cn(classes.large,className)} {...props}>{children}</h1>

        case EHtags.MEDIUM :
            return <h2 className={cn(classes.medium, className)} {...props}>{children}</h2>

        case EHtags.SMALL :
            return <h3 className={cn(classes.small,className)} {...props}>{children}</h3>

        default: return <></>
    }
    
 
}

export default Htag