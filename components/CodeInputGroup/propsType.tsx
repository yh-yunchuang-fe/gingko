/**
 * @author zhangyi
 * @date 2018/5/5
 */
import { ViewStyle, TextStyle } from 'react-native'

export default interface IPorps {
    style?: ViewStyle;
    size?: number;
    inputWrapStyle?: ViewStyle;
    inputStyle?: TextStyle;
    defaultValue?: string | number;
    autoFocus?: boolean;

    onChange?: (x?: any) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}
