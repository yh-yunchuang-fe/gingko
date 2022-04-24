/*
 * @Author: wudi
 * @Date: 2022-04-14 11:52:19
 * @LastEditTime: 2022-04-22 10:21:05
 * @LastEditors: Please set LastEditors
 * @Description: Field组件
 * @FilePath: /gingko/components/Field/propsType.tsx
 */
import React from 'react'
import styles from './style'
import { View, Text, TextInput } from 'react-native'
import { IFieldProps } from './propsType'
import Verify from './verify'
import TextArea from './textArea'

function Field(props: IFieldProps) {
    const {
        labelSty = {},
        valueSty = {},
        labelWarpSty = {},
        valueWarpSty = {},
        inputSty = {},
        label = '',
        value = '',
        autoFocus = false,
        textAlign = 'left',
        selectionColor = '#FE8F1D',
        placeholderTextColor = '#CCCCCC',
        placeholder = '请输入',
        onSubmit = () => {},
        onChange = () => {},
        onFocus = () => {},
        onBlur = () => {},
        onClear = () => {},
        ...restProps
    } = props

    const [inputvalue, setInputvalue] = React.useState(props.value)

    const onChangeTextInput = (text: string) => {
        text = text.replace(/\s+/g, '')
        setInputvalue(text)

        props.onChangeText && props.onChangeText(text)
    }

    let leftDom: any = null
    if (label){
        if (React.isValidElement(label)) {
            leftDom = label
        } else {
            leftDom = <View style={[{...labelWarpSty, alignItems: 'center'}]}>
                <Text style={[styles.labelStyle, {...labelSty}]}>{label}</Text>
            </View>
        }
    }

    return <View style={styles.container}>
        { leftDom }
        <View style={styles.textInputWrap}>
            <TextInput
                {...restProps}
                autoFocus={false}
                textAlign={textAlign}
                style={[styles.textInput, inputSty]}
                value={inputvalue}
                selectionColor={selectionColor}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                onChangeText={onChangeTextInput} />
        </View>
    </View> 
}

Field.verify = Verify
Field.textArea = TextArea

export default Field
