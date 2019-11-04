/**
 * Created by beilunyang on 2018/3/14
 */
import {
    ViewStyle,
    TextStyle,
} from 'react-native';

export interface ICheckbox {
    icon?: boolean | Function;
    dir?: 'left' | 'right';
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked?: boolean) => any;
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
    name?: string;
}