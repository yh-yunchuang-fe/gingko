/**
 * Created by beilunyang on 2018/2/9
 */
import * as React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import styles from './style/index'
import { IInputItemProps } from './propsType'
import Icon from '../Icon'

const fixControlledValue = (value: any): string => {
    if (typeof value === 'undefined' || value === null) {
        return ''
    }
    return value
}

export default class InputItem extends React.Component<IInputItemProps, any> {

    public static defaultProps: IInputItemProps = {
        title: '',
        ok: false,
        disabled: false,
        onChange: () => {},
        onBlur: () => {},
        onFocus: () => {},
        type: 'text',
    }
    
    public inputRef: any

    public clear = () => {
        const { onChange } = this.props
        if (onChange && typeof onChange === 'function') {
            onChange('')
        }
    }

    public onChange = (text: any) => {
        const { onChange, type } = this.props
        switch (type) {
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
        if (onChange) {
            onChange(text)
        }
    }

    public onInputBlur = () => {
        const { onBlur, value } = this.props
        if (onBlur) {
            onBlur(value)
        }
    }

    public onInputFocus = () => {
        const { onFocus, value } = this.props
        if (onFocus) {
            onFocus(value)
        }
    }

    public renderIcon = () => {
        const {
            ok,
            error,
            value,
        } = this.props
        if (error) {
            return (
                <Icon old name='alert' color='#f00' size='lg' />
            )
        }
        if (ok) {
            return (
                <Icon old name='unchecked' color='#589c3e' size='lg' />
            )
        }
        if (value && value.length > 0) {
            return (
                <TouchableOpacity onPress={this.clear}>
                    <Icon old name='close-circle' color='#c2c2c2' size='lg' />
                </TouchableOpacity>
            )
        }
        return null
    }

    public render() {
        const {
            value,
            defaultValue,
            type,
            error,
            errorHint,
            children,
            style,
            inputStyle,
            ...restProps
        } = this.props

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

        let valueProps
        if ('value' in this.props) {
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
                            onChange={(event) => this.onChange(event.nativeEvent.text)}
                            onBlur={this.onInputBlur}
                            onFocus={this.onInputFocus}
                            secureTextEntry={type === 'password'}
                            keyboardType={keyboardType}
                            placeholderTextColor='#ddd'
                            style={styles.textInput}
                            underlineColorAndroid='transparent'
                            ref={(ref) => this.inputRef = ref}
                        />
                        {this.renderIcon()}
                    </View>
                    {error && errorHint ? <Text style={styles.hintText}>{errorHint}</Text> : null}
                </View>
            </View>
        )
    }
}
