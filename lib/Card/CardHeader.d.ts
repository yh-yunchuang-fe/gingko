import React from 'react';
import { CardHeaderProps } from './propsType';
export default class CardHeader extends React.Component<CardHeaderProps, any> {
    static defaultProps: {
        style: {};
    };
    render(): JSX.Element;
}
