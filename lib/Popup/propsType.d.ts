/**
 * @author zhangyi
 * @date 2018/2/28
 */
export default interface IModalProps {
    visible: boolean;
    maskClosable?: boolean;
    onClose?: () => void;
    animationDuration?: number;
    animateAppear?: boolean;
    onAnimationEnd?: (x?: any) => void;
    style?: any;
}
