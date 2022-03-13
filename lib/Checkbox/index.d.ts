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
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    handleClick: () => void;
    renderIcon(): JSX.Element | null;
    render(): JSX.Element;
}
