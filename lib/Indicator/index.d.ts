import React from 'react';
import IndicatorProps from './propsType';
export default class Indicator extends React.Component<IndicatorProps, any> {
    static defaultProps: {
        size: string;
        color: string;
        style: {};
        textStyle: {};
    };
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    startAnimate(): void;
    render(): JSX.Element;
}
