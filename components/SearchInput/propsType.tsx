/**
 * @author zhangyi
 * @date 2018/4/18
 */

export default interface SearchInputProps {
    defaultValue?: string;
    placeholder?: string;
    style?: any;
    wrapStyle?: any;
    autoFocus?: boolean;

    onSubmit?: (_x?: any) => void;
    onChange?: (_x?: any) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onClear?: () => void;
}