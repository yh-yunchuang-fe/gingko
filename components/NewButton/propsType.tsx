import React from 'react'

interface IconProps {
    name: string,
    color?: string,
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | number
    style?: any
}

export default interface IbuttonProps {
    type?: 'default' | 'primary' | 'second'
    size?: 'default' | 'large' | 'small'
    style?: React.CSSProperties
    textStyle?: React.CSSProperties
    // second?: boolean
    disabled?: boolean
    primary?: boolean
    default?: boolean
    link?: boolean
    activeStyle?: object
    onClick?: (x?: any) => void
    loading?: boolean
    onPressIn?: (x?: any) => void
    onPressOut?: (x?: any) => void
    onShowUnderlay?: (x?: any) => void
    onHideUnderlay?: (x?: any) => void
    children: any

    icon?: string | IconProps,
    iconStyle?: React.CSSProperties
}
