/**
 * Created by beilunyang on 2018/3/7
 */
import {
    ViewStyle,
    TextStyle,
} from 'react-native';

export interface IBadge {
    size?: 'large' | 'small';
    text?: string;
    children?: any;
    bgColor?: string;
    color?: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
    overflowCount?: number;
    corner?: boolean;
}