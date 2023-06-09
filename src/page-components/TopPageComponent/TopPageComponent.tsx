import React, { useRef, useState } from 'react'
import classes from './TopPageComponent.module.scss'

import { ITopPageComponentProps } from './TopPageComponent.props'
import {Htag} from '@/components'
import { EHtags } from '@/components/Htag/Htag.props'
import {Tag} from '@/components'
import { ETagAppearance } from '@/components/Tag/Tag.props'
import { IProductModel } from '@/interfaces/product.interface'
import { SortButtons,  HhCards, Advantages, Skills, SeoText } from '../page-elements'
import {CourseInfoAndComments} from  '../../widget/index'


export const TopPageComponent = ({page,product}:ITopPageComponentProps ) => {
      const [sortedProducts , setSortedProducts] = useState<IProductModel[]>(product)
      const titleRef = useRef<HTMLDivElement>(null)
      const goToHhCards=()=>{
            titleRef.current?.scrollIntoView({
                  behavior:'smooth',
                  block:'start',
                  

            })
      }

  return (<div>
            <div className={classes.header_wrapper}>
                  <Htag className={classes.title } onClick={goToHhCards}  tag={EHtags.LARGE}>{page.title}</Htag> 
                  <Tag appearance={ETagAppearance.GHOST}>
                        {product && product.length}
                  </Tag>
                  <SortButtons sortedProducts={sortedProducts} 
                               setSortedProducts={setSortedProducts} 
                               product = {product}
                               />
            </div>


            {sortedProducts && sortedProducts.map(product=>
                        <CourseInfoAndComments layout transition={{duration :0.5}} product={product} key={product._id} />
            )}
      

            <HhCards ref={titleRef}
                     count={page.hh.count}
                     juniorSalary ={page.hh.juniorSalary}
                     middleSalary={page.hh.middleSalary }
                     seniorSalary={page.hh.seniorSalary}
                     title={page.title}


            />
           
            <Advantages advantages={page.advantages}/>
            <Skills skills={page.tags}/>

            <SeoText seoText={page.seoText}></SeoText>
        </div>
  )
}
