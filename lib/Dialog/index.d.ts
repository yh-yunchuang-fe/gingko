/**
 * @author zhangyi
 */
import React from 'react';
import IDialogProps from './propsType';
export default class Dialog extends React.Component<IDialogProps, any> {
    static defaultProps: {
        style: {};
        wrapStyle: {
            flex: number;
            backgroundColor: string;
            justifyContent: "center";
            alignItems: "center";
        };
        maskStyle: {
            backgroundColor: string;
        };
        animationType: string;
        animationDuration: number;
        animateAppear: boolean;
        visible: boolean;
        transparent: boolean;
        maskClosable: boolean;
        onClose: () => void;
        onAnimationEnd: () => void;
    };
    animMask: any;
    animDialog: any;
    constructor(props: IDialogProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
    componentDidUpdate(prevProps: any): void;
    getOpacity: (visible: boolean) => 1 | 0;
    getScale: (visible: boolean) => 1 | 1.05;
    getPosition: (visible: boolean) => number;
    onMaskClose: () => void;
    close: () => void;
    animateMask: (visible: any) => void;
    stopMaskAnim: () => void;
    stopDialogAnim: () => void;
    render(): JSX.Element | null;
    private animateDialog;
}
