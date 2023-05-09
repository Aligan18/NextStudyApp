import { CourseInfo, Сomments } from '@/page-components/page-elements'
import React, { forwardRef,ForwardedRef, useState } from 'react'
import { ICourseInfoAndCommentsProps } from './CourseInfoAndComments.props'
import { motion } from 'framer-motion'


export const CourseInfoAndComments = motion(forwardRef(({product}:ICourseInfoAndCommentsProps, ref:ForwardedRef<HTMLDivElement>) => {
    const [isOpenCourse , setIsOpenCourse] = useState(false)
    const [isOpenComments , setIsOpenComments] = useState(false)
  return (
   
    <div ref={ref}>
        <CourseInfo isOpenComments= {isOpenComments}
                    setIsOpenComments={setIsOpenComments}
                    isOpen={isOpenCourse}
                    setIsOpen={setIsOpenCourse}
                    key={product._id} 
                    advantages ={product.advantages}
                    categories={product.categories}
                    characteristics={product.characteristics}
                    description={product.description}
                    image={product.image}
                    initialRating={product.initialRating}
                    price ={product.price}
                    title= {product.title}                                        
        />            
       {isOpenCourse && isOpenComments && <Сomments productId={product._id}/>     }                
    </div>
)}))
