import React from 'react'
import { View } from 'react-native'
import variables from '@src/style'

export interface WingBlankProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    style?: any
    children?: any
}

export default function WingBlank(props: WingBlankProps) {
    const {
        size = 'md',
        style = {},
        children
    } = props

    const margin = variables[`h_spacing_${size}`]

    return (
        <View style={[{marginHorizontal: margin}, style]}>
            { children }
        </View>
    )
}
