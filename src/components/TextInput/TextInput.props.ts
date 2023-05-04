import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";


export interface ITextInputProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLTextAreaElement>,HTMLTextAreaElement>{
    children: string

}