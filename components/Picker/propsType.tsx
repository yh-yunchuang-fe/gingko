/**
 * Created by beilunyang on 2018/2/11
 */
import React from 'react';
import {
    ViewStyle,
    TextStyle,
} from 'react-native';

export interface IItemProps {
    label?: string | number;
    value: string | number;
}

export interface IPickerProps {
    data?: Array<IItemProps>[];
    value?: number|string[];
    defaultValue?: number | string[];
    dismissText?: string;
    okText?: string;
    onChange?: (values?: any, idx?: number) => any;
    onDismiss?: (value?: any) => any;
    onOk?: (value?: any) => any;
    title?: string;
    children?: React.ReactNode;
    style?: ViewStyle;
    visible?: boolean;
    selectedValue?: string;
    itemStyle?: TextStyle[] | TextStyle,
    columnStyle?: ViewStyle[] | ViewStyle,
};

export interface IAndroidPickerProps {
    selectedValue?: any;
    onValueChange?: (value: any) => void;
    style?: any;
    itemStyle?: any;
}