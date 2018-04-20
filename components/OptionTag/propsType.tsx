/**
 * @author zhangyi
 * @date 2018/4/20
 */
import { ViewStyle } from 'react-native'

export default interface OptionTagProps {
    width?: string | number;
    height?: string | number;
    style?: ViewStyle;
    textStyle?: ViewStyle;
    disabled?: boolean;
    multiple?: boolean;

    selected?: boolean;
    onChange?: (_x:any) => void;
}