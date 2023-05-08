import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface ITag extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    appearance?:ETagAppearance,
    children: ReactNode,
    size? : ETagSize 
    href?:string
   
}


export  enum ETagAppearance {
    GHOST = "ghost",
    RED = "red",
    GREEN = "green",
    WHITE = "white"
}

export enum ETagSize {
    MEDIUM = "medium",
    SMALL = "small",
    LARGE = "large",
}

