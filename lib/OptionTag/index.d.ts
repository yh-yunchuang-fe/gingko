/**
 * @author zhangyi
 * @date 2018/4/20
 */
import React from 'react';
import OptionTagProps from './propsType';
export default class OptionTag extends React.Component<OptionTagProps, any> {
    static defaultProps: {
        disabled: boolean;
        multiple: boolean;
        selected: boolean;
        width: number;
        height: number;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    onChange: () => void;
    render(): JSX.Element;
}
