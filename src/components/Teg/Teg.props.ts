import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface ITeg extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    appearance?:ETegAppearance,
    children: ReactNode,
    size? : ETegSize 
    href?:string
   
}


export  enum ETegAppearance {
    GHOST = "ghost",
    RED = "red",
    GREEN = "green",
    WHITE = "white"
}

export enum ETegSize {
    MEDIUM = "medium",
    SMALL = "small",
}

