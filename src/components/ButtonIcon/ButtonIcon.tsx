
import React  from 'react'
import { IButton , buttonIconsTyps,} from './ButtonIcon.props'
import classes from './ButtonIcon.module.scss'
import cn from 'classnames'


export const ButtonIcon = ({appearance, icon, className, ...props}:IButton) => {
  return (
    <button className={cn(classes.button , className,{
                        [classes.primary]: appearance == 'primary',
                        [classes.ghost] : appearance == 'ghost' ,
                       
                    })}
                    {...props}
    >
        {<i className={buttonIconsTyps[icon]}></i>}
    </button>
  )
}

