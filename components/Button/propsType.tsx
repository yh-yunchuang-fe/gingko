import React from 'react';

export default interface buttonProps {
    type?: 'default' | 'primary' | 'warning' | 'ghost';
    size?: 'default' | 'large' | 'small';
    style?: React.CSSProperties;
    disabled?: boolean;
    activeStyle?: Object;
    onClick?: (x?: any) => void;
    loading?: boolean;
    onPressIn?: (x?: any) => void;
    onPressOut?: (x?: any) => void;
    onShowUnderlay?: (x?: any) => void;
    onHideUnderlay?: (x?: any) => void;
}
