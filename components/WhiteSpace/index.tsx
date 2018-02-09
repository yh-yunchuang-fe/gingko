import React from 'react'
import { View } from 'react-native'
import variables from '../../src/style/variables'

export interface WhiteSpaceProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    style?: any
}

export default class WhiteSpace extends React.Component<WhiteSpaceProps, any> {
    static defaultProps = {
        size: 'md',
    };

    render() {
        const { size, style } = this.props;
        return (
            <View style={[{ height: variables[`v_spacing_${size}`] }, style]} />
        );
    }
}