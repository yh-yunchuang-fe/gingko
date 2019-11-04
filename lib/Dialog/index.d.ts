/**
 * @author zhangyi
 */
import React from 'react';
import IDialogProps from './propsType';
export default class Dialog extends React.Component<IDialogProps, any> {
    constructor(props: IDialogProps);
    static defaultProps: {
        style: {};
        wrapStyle: import("react-native").RegisteredStyle<import("react-native").ViewStyle | import("react-native").TextStyle | import("react-native").ImageStyle>;
        maskStyle: import("react-native").RegisteredStyle<import("react-native").ViewStyle | import("react-native").TextStyle | import("react-native").ImageStyle>;
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
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
    componentDidUpdate(prevProps: any): void;
    getOpacity: (visible: any) => 1 | 0;
    getScale: (visible: any) => 1 | 1.05;
    getPosition: (visible: any) => number;
    onMaskClose: () => void;
    close: () => void;
    animateMask: (visible: any) => void;
    stopMaskAnim: () => void;
    stopDialogAnim: () => void;
    private _animateDialog;
    render(): JSX.Element | null;
}
