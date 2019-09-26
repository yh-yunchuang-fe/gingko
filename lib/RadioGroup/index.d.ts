/**
 * @author zhangyi
 * @date 2018/3/20
 */
/**
 * TODO 后续需添加对mode = 'radio'的支持
 */
import React from 'react';
import RadioGroupProps from './propsType';
export default class RadioGroup extends React.Component<RadioGroupProps, any> {
    static defaultProps: {
        mode: string;
        defaultIndex: number;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    onChange: (index: any, item: any) => void;
    render(): JSX.Element;
}
