/**
 * @author zhangyi
 * @date 2018/5/5
 */
import React from 'react'
import {
    View,
    TextInput, Text
} from 'react-native'
import styles from './style'
import IProps from './propsType'

function noop() {}

export default class CodeInputGroup extends React.Component<IProps, any> {
    public static defaultProps = {
        defaultValue: '',
        size: 6,
        autoFocus: false,
        onChange: noop,
        onFocus: noop,
        onBlur: noop,
    }

    constructor(props: IProps | Readonly<IProps>) {
        super(props)
        const values = props.defaultValue+'' || ''
        this.state = {
            values
        }
    }

    public onChangeText = (values: any) => {
        const { onChange } = this.props
        const preValues = this.state.values
        if (isNaN(values)) {
            values = preValues
        }
        this.setState({
            values
        })
        onChange && onChange(values)
    }

    public onFocus = () => {
        const { onFocus } = this.props
        onFocus && onFocus()
    }

    public onBlur = () => {
        const { onBlur } = this.props
        onBlur && onBlur()
    }

    public render() {
        const {
            style, inputWrapStyle, inputStyle, size = 6, autoFocus,
            onChange,
            ...restProps
        } = this.props

        const { values } = this.state
        const arrValues = values.split('')

        const node: Array<React.ReactNode> = []
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
                    onChangeText={this.onChangeText}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    maxLength={size}
                />
            </View>
        )
    }
}
