
import  { ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    appearance: "primary"|"ghost",
    icon: IconTypes
}

export const buttonIconsTyps = {
    cross : "fa-solid fa-xmark",
    menu : "fa-solid fa-bars" ,
    arrow :"fa-solid fa-chevron-up",
    search : "fa-solid fa-magnifying-glass"
}

 type IconTypes = keyof typeof buttonIconsTyps


export enum EArrowType {
     NONE = "none",
     RIGHT = "right",
     DOWN = "down",
}

