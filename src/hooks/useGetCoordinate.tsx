import { useEffect, useState } from "react"




export const useGetYCoordinate =():number=>{
    const inBrawser = typeof window !== "undefined" 
    const [scroll, setScroll]= useState<number>(0)

    const handleScroll =()=>{
        const currentY = inBrawser? window.scrollY : 0
        setScroll(currentY)
    }    

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll, {passive:true})
        return ()=> window.removeEventListener('scroll',handleScroll)
    },[])

    return scroll
}