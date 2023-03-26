import { ReactNode } from "react";

export interface HtegProps{
    tag: EHtags
    children: ReactNode
}

export enum EHtags {
    LARGE  ="h1",
    MEDIUM ="h2",
    SMALL ="h3"

}