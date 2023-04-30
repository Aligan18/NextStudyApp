import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface HtegProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    tag: EHtags
    children: ReactNode
}

export enum EHtags {
    LARGE  ="h1",
    MEDIUM ="h2",
    SMALL ="h3"

}