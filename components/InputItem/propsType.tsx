/**
 * Created by beilunyang on 2018/2/11
 */
import { ViewStyle } from 'react-native'
export interface IInputItemProps {
    ok?: boolean
    error?: boolean
    errorHint?: string
    disabled?: boolean,
    title?: string
    value?: string
    defaultValue?: string
    onChange?: (value?: any) => any
    onFocus?: (value?: any) => any
    onBlur?: (value?: any) => any
    type?: string

    style?: ViewStyle
    inputStyle?: ViewStyle
    placeholder?: any
    children?: any
}
