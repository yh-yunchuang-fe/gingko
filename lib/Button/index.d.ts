import React from 'react';
import ButtonProps from './propsType';
export default class Button extends React.Component<ButtonProps, any> {
    static defaultProps: {
        size: string;
        type: string;
        disabled: boolean;
        style: {};
        textStyle: {};
        loading: boolean;
        activeStyle: {};
        onClick: (x?: any) => void;
        onPressIn: (x?: any) => void;
        onPressOut: (x?: any) => void;
        icon: {};
    };
    constructor(props: ButtonProps);
    onPressIn: (...args: any[]) => void;
    onPressOut: (...args: any[]) => void;
    onShowUnderlay: (...arg: any[]) => void;
    onHideUnderlay: (...arg: any[]) => void;
    render(): JSX.Element;
}
