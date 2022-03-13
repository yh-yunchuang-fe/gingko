/**
 * Created by beilunyang on 2018/3/7
 */
import React from 'react';
import {
    ViewStyle, ImageURISource, View,
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
    image?: boolean;
    source: ImageURISource;
    cornerContent?: React.ReactNode;
    badgeStyle: ViewStyle,
    badgeTextStyle: ViewStyle,
    imageBadgeStyle: ViewStyle,
    top: number;
    right: number;

    // corner?: 'leftTop' | 'rightTop' | 'leftBottom' | 'rightBottom' | '';
    // cornerContent?: React.ReactNode;
}
