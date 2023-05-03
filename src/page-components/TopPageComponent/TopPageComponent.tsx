import React, { useEffect, useState } from 'react'
import { ITopPageComponentProps } from './TopPageComponent.props'
import classes from './TopPageComponent.module.scss'
import Htag from '@/components/Htag/Htag'
import { EHtags } from '@/components/Htag/Htag.props'
import Teg from '@/components/Tag/Tag'
import CourseInfo from '../page-elements/CourseInfo/CourseInfo'
import HhCards from '../page-elements/HhCards/HhCards'
import Advantages from '../page-elements/Advantages/Advantages'
import Skills from '../page-elements/Skills/Skills'
import Сomments from '../page-elements/Сomments/Сomments'
import SeoText from '../page-elements/SeoText/SeoText'
import { ETagAppearance } from '@/components/Tag/Tag.props'
import SortButtons from '../page-elements/SortButtons/SortButtons'
import { ESortButtonType } from '../page-elements/SortButtons/SortButtoms.props'
import { IProductModel } from '@/interfaces/product.interface'


export const TopPageComponent = ({firstCategory,page,product}:ITopPageComponentProps ) => {
      const [sortedProducts , setSortedProducts] = useState<IProductModel[]>(product)

  return (<div>
            <div className={classes.header_wrapper}>
                  <Htag  tag={EHtags.LARGE}>{page.title}</Htag> 
                  <Teg appearance={ETagAppearance.GHOST}>{product && product.length}</Teg>
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
