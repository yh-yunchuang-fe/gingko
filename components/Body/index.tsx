/**
 * Created by suki on 2018/12/13.
 */
import React from 'react'
import IBodyProps from './propdType'
import { View } from 'react-native'
import styles from './style'

const Body = ({ 
    style,
    bgColor = '#F5F5F5',
    children 
}: IBodyProps) => {

    return <View style={[
        styles.container, 
        { backgroundColor: bgColor }, 
        style
    ]}>
        <View style={styles.children}>
            { children }
        </View>
    </View>
}

export default Body
