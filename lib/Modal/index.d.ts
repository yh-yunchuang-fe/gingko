import { IModalProps } from './propsType';
import Alert from './alert';
declare function Modal(props: IModalProps): JSX.Element;
declare namespace Modal {
    var alert: typeof Alert;
}
export default Modal;
