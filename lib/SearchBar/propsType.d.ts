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
    searchText?: string;
    cancelText?: string;
    cancelColor?: string;
    selectionColor?: string;
    autoFocus?: boolean;
    onSubmit?: (x?: any) => void;
    onChange?: (x?: any) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onSearch?: (x?: any) => void;
    onCancel?: (x?: any) => void;
    onClear?: () => void;
}
