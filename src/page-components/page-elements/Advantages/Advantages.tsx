import Htag from '@/components/Htag/Htag'
import { EHtags } from '@/components/Htag/Htag.props'
import TextBox from '@/components/TextBox/TextBox'
import { ETextBoxSize } from '@/components/TextBox/TextBox.props'
import React from 'react'
import classes from './Advantages.module.scss'
import { IAdvantagesProps } from './Advantages.props'

const Advantages = ({advantages}:IAdvantagesProps) => {

  return (
    <div className={classes.wrapper}>
      <Htag tag={EHtags.MEDIUM}>Преймущества</Htag>


    {advantages.map(advantage => <div className={classes.wrapper_advantage} key={advantage._id}>
        <div className={classes.icon}><i className="fa-sharp fa-solid fa-circle-check"></i></div>
        <div className={classes.advantage}>
          <Htag tag={EHtags.SMALL}>{advantage.title}</Htag>
          <TextBox size={ETextBoxSize.SMALL}>{advantage.description}</TextBox>
        </div>
    </div>) }

    </div>
  )
}

export default Advantages