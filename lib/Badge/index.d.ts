/**
 * Created by beilunyang on 2018/3/7
 */
import * as React from 'react';
import { IBadge } from './propsType';
export default class Badge extends React.Component<IBadge, any> {
    static defaultProps: {
        text: string;
        style: {};
        dot: boolean;
        image: boolean;
        source: string;
        overflowCount: number;
        bgColor: any;
        color: any;
        cornerContent: any;
        badgeStyle: {};
        badgeTextStyle: {};
        imageBadgeStyle: {};
        top: number;
        right: number;
    };
    render(): JSX.Element;
}
