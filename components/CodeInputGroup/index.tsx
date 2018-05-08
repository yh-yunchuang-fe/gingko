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

export default class CodeInputGroup extends React.Component<IProps, any> {
    static defaultProps = {
        defaultValue: '',
        size: 6,
        autoFocus: false,
        onSubmit: noop,
        onChange: noop,
        onFocus: noop,
        onBlur: noop,
        onClear: noop
    };

    constructor(props) {
        super(props);
        let values = props.defaultValue+'' || '';
        this.state = {
            values
        };
    }

    onChange = () => {

    };

    onBlur = () => {

    };

    onKeyPress = (e) => {
        console.log('e:', e);
        console.log('e.nativeEvent:', e.nativeEvent);
        const { size = 6 } = this.props;
        const key = e.nativeEvent.key;
        if (!isNaN(key)) {
            console.log('size:', size);
            this.setState((preState)=>{
                let values = preState.values;
                if (values.length < size) {
                    return {
                        values: values + key
                    }
                }
            })
        }else if (key === 'Backspace') {
            this.setState((preState)=>{
                let values = preState.values;
                return {
                    values: values.substr(0, values.length - 1)
                }
            })
        } else if (key === '.') {
            return;
        }
    };

    render() {
        const {
            style, inputStyle, size = 0, autoFocus,
            ...restProps
        } = this.props;

        const { values } = this.state;
        console.log('values:---', values)
        const arrValues = values.split('');
        console.log('arrValues:---', arrValues)

        let node: Array<React.ReactNode> = [];
        for(let i = 0; i < size; i++) {
            let isAutoFocus = autoFocus && i === 0;
            node.push(
                <TextInput
                    key={i}
                    caretHidden={true}
                    style={[styles.input, inputStyle]}
                    autoCapitalize="characters"
                    autoFocus={isAutoFocus}
                    blurOnSubmit={true}
                    value={arrValues[i] || ''}
                    keyboardType="numeric"
                    onBlur={this.onBlur}
                    onKeyPress={this.onKeyPress}
                    onSubmitEditing={()=>{ console.log('onSubmitEditing') }}
                />
            )
        }

        return (
            <View style={[styles.wrap, style]} {...restProps}>
                { node }
            </View>
        )
    }
}
