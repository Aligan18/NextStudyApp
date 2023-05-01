import React from 'react'
import { ITopPageComponentProps } from './TopPageComponent.props'
import classes from './TopPageComponent.module.scss'
import Htag from '@/components/Htag/Htag'
import { EHtags } from '@/components/Htag/Htag.props'
import Teg from '@/components/Teg/Teg'
import CourseInfo from '../page-elements/CourseInfo/CourseInfo'
import HhCards from '../page-elements/HhCards/HhCards'
import Advantages from '../page-elements/Advantages/Advantages'
import Skills from '../page-elements/Skills/Skills'
import Сomments from '../page-elements/Сomments/Сomments'
import { ETegAppearance } from '@/components/Teg/Teg.props'


export const TopPageComponent = ({firstCategory,page,product}:ITopPageComponentProps ) => {
  return (<div>
            <div className={classes.header_wrapper}>
                  <Htag  tag={EHtags.LARGE}>{page.title}</Htag> 
                  <Teg appearance={ETegAppearance.GHOST}>{product && product.length}</Teg>
                  <div>Сортировка</div>
            </div>


            {product && product.map(p=>
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

            <HhCards count={page.hh.count}
                     juniorSalary ={page.hh.juniorSalary}
                     middleSalary={page.hh.middleSalary }
                     seniorSalary={page.hh.seniorSalary}
                     title={page.title}


            />
            <Сomments/>
            <Advantages/>
            <Skills/>
        </div>
  )
}
