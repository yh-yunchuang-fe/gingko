/**
 * @author zhangyi
 * @date 2018/5/5
 */
import React, { useState } from 'react'
import {
    View,
    TextInput, Text
} from 'react-native'
import styles from './style'
import IProps from './propsType'

export default function CodeInputGroup(props: IProps) {
    const {
        style, 
        inputWrapStyle, 
        inputStyle,
        size = 6,
        autoFocus = false,
        onChange,
        ...restProps
    } = props

    const defaultVal = `${props.defaultValue}` || ''
    const [values, setValues] = useState(defaultVal)

    const onChangeText = (val: any) => {
        if (isNaN(val)) {
            val = values
        }
        setValues(val)
        props.onChange && props.onChange(val)
    }

    const onFocus = () => {
        props.onFocus && props.onFocus()
    }

    const onBlur = () => {
        props.onBlur && props.onBlur()
    }

    const arrValues = values.split('')

    const node: any = []
    for(let i = 0; i < size; i++) {
        node.push(
            <View style={[styles.inputWrap, inputWrapStyle]} key={i}>
                <Text style={[styles.input, inputStyle]}>
                    { arrValues[i] || '' }
                </Text>
            </View>
        )
    }

    return (
        <View style={[styles.wrap, style]} {...restProps}>
            { node }
            <TextInput
                value={values}
                style={styles.textInput}
                keyboardType='numeric'
                autoFocus={autoFocus}
                underlineColorAndroid='transparent'
                onChangeText={onChangeText}
                onFocus={onFocus}
                onBlur={onBlur}
                maxLength={size}
            />
        </View>
    )
}
