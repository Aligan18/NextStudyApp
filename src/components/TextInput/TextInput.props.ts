import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";


export interface ITextInputProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLTextAreaElement>,HTMLTextAreaElement>{
    children: string
    error?:FieldError
}