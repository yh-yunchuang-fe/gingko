import React from 'react'
import {
    View,
    Image,
    Text, 
} from 'react-native'
import IndicatorProps from './propsType'
import styles from './style'
import variables from '@src/style'

export default function Indicator(props: IndicatorProps) {
    const {
        text,
        size = 'md',
        source = require('../../src/assets/imgs/loading.gif'),
        style = {},
        textStyle = {},
        imgStyle = {}
    } = props

    const sizeSty = {
        width: variables[`indicator_${size}`] || size,
        height: variables[`indicator_${size}`] || size
    }

    return (
        <View style={[styles.indicator, style]}>
            <Image style={[sizeSty, imgStyle]} source={source} />
            { text && <Text style={[styles.tip, textStyle]}>{ text }</Text> }
        </View>
    )
}
