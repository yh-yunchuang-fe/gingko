/*
 * @Author: wudi
 * @Date: 2022-04-14 11:52:19
 * @LastEditTime: 2022-04-22 19:04:07
 * @LastEditors: Please set LastEditors
 * @Description: Label组件
 * @FilePath: /gingko/components/Label/propsType.tsx
 */
import React from 'react'
import styles from './style'
import { View, Text } from 'react-native'
import { ILabelProps } from './propsType'

export default function Label(props: ILabelProps) {
    const {
        labelSty = {},
        valueSty = {},
        labelWarpSty = {},
        valueWarpSty = {},
        label = '',
        value = null,
    } = props

    let leftDom: any = null
    if (label){
        if (React.isValidElement(label)) {
            leftDom = label
        } else {
            leftDom = <View style={[{ ...labelWarpSty}]}>
                <Text style={[styles.labelStyle, {...labelSty}]}>{label}</Text>
            </View>
        }
    }

    let rightDom: any = null
    if (value){
        console.log(React.isValidElement(value))
        if (React.isValidElement(value)) {
            rightDom = value
        } else {
            rightDom = <View style={[{flex: 1, ...valueWarpSty}]}>
                <Text style={[styles.valueStyle, {...valueSty}]}>{value}</Text>
            </View>
        }
    }

    return <View style={styles.container}>
        { leftDom }
        { rightDom }
    </View> 
}
