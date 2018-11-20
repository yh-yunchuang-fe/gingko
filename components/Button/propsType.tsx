import React from 'react';

interface IconProps {
    name: string,
    color?: string,
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | number;
    style?: any;
}

export default interface buttonProps {
    type?: 'default' | 'primary' | 'warning' | 'ghost';
    size?: 'default' | 'large' | 'small';
    style?: React.CSSProperties;
    textStyle?: React.CSSProperties;
    disabled?: boolean;
    activeStyle?: Object;
    onClick?: (x?: any) => void;
    loading?: boolean;
    onPressIn?: (x?: any) => void;
    onPressOut?: (x?: any) => void;
    onShowUnderlay?: (x?: any) => void;
    onHideUnderlay?: (x?: any) => void;

    icon?: string | IconProps,
    iconStyle?: React.CSSProperties
}
