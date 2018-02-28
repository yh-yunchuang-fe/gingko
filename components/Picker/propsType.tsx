/**
 * Created by beilunyang on 2018/2/11
 */
import React from 'react';

export interface IPickerProps {
    data?: string[];
    dismissText?: string;
    okText?: string;
    onChange?: (value?: any) => any;
    onDismiss?: (value?: any) => any;
    onOk?: (value?: any) => any;
    title?: string;
    children?: React.ReactNode;
    headerStyle?: {};
    visible?: boolean;
};