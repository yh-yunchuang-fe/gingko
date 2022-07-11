import { ReactNode } from 'react'

export interface CardProps {
    full?: boolean
    style?: any
    children?: any
}

export interface CardHeaderProps {
    children?: any
    style?: any
}

export interface CardBodyProps {
    children?: any
    style?: any
    line?: boolean
}

export interface CardFooterProps {
    children?: any
    style?: any
}
