import React from 'react'
import { View } from 'react-native'
import variables from '@src/style'

export interface WhiteSpaceProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    style?: any
}

export default function WhiteSpace(props: WhiteSpaceProps) {
    const {
        size = 'md',
        style
    } = props

    return (
        <View style={[{ height: variables[`v_spacing_${size}`] }, style]} />
    )
}
