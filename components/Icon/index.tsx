import * as React from 'react'
import {
    Text
} from "react-native";

export interface IconProps {
    name: string,
    color?: string,
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | number;
}

const iconMap = {
    'arrow-down': '\ue900',
    'arrow-left': '\ue901',
    'arrow-right': '\ue902',
    'arrow-up': '\ue903',
    'back-home': '\ue904',
    'back': '\ue905',
    'camera': '\ue906',
    'delete-circle': '\ue907',
    'invisible': '\ue908',
    'more': '\ue909',
    'ok': '\ue90a',
    'scan': '\ue90b',
    'search': '\ue90c',
    'selected-multi-noraml': '\ue90d',
    'selected-single': '\ue90e',
    'unselected-normal': '\ue90f',
    'visible': '\ue910',
    'warning': '\ue911'
};

export default class Icon extends React.Component<IconProps, any> {
    static defaultProps = {
        size: 16,
        color: '#333',
    };

    render() {
        const { name, size, color } = this.props;
        const sizeMap = { 'xxs': 15, 'xs': 18, 'sm': 21, 'md': 22, 'lg': 36 };
        const fontSize = typeof size === 'string' ? sizeMap[size] : size;
        const TextIconStyle = {
            fontSize,
            color: color,
            fontFamily: 'gingkoIcon',
            flexDirection: 'row',
        };

        return (
            <Text style={TextIconStyle as any}>{iconMap[name] || name}</Text>
        );
    }
}