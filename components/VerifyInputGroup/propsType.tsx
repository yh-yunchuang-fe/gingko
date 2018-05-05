/**
 * @author zhangyi
 * @date 2018/5/5
 */
import { ViewStyle, TextStyle } from 'react-native'

export default interface IPorps {
    style?: ViewStyle;
    size?: number;
    inputStyle?: any;
    textStyle?: TextStyle;
    defaultValue?: string | number;
    autoFocus?: boolean;

    onSubmit?: (_x?: any) => void;
    onChange?: (_x?: any)=>void;
    onFocus?: () => void;
    onBlur?: () => void;
};