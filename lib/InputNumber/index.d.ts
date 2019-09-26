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
    isControlledComponent: () => boolean;
    state: {
        modified: boolean;
        value: number;
    };
    componentWillReceiveProps(nextProps: any): void;
    onChange: (num: any) => void;
    onBlur: () => void;
    onFocus: () => void;
    /**
     ** 加法函数，用来得到精确的加法结果
     ** 说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
     ** 调用：accAdd(arg1,arg2)
     ** 返回值：arg1加上arg2的精确结果
     **/
    add: (arg1: any, arg2: any) => number;
    sub: (arg1: any, arg2: any) => string;
    minus: (value: any, step: any) => void;
    plus: (value: any, step: any) => void;
    render(): JSX.Element;
}
