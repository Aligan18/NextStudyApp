import { CourseInfo, Сomments } from '@/page-components/page-elements'
import React, { useState } from 'react'
import { ICourseInfoAndCommentsProps } from './CourseInfoAndComments.props'


export const CourseInfoAndComments = ({product}:ICourseInfoAndCommentsProps) => {
    const [isOpenCourse , setIsOpenCourse] = useState(false)
    const [isOpenComments , setIsOpenComments] = useState(false)
  return (
   
    <>
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
       {isOpenCourse && isOpenComments && <Сomments/>     }                
    </>
)}
