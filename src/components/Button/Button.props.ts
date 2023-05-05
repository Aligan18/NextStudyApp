
import  { ButtonHTMLAttributes, DetailedHTMLProps,  ReactNode } from "react";

export interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: ReactNode,
    appearance: EButtonType,
    arrow? : EArrowType,
}

export enum EButtonType {
    PRIMARY = "primary",
    GHOST = "ghost",

}

export enum EArrowType {
     NONE = "none",
     RIGHT = "right",
     DOWN = "down",
}