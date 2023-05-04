import React, { useEffect, useState } from 'react'
import classes from './TopPageComponent.module.scss'

import { ITopPageComponentProps } from './TopPageComponent.props'
import {Htag} from '@/components'
import { EHtags } from '@/components/Htag/Htag.props'
import {Tag} from '@/components'
import { ETagAppearance } from '@/components/Tag/Tag.props'
import { IProductModel } from '@/interfaces/product.interface'
import { SortButtons, CourseInfo, Сomments, HhCards, Advantages, Skills, SeoText } from '../page-elements'



export const TopPageComponent = ({firstCategory,page,product}:ITopPageComponentProps ) => {
      const [sortedProducts , setSortedProducts] = useState<IProductModel[]>(product)

  return (<div>
            <div className={classes.header_wrapper}>
                  <Htag  tag={EHtags.LARGE}>{page.title}</Htag> 
                  <Tag appearance={ETagAppearance.GHOST}>
                        {product && product.length}
                  </Tag>
                  <SortButtons sortedProducts={sortedProducts} 
                               setSortedProducts={setSortedProducts} 
                               page = {page}
                               product = {product}
                               />
            </div>


            {sortedProducts && sortedProducts.map(p=>
                        <CourseInfo key={p._id} 
                                    advantages ={p.advantages}
                                    categories={p.categories}
                                    characteristics={p.characteristics}
                                    description={p.description}
                                    image={p.image}
                                    initialRating={p.initialRating}
                                    price ={p.price}
                                    title= {p.title}                                        
                        />                                 
                          
            )}
            <Сomments/>

            <HhCards count={page.hh.count}
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
