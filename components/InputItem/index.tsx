/**
 * Created by beilunyang on 2018/2/9
 */
import React, { useRef } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import styles from './style'
import { IInputItemProps } from './propsType'
import Icon from '../Icon'

const fixControlledValue = (value: any): string => {
    if (typeof value === 'undefined' || value === null) {
        return ''
    }
    return value
}

export default function InputItem(props: IInputItemProps) {
    const inputRef = useRef<any>(null)
    const {
        title = '',
        ok = false,
        disabled = false,
        onBlur = () => {},
        onFocus = () => {},
        type = 'text',
        children,
        value,
        defaultValue,
        error,
        errorHint,
        style,
        inputStyle,
        ...restProps
    } = props

    const clear = () => {
        !!props.onChange && props.onChange('')
    }

    const onChange = (text: any) => {
        switch (props.type) {
            case 'phone':
                text = text.replace(/\D/g, '')
                text = text.substring(0, 11)
                const textLen = text.length
                if (textLen > 3 && textLen < 8) {
                    text = `${text.substr(0, 3)}-${text.substr(3)}`
                } else if (textLen >= 8) {
                    text = `${text.substr(0, 3)}-${text.substr(3, 4)}-${text.substr(7)}`
                }
                break
            default:
        }
        props.onChange && props.onChange(text)
    }

    const onInputBlur = () => {
        !!props.onBlur && props.onBlur(props.value)
    }

    const onInputFocus = () => {
        !!props.onFocus && props.onFocus(props.value)
    }

    const renderIcon = () => {
        if (error) {
            return (
                <Icon name='alert' color='#f00' size='lg' />
            )
        }
        if (ok) {
            return (
                <Icon name='unchecked' color='#589c3e' size='lg' />
            )
        }
        if (value && value.length > 0) {
            return (
                <TouchableOpacity onPress={clear}>
                    <Icon name='close-circle' color='#c2c2c2' size='lg' />
                </TouchableOpacity>
            )
        }
        return null
    }

    const keyboardTypeArray: string[] = ['default', 'email-address',
        'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation',
        'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search']
    let keyboardType: any = 'default'
    if (type === 'number') {
        keyboardType = 'numeric'
    } else if (type === 'phone') {
        keyboardType = 'phone-pad'
    } else if (type && keyboardTypeArray.indexOf(type) > -1) {
        keyboardType = type
    }

    let valueProps: object
    if ('value' in props) {
        valueProps = {
            value: fixControlledValue(value),
        }
    } else {
        valueProps = {
            defaultValue,
        }
    }

    return (
        <View style={[{ flexDirection: 'row' }, style]}>
            <View style={styles.container}>
                <Text style={styles.label}>{children}</Text>
                <View style={[styles.input, inputStyle]}>
                    <TextInput
                        {...restProps}
                        {...valueProps}
                        onChange={(event) => onChange(event.nativeEvent.text)}
                        onBlur={onInputBlur}
                        onFocus={onInputFocus}
                        secureTextEntry={type === 'password'}
                        keyboardType={keyboardType}
                        placeholderTextColor='#ddd'
                        style={styles.textInput}
                        underlineColorAndroid='transparent'
                        ref={inputRef}
                    />
                    {renderIcon()}
                </View>
                {error && errorHint ? <Text style={styles.hintText}>{errorHint}</Text> : null}
            </View>
        </View>
    )
}
