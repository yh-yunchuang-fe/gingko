/**
 * Created by beilunyang on 2018/2/23
 */
export interface IModalProps {
   title?: string;
   onShow?: () => void;
   onClose?: () => void;
   maskClosable?: boolean;
   transparent?: boolean;
   animationType?: any;
   onAnimationEnd?: (visible: boolean) => void;
   footer?: Array<{}>;
   visible?: boolean;
   style?: {};
}

export interface IActionButton {
    text: string;
    onPress?: () => void;
    style?: {};
    type?: string;
}

export interface IAlertProps {
    title: string;
    content: any;
    actions: IActionButton[];
    onAnimationEnd?: (visible: boolean) => void;
}