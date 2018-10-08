import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import { CardProps } from './propsType';
export default class Card extends React.Component<CardProps, any> {
    static defaultProps: {
        full: boolean;
        style: {};
    };
    static Header: typeof CardHeader;
    static Body: typeof CardBody;
    static Footer: typeof CardFooter;
    render(): JSX.Element;
}
