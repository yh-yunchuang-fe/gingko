import React from 'react'
import { View } from 'react-native'
import style from './style'
import { IShadowProps } from './propsType'

export default function Shadow(props: IShadowProps) {
    const {
        children,
        type = 'default'
    } = props

    return <View style={[
        style.shoadowSty,
        style[`${type}ShoadowSty`]
    ]}>
        { children }
    </View>
}
