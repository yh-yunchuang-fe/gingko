/**
 * Created by beilunyang on 2018/3/7
 */
import React from 'react';
import {
    ViewStyle,
} from 'react-native';

export interface IBadge {
    // size?: 'large' | 'small';
    text?: string;
    children?: any;
    bgColor?: string;
    color?: string;
    style?: ViewStyle;
    // textStyle?: TextStyle;
    overflowCount?: number;
    dot?: boolean;
    cornerContent?: React.ReactNode;

    // corner?: 'leftTop' | 'rightTop' | 'leftBottom' | 'rightBottom' | '';
    // cornerContent?: React.ReactNode;
}