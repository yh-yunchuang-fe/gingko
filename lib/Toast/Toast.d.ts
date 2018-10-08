/**
 * Created by beilunyang on 2018/3/27
 */
import React from 'react';
import { Animated } from 'react-native';
import { IPropsType } from './propsType';
export default class Toast extends React.Component<IPropsType, any> {
    static defaultProps: {
        duration: number;
        animationEnd: () => void;
        onClose: () => void;
        position: string;
        mask: boolean;
        style: {};
    };
    state: {
        fadeAnim: Animated.Value;
    };
    anim: any;
    ownIcon: boolean;
    componentDidMount(): void;
    componentWillUnmount(): void;
    renderIcon(): JSX.Element | null;
    renderContent(): JSX.Element | null;
    render(): JSX.Element;
}
