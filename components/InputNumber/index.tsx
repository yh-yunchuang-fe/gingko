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
} from 'react-native'
import InputNumberProps from './propsType'
import styles from './style'
import Icon from '../Icon'

export default class InputNumber extends React.Component<InputNumberProps, any> {
    public static defaultProps = {
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
    }

    public isControlledComponent = this.props.hasOwnProperty('value')

    public state = {
        modified: false,
        value: this.isControlledComponent ? this.props.value : 0,
    }

    public componentWillReceiveProps(nextProps: any) {
        if (this.isControlledComponent && nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value
            })
        }
    }

    public onChange = (num) => {
        const { onChange, min = -Infinity, max = Infinity } = this.props
        num = num < min ? min : num
        num = num > max ? max : num

        if (num >= min && num <= max) {

            this.setState({
                modified: true
            });
        }
        onChange && onChange(num)
    };

    public onBlur = () => {
        const { onBlur } = this.props;
        const { value } = this.state;
        const num: number = parseFloat(value+'') || 0;
        this.onChange(num);
        onBlur && onBlur()
    }

    public onFocus = () => {
        const { onFocus } = this.props;
        onFocus && onFocus()
    }

    // 加法函数，用来得到精确的加法结果
    // 说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
    // 调用：accAdd(arg1,arg2)
    // 返回值：arg1加上arg2的精确结果
    public add = (arg1: any, arg2: any) => {
        // tslint:disable-next-line:one-variable-per-declaration
        let r1: any, r2: any, m: any, c: any;
        try {
            r1 = arg1.toString().split('.')[1].length;
        } catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split('.')[1].length;
        } catch (e) {
            r2 = 0;
        }
        c = Math.abs(r1 - r2);
        m = Math.pow(10, Math.max(r1, r2));
        if (c > 0) {
            const cm = Math.pow(10, c);
            if (r1 > r2) {
                arg1 = Number(arg1.toString().replace('.', ''));
                arg2 = Number(arg2.toString().replace('.', '')) * cm;
            } else {
                arg1 = Number(arg1.toString().replace('.', '')) * cm;
                arg2 = Number(arg2.toString().replace('.', ''));
            }
        } else {
            arg1 = Number(arg1.toString().replace('.', ''));
            arg2 = Number(arg2.toString().replace('.', ''));
        }
        return (arg1 + arg2) / m;
    };

    public sub = (arg1: any, arg2: any) => {
        // tslint:disable-next-line:one-variable-per-declaration
        let r1: any, r2: any, m: any, n: any;
        try {
            r1 = arg1.toString().split('.')[1].length;
        } catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split('.')[1].length;
        } catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        n = (r1 >= r2) ? r1 : r2;
        return ((arg1 * m - arg2 * m) / m).toFixed(n);
    };

    public minus = (value: any, step: any) => {
        value = parseFloat(value+'');
        this.onChange(this.sub(value,  step));
    };

    public plus = (value: any, step: any) => {
        value = parseFloat(value+'');
        this.onChange(this.add(value, step));
    };

    public render() {
        const {
            max = Infinity, min = -Infinity, unit, 
            disabled, style, editable, autoFocus, width = 110, onChange,
            ...restProps
        } = this.props
        let { step } = this.props

        const { value:stateValue } = this.state;
        const value: number = parseFloat(stateValue+'');

        step = step || 1;

        const { modified } = this.state;

        const canMinus = (value > min);
        const canPlus = (value < max);

        const activeWrap = modified ? styles.activeWrap : null;
        const activeAction = modified ? styles.activeAction : null;
        const activeInput = modified ? styles.activeInput : null;

        let minusDom: any = null;
        if (!canMinus || disabled) {
            minusDom = (<View style={[styles.action]}>
                <Icon old name='minus' size={10} style={styles.actionDisabled}/>
            </View>)
        } else {
            minusDom = (
                <TouchableOpacity onPress={this.minus.bind(this, value, step)}>
                    <View style={[styles.action]}>
                        <Icon old name='minus' size={10} style={activeAction}/>
                    </View>
                </TouchableOpacity>
            )
        }

        let plusDom: any = null;
        if (!canPlus || disabled) {
            plusDom = (<View style={[styles.action]}>
                <Icon old name='plus' size={10} style={styles.actionDisabled}/>
            </View>)
        } else {
            plusDom = (
                <TouchableOpacity onPress={this.plus.bind(this, value, step)}>
                    <View style={[styles.action]}>
                        <Icon old name='plus' size={10} style={activeAction}/>
                    </View>
                </TouchableOpacity>
            )
        }

        const inputEditable = !disabled && editable;

        return (
            <View style={[styles.wrap, style, activeWrap, {width}]} {...restProps}>
                {minusDom}
                <TextInput
                    style={[styles.textInput, activeInput]}
                    value={stateValue+''}
                    editable={inputEditable}
                    autoFocus={autoFocus}
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => {
                        onChange && onChange(text)
                    }}
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
