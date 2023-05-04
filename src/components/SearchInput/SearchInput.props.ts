import { DetailedHTMLProps, InputHTMLAttributes } from "react";


export interface ISearchProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,HTMLInputElement> {
    children:string

    
}