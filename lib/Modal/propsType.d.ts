/**
 * @author zhangyi
 * @date 2018-02-28
 */
export interface IModalProps {
    visible: boolean;
    title?: string;
    maskClosable?: boolean;
    footer?: Array<IActionButton>;
    onClose?: () => void;
    transparent?: boolean;
    animationType?: 'none' | 'fade' | 'slide-up' | 'slide-down';
    animationDuration?: number;
    animateAppear?: boolean;
    onAnimationEnd?: (x?: any) => void;
    style?: any;
    bodyStyle?: any;
}
export interface IActionButton {
    text: string;
    onPress?: () => void;
    style?: {};
    type?: 'default' | 'primary' | 'warning' | 'ghost';
}
export interface IAlertProps {
    title?: string;
    content?: string;
    actions: Array<IActionButton>;
    onAnimationEnd?: (visible: boolean) => void;
}
