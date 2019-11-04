/**
 * @author zhangyi
 * @date 2018/3/15
 */
export default interface ISearchBarProps {
    defaultValue?: string;
    value?: string;
    placeholder?: string;
    style?: any;
    wrapStyle?: any;
    showCancel?: boolean;
    cancelText?: string;
    cancelColor?: string;
    autoFocus?: boolean;
    onSubmit?: (_x?: any) => void;
    onChange?: (_x?: any) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onCancel?: (_x?: any) => void;
    onClear?: () => void;
}
