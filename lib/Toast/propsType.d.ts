/**
 * Created by beilunyang on 2018/3/27
 */
import React from 'react';
import { ViewStyle } from 'react-native';
export interface IBaseToastOptions {
    duration?: number;
    position?: 'center' | 'top' | 'bottom';
    onClose?: () => void;
    style?: ViewStyle;
    mask?: boolean;
}
export interface IShowToastOptions extends IBaseToastOptions {
    type?: 'success' | 'fail' | 'warn' | 'loading';
    icon?: React.ReactElement<any> | (() => void) | null;
}
export interface IPropsType extends IShowToastOptions {
    content: string | React.ReactElement<any>;
    animationEnd?: () => void;
}
