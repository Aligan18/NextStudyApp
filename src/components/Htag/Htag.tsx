import React from 'react'
import { HtegProps, EHtags } from './Htag.props'
import classes from './Htag.module.scss'

const Htag = ({children,tag}:HtegProps) => {
    switch (tag){
        case EHtags.LARGE :
            return <h1 className={classes.large}>{children}</h1>

        case EHtags.MEDIUM :
            return <h2 className={classes.medium}>{children}</h2>

        case EHtags.SMALL :
            return <h3 className={classes.small}>{children}</h3>

        default: return <></>
    }
    
 
}

export default Htag