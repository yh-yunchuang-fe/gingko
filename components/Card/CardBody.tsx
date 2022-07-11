import React from 'react'
import { View } from 'react-native'
import Divider from '../Divider'
import {CardBodyProps} from './propsType'
import styles from './style'

export default function CardBody({
    style = {},
    line = true,
    children,
}: CardBodyProps) {

    return <View style={style}>
        {line && <Divider />}
        <View style={styles.body}>{children}</View>
    </View>
}
