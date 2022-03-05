/**
 * @author zhangyi
 * @date 2018/5/5
 */
import React from 'react'
import {
    View,
    TextInput, Text
} from "react-native";
import styles from './style/'
import IProps from './propsType'

function noop() {}

export default class CodeInputGroup extends React.Component<IProps, any> {
    static defaultProps = {
        defaultValue: '',
        size: 6,
        autoFocus: false,
        onChange: noop,
        onFocus: noop,
        onBlur: noop,
    };

    constructor(props: IProps | Readonly<IProps>) {
        super(props);
        let values = props.defaultValue+'' || '';
        this.state = {
            values
        };
    }

    onChangeText = (values: any) => {
        const { onChange } = this.props;
        let preValues = this.state.values;
        if (isNaN(values)) {
            values = preValues
        }
        this.setState({
            values
        });
        console.log('values----s: ', values);
        onChange && onChange(values)
    };

    onFocus = () => {
        const { onFocus } = this.props;
        onFocus && onFocus()
    };

    onBlur = () => {
        const { onBlur } = this.props;
        onBlur && onBlur()
    };

    render() {
        const {
            style, inputWrapStyle, inputStyle, size = 6, autoFocus,
            onChange,
            ...restProps
        } = this.props;

        const { values } = this.state;
        const arrValues = values.split('');

        let node: Array<React.ReactNode> = [];
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
                    keyboardType="numeric"
                    autoFocus={autoFocus}
                    underlineColorAndroid="transparent"
                    onChangeText={this.onChangeText}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    maxLength={size}
                />
            </View>
        )
    }
}
