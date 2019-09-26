/**
 * Created by beilunyang on 2018/3/14
 */
import * as React from 'react';
import { ICheckbox } from './propsType';
export default class Checkbox extends React.Component<ICheckbox, any> {
    static defaultProps: {
        icon: boolean;
        dir: string;
        defaultChecked: boolean;
        onChange(): void;
        style: {};
        textStyle: {};
        disabled: boolean;
    };
    componentWillReceiveProps(nextProps: any): void;
    constructor(props: any);
    handleClick: () => void;
    renderIcon(): JSX.Element;
    render(): JSX.Element;
}
