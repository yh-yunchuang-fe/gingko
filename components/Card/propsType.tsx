import React from 'react'

export interface CardProps {
    full?: boolean;
    style?: any;
    children?: any;
}

export interface CardHeaderProps {
    children?: any;
    // extra?: any;
    style?: any;
}

export interface CardBodyProps {
    children?: any;
    style?: any;
}

export interface CardFooterProps {
    children?: any;
    style?: any;
}