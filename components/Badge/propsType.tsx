/**
 * Created by beilunyang on 2018/3/7
 */
import React from 'react';
import {
    ViewStyle,
} from 'react-native';

export interface IBadge {
    text?: any;
    children?: any;
    bgColor?: string;
    color?: string;
    style?: ViewStyle;
    overflowCount?: number;
    dot?: boolean;
    image?: boolean;
    source?: any;
    cornerContent?: React.ReactNode;
    badgeStyle?: ViewStyle,
    badgeTextStyle?: ViewStyle,
    imageBadgeStyle?: ViewStyle,
    top?: number;
    right?: number;
}
