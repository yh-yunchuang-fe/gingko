import * as React from 'react';
export interface IconProps {
    name: string;
    color?: string;
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | number;
    style?: any;
}
export default class Icon extends React.Component<IconProps, any> {
    static defaultProps: {
        size: number;
        color: string;
    };
    render(): JSX.Element;
}
