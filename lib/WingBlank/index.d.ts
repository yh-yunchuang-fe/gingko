import React from 'react';
export interface WingBlankProps {
    size?: 'sm' | 'md' | 'lg';
    style?: any;
}
export default class WingBlank extends React.Component<WingBlankProps, any> {
    static defaultProps: {
        size: string;
        style: {};
    };
    render(): JSX.Element;
}
