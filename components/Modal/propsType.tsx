/**
 * Created by beilunyang on 2018/2/23
 */
export interface IModalProps {
   title?: string;
   onClose?: () => void;
   maskClosable?: boolean;
   transparent?: boolean;
   animationType?: any;
   onCloseEnd?: (visible: boolean) => void;
   footer?: Array<IActionButton>;
   visible?: boolean;
   style?: {};
   bodyStyle?: {};
}

export interface IActionButton {
    text: string;
    onPress?: () => void;
    style?: {};
    type?: 'default' | 'primary' | 'warning' | 'ghost';
}

export interface IAlertProps {
    title: string;
    content: any;
    actions: IActionButton[];
    onCloseEnd?: (visible: boolean) => void;
}