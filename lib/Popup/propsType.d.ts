export default interface IDividerProps {
    style?: any;
    wrapStyle?: any;
    maskStyle?: any;
    type?: 'none' | 'close' | 'cancel';
    animationType?: 'none' | 'fade' | 'slide-up' | 'slide-down' | string;
    animationDuration?: number;
    animateAppear?: boolean;
    visible: boolean;
    transparent?: boolean;
    maskClosable?: boolean;
    onChange?: (x?: any) => void;
    onClose?: (x?: any) => void;
    onAnimationEnd?: (x?: any) => void;
    maskCloseable?: boolean;
    children?: any;
    hint?: string;
    title?: string;
    close?: string;
    numberOfLines?: number;
}
