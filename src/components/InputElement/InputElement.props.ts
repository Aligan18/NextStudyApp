import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";


export interface IInputElement extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    value?: string;
    handleKeyDown?: (event:React.KeyboardEvent<HTMLInputElement>) => void;
    setValue?:(value:string)=> void;
    children: string;
    error?:FieldError

}