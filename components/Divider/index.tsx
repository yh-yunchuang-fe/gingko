/*
 * @Author: wudi
 * @Date: 2022-03-25 10:18:48
 * @LastEditTime: 2022-04-24 16:27:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gingko/components/Divider/index.tsx
 */
import React from 'react'
import { View } from 'react-native'
import styles from './style'
import IDividerProps from './propsType'
import variables from '@src/style/'

export default function Divider(props: IDividerProps) {
    const {
        style,
        color = variables.color_border_bottom
    } = props

    return <View style={[
        styles.dividerContainer, 
        {backgroundColor: color},
        style]}></View>
}
