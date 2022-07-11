/**
 * @author zhangyi
 * @date 2018-02-28
 */

export interface IModalProps {
    visible: boolean;
    title?: string;
    content?: string;
    contentStyle?: any;
    maskClosable?: boolean;
    footer?: Array<IActionButton>;
    onClose?: () => void;
    transparent?: boolean;
    animationType?: 'none' | 'fade' | 'slide-up' | 'slide-down';
    animationDuration?: number;
    onAnimationEnd?: (x?: any) => void;
    style?: any;
    bodyStyle?: any;
    children?: any;
    restProps?: any
}

export interface IActionButton {
    line?: boolean;
    text: string;
    onPress?: () => void;
    style?: {};
    type?: 'primary' | 'second' | 'disable'
}

export interface IAlertProps {
    title?: string,
    content?: string;
    actions: Array<IActionButton>;
    onAnimationEnd?: (visible: boolean) => void;
}
