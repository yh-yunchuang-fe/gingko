/**
 * @author zhangyi
 * @date 2018/3/24
 */
import React from 'react';
import InputNumberProps from './propsType';
export default class InputNumber extends React.Component<InputNumberProps, any> {
    static defaultProps: {
        value: number;
        max: number;
        min: number;
        unit: string;
        step: number;
        size: string;
        disabled: boolean;
        editable: boolean;
        autoFocus: boolean;
        width: number;
    };
    isControlledComponent: boolean;
    state: {
        modified: boolean;
        value: number | undefined;
    };
    componentWillReceiveProps(nextProps: any): void;
    onChange: (num: any) => void;
    onBlur: () => void;
    onFocus: () => void;
    add: (arg1: any, arg2: any) => number;
    sub: (arg1: any, arg2: any) => string;
    minus: (value: any, step: any) => void;
    plus: (value: any, step: any) => void;
    render(): JSX.Element;
}
