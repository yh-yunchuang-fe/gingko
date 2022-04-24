import React from 'react'
import { View } from 'react-native'
import variables from '@src/style'

export interface WhiteSpaceProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    style?: any
}

export default class WhiteSpace extends React.Component<WhiteSpaceProps, any> {
    public static defaultProps = {
        size: 'md',
    };

    public render() {
        const { size, style } = this.props;
        return (
            <View style={[{ height: variables[`v_spacing_${size}`] }, style]} />
        );
    }
}
