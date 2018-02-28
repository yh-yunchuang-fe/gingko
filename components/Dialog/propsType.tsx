import React from 'react'

export default interface IDialogProps {
    style?: any;
    wrapStyle?: any;
    maskStyle?: any;
    animationType?: 'none' | 'fade' | 'slide-up' | 'slide-down';
    animationDuration?: number;
    animateAppear?: boolean;
    visible: boolean;
    transparent?: boolean;
    maskClosable?: boolean;
    onClose?: (x?: any) => void;
    onAnimationEnd?: (x?: any) => void;
}