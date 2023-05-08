import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface  IStarGroupProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    quantity? : number;
    rating : number;
    setRating?: (rating: number) => void;
    changeable:boolean ;
    error?: FieldError
}