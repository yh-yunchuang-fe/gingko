/**
 * @author zhangyi
 * @date 2018/3/24
 */
import React from 'react'
import {
    Text,
    View,
    TextInput,
    TouchableOpacity
} from "react-native";
import InputNumberProps from './propsType'
import styles from './style'

export default class InputNumber extends React.Component<InputNumberProps, any> {
    static defaultProps = {
        value: 0,
        max: Infinity,
        min: -Infinity,
        unit: '',
        step: 1,
        size: 'default',
        disabled: false,
        editable: true,
        autoFocus: false
    };

    state = {
        canPlus: true,
        canMinus: true,
        modified: false
    };

    constructor(props) {
        super(props)
    }

    onChange = (value) => {
        this.setState({
            modified: true
        });
        const { onChange } = this.props;
        onChange && onChange(value)
    };

    onBlur = () => {
        const { onBlur } = this.props;
        onBlur && onBlur()
    };

    onFocus = () => {
        const { onFocus } = this.props;
        onFocus && onFocus()
    };

    render() {
        let {
            value, max, min, unit, step, disabled, style, editable, autoFocus,
            ...restProps
        } = this.props;

        let newValue:string = value+'' || '0';
        step = step || 1;

        const { canPlus, canMinus, modified } = this.state;

        let activeWrap = modified ? styles.activeWrap : null;
        let activeAction = modified ? styles.activeAction : null;
        let activeInput = modified ? styles.activeInput : null;

        let minusDom: any = null;
        if (!canMinus || disabled) {
            minusDom = (<View style={styles.action}>
                <Text style={[styles.actionText, styles.actionDisabled]}>-</Text>
            </View>)
        } else {
            minusDom = (<TouchableOpacity onPress={this.onChange.bind(this, -step)}>
                <View style={styles.action}>
                    <Text style={[styles.actionText, activeAction]}>-</Text>
                </View>
            </TouchableOpacity>)
        }

        let plusDom:any = null;
        if (!canPlus || disabled) {
            plusDom = (<View style={[styles.action]}>
                <Text style={[styles.actionText, styles.actionDisabled]}>+</Text>
            </View>)
        } else {
            plusDom = (<TouchableOpacity onPress={this.onChange.bind(this, step)}>
                <View style={styles.action}>
                    <Text style={[styles.actionText, activeAction]}>+</Text>
                </View>
            </TouchableOpacity>)
        }

        let inputEditable = !disabled && editable;

        return (
            <View style={[styles.wrap, style, activeWrap]}>
                {minusDom}
                <View style={styles.content}>
                    <TextInput
                        style={[styles.textInput, activeInput]}
                        value={newValue}
                        editable={inputEditable}
                        autoFocus={autoFocus}
                        keyboardType="numbers-and-punctuation"
                        onChangeText={this.onChange}
                        onBlur={this.onBlur}
                        onFocus={this.onFocus}
                        selectTextOnFocus={true}
                    />
                    <Text style={[styles.unit, activeInput]}>{unit}</Text>
                </View>
                {plusDom}
            </View>
        )
    }
}
