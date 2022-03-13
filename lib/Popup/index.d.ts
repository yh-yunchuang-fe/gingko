/**
 * @author zhangyi
 * @date 2018/2/28
 */
import React from 'react';
import IPopupProps from './propsType';
export default class Popup extends React.Component<IPopupProps, any> {
    static defaultProps: {
        visible: boolean;
        animateAppear: boolean;
        animationDuration: number;
        maskClosable: boolean;
        onClose: () => void;
        onAnimationEnd: () => void;
        style: {};
    };
    render(): JSX.Element;
}
