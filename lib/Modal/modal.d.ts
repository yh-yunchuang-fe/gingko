/**
 * @author zhangyi
 */
import React from 'react';
import { IModalProps } from './propsType';
export default class GkModal extends React.Component<IModalProps, any> {
    constructor(props: any);
    static defaultProps: {
        visible: boolean;
        animationType: string;
        animationDuration: number;
        animateAppear: boolean;
        transparent: boolean;
        maskClosable: boolean;
        onClose: () => void;
        onAnimationEnd: () => void;
        style: {};
        bodyStyle: {};
        title: string;
        footer: never[];
    };
    static alert: any;
    render(): JSX.Element;
}
