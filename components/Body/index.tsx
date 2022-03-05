/**
 * Created by suki on 2018/12/13.
 */

import * as React from 'react'
import BodyProps from './propdType'
import { View } from 'react-native'
import styles from './style'

const Body = (props: BodyProps) => {
    const { style, children } = props

    return <View style={[styles.container, style]}>
        { children }
    </View>
}

export default Body
