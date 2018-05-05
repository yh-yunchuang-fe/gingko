/**
 * @author zhangyi
 * @date 2018/5/5
 */
import React from 'react'
import {
    View,
    TextInput
} from "react-native";
import styles from './style/'
import IProps from './propsType'

function noop() {}

export default class VerifyInputGroup extends React.Component<IProps, any> {
    static defaultProps = {
        defaultValue: '',
        autoFocus: false,
        onSubmit: noop,
        onChange: noop,
        onFocus: noop,
        onBlur: noop,
        onClear: noop
    };

    constructor(props) {
        super(props);
        let value: any = [];
        let defaultValue = props.defaultValue+'' || '';
        if (defaultValue) {
            value = defaultValue.split('');
        }
        this.state = {
            value
        };
    }

    render() {
        const {
            style, inputStyle, textStyle, size = 0, autoFocus,
            ...restProps
        } = this.props;

        const { value } = this.state;

        let node: any = null;
        for(let i = 0; i < size; i++) {
            let isAutoFocus = autoFocus && i === 0;
            node.push(
                <TextInput
                    key={i}
                    style={[styles.input, inputStyle]}
                    autoCapitalize="characters"
                    autoFocus={isAutoFocus}
                    blurOnSubmit={true}
                    value={value[i] || ''}
                />
            )
        }

        return (
            <View style={[styles.wrap, style]}>

            </View>
        )
    }
}
