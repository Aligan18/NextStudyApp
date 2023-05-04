import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface  IStarGroupProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    quantity? : number;
    rating : number;
    setRating: (rating: number) => void;
}