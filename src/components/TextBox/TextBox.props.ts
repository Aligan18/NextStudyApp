import { DetailedHTMLProps,  HtmlHTMLAttributes, ReactNode } from "react";

export interface  ITextBoxProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement> {
    children: ReactNode,
    size? : ETextBoxSize
}

export enum ETextBoxSize{
    LARGE = "large",
    MEDIUM = "medium",
    SMALL = "small",
}