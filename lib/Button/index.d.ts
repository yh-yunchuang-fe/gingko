import React from 'react';
import ButtonProps from './propsType';
export default class Button extends React.Component<ButtonProps, any> {
    constructor(props: ButtonProps);
    static defaultProps: {
        size: string;
        type: string;
        disabled: boolean;
        style: {};
        textStyle: {};
        loading: boolean;
        activeStyle: {};
        onClick: (_x?: any) => void;
        onPressIn: (_x?: any) => void;
        onPressOut: (_x?: any) => void;
    };
    onPressIn: (...args: any[]) => void;
    onPressOut: (...args: any[]) => void;
    onShowUnderlay: (...arg: any[]) => void;
    onHideUnderlay: (...arg: any[]) => void;
    render(): JSX.Element;
}
