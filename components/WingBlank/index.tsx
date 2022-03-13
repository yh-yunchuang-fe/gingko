import React from 'react'
import { View } from 'react-native'
import variables from '../../src/style/variables'

export interface WingBlankProps {
    size?: 'sm' | 'md' | 'lg';
    style?: any;
}

export default class WingBlank extends React.Component<WingBlankProps, any> {
    public static defaultProps = {
        size: 'lg',
        style: {}
    };

    public render() {
        const { size, style, children } = this.props;
        const margin = variables[`h_spacing_${size}`];

        return (
            <View style={[{marginHorizontal: margin}, style]}>
                { children }
            </View>
        )
    }
}
