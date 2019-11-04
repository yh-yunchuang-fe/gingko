import React from 'react';
export interface WhiteSpaceProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    style?: any;
}
export default class WhiteSpace extends React.Component<WhiteSpaceProps, any> {
    static defaultProps: {
        size: string;
    };
    render(): JSX.Element;
}
