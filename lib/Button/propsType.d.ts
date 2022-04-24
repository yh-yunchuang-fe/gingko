import React from 'react';
interface IconProps {
    name: string;
    color?: string;
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | number;
    style?: any;
}
export default interface IButtonProps {
    type?: 'primary' | 'second' | 'disable';
    size?: 'md' | 'lg' | 'sm';
    solid?: boolean;
    line?: boolean;
    style?: any;
    textStyle?: any;
    link?: boolean;
    activeStyle?: object;
    onClick?: (x?: any) => void;
    loading?: boolean;
    onPressIn?: (x?: any) => void;
    onPressOut?: (x?: any) => void;
    onShowUnderlay?: (x?: any) => void;
    onHideUnderlay?: (x?: any) => void;
    children: any;
    icon?: string | IconProps;
    iconStyle?: React.CSSProperties;
}
export {};
