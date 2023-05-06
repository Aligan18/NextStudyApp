import { DetailedHTMLProps, InputHTMLAttributes } from "react";


export interface IInputElement extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    value: string;
    handleKeyDown?: (event:React.KeyboardEvent<HTMLInputElement>) => void;
    setValue:(value:string)=> void;
    children: string;

}