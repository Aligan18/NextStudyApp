import Button from '@/components/Button/Button'
import { EButtonType } from '@/components/Button/Button.props'
import Htag from '@/components/Htag/Htag'
import { EHtags } from '@/components/Htag/Htag.props'
import React from 'react'

const Home = () => {
  return (
    <>
    <Htag tag={EHtags.LARGE}> Hello World </Htag>
    <Htag tag={EHtags.MEDIUM}> Hello World </Htag>
    <Htag tag={EHtags.SMALL}> Hello World </Htag>
    <Button type={EButtonType.PRIMARY}> Hello World</Button>
    <Button type={EButtonType.GHOST}> Hello World</Button>
    </>
  )
}

export default Home  