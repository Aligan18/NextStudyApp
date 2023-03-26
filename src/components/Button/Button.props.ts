
import React, { ReactNode } from "react";

export interface IButton {
    children: ReactNode,
    type: EButtonType
}

export enum EButtonType {
    PRIMARY = "primary",
    GHOST = "ghost",

}