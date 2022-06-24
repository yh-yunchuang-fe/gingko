/*
 * @Author: wudi
 * @Date: 2022-04-21 19:38:24
 * @LastEditTime: 2022-05-26 16:07:29
 * @LastEditors: wudi wd_0315@163.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gingko/components/Field/textArea.tsx
 */
import React, { useState } from 'react'
import styles from './style'
import { View, Text, TextInput } from 'react-native'

export default function TextArea(props: any) {

    const {
        value = '',
        style,
        onBlur,
        onFocus,
        textInputStyle,
        selectionColor = '#FE8F1D',
        placeholder = '请输入文本',
        maxLength = 200 } = props
    
    const [remark, setRemark] = useState(value)

    const onChangeText = (text: string) => {
        text = text.replace(/\s+/g, '')
        setRemark(text)
        props.onChangeText && props.onChangeText(text)
    }

    const remarkStyle = { color: remark.length === maxLength ? '#FF2E2E' : '#9E9E9E' }
    
    return <View style={[styles.textAreaContainer, style]}>
        <TextInput
            multiline
            style={[styles.textAreaStyle, textInputStyle]}
            value={remark}
            maxLength={maxLength}
            selectionColor={selectionColor}
            placeholder={placeholder}
            onChangeText={onChangeText}
            onFocus={onFocus}
            onBlur={onBlur}
        />
        <Text style={[styles.textAreaMaxLength, remarkStyle]}>
            {remark.length}/{maxLength}
        </Text>
    </View>
}
