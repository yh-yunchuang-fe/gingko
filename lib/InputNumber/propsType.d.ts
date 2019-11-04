/**
 * @author zhangyi
 * @date 2018/3/24
 */
export default interface InputNumberProps {
    value?: number;
    max?: number;
    min?: number;
    step?: number;
    size?: 'default';
    disabled?: boolean;
    editable?: boolean;
    autoFocus?: boolean;
    unit?: string;
    onChange?: (_x: any) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    style?: any;
    width?: string | number;
}
