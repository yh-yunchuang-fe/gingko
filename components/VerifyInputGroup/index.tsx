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
        let values: any = [];
        let defaultValue = props.defaultValue+'' || '';
        if (defaultValue) {
            values = defaultValue.split('');
        }
        this.state = {
            values
        };
    }

    onChange = () => {

    };

    onBlur = () => {

    };

    render() {
        const {
            style, inputStyle, size = 0, autoFocus,
            ...restProps
        } = this.props;

        const { values } = this.state;

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
                    value={values[i] || ''}
                    keyboardType="numeric"
                    onChangeText={this.onChange}
                    onBlur={this.onBlur}
                    onSubmitEditing={()=>{ console.log('onSubmitEditing') }}
                />
            )
        }

        return (
            <View style={[styles.wrap, style]} {...restProps}>

            </View>
        )
    }
}
