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
import Icon from "../Icon";

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
        autoFocus: false,
        width: 110
    };

    state = {
        // canPlus: true,
        // canMinus: true,
        modified: false
    };

    constructor(props) {
        super(props)
    }

    onChange = (value) => {
        const { onChange, min = -Infinity, max = Infinity } = this.props;
        let num = parseInt(value, 10);

        if (num >= min && num <= max) {

            this.setState({
                modified: true
            });

            onChange && onChange(value)
        }
    };

    onBlur = () => {
        const { onBlur } = this.props;
        onBlur && onBlur()
    };

    onFocus = () => {
        const { onFocus } = this.props;
        onFocus && onFocus()
    };

    // onPlus = (value) => {
    //     this.onChange(parseInt(value, 10) + step)
    // };

    render() {
        let {
            value = 0, max = Infinity, min = -Infinity, unit, step,
            disabled, style, editable, autoFocus, width = 110,
            ...restProps
        } = this.props;

        let newValue:string = value+'' || '0';
        step = step || 1;

        const { modified } = this.state;

        let canMinus = (value > min);
        let canPlus = (value < max);

        let activeWrap = modified ? styles.activeWrap : null;
        let activeAction = modified ? styles.activeAction : null;
        let activeInput = modified ? styles.activeInput : null;

        let minusDom: any = null;
        if (!canMinus || disabled) {
            minusDom = (<View style={[styles.action]}>
                <Icon name="minus" size={10} style={styles.actionDisabled}/>
            </View>)
        } else {
            minusDom = (
                <TouchableOpacity onPress={this.onChange.bind(this, value - step)}>
                    <View style={[styles.action]}>
                        <Icon name="minus" size={10} style={activeAction}/>
                    </View>
                </TouchableOpacity>
            )
        }

        let plusDom:any = null;
        if (!canPlus || disabled) {
            plusDom = (<View style={[styles.action]}>
                <Icon name="plus" size={10} style={styles.actionDisabled}/>
            </View>)
        } else {
            plusDom = (
                <TouchableOpacity onPress={this.onChange.bind(this, value + step)}>
                    <View style={[styles.action]}>
                        <Icon name="plus" size={10} style={activeAction}/>
                    </View>
                </TouchableOpacity>
            )
        }

        let inputEditable = !disabled && editable;

        return (
            <View style={[styles.wrap, style, activeWrap, {width: width}]} {...restProps}>
                {minusDom}
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
                {plusDom}
            </View>
        )
    }
}
