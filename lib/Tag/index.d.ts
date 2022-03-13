/**
 * @author zhangyi
 * @date 2018/3/9
 */
import React from 'react';
import TagProps from './propsType';
export default class Tag extends React.Component<TagProps, any> {
    static defaultProps: {
        readonly: boolean;
        fill: boolean;
        color: any;
        textColor: string;
        activeColor: any;
        style: null;
        size: string;
        selected: boolean;
    };
    constructor(props: TagProps);
    componentWillReceiveProps(nextProps: any): void;
    onClick: () => void;
    render(): JSX.Element;
}
