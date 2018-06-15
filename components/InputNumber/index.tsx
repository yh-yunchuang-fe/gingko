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
        modified: false
    };

    constructor(props) {
        super(props)
    }

    onChange = (value) => {
        if(value ===''){
            value = 0
        }

        const { onChange, min = -Infinity, max = Infinity } = this.props;
        let num = parseFloat(value);

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

    /**
     ** 加法函数，用来得到精确的加法结果
     ** 说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
     ** 调用：accAdd(arg1,arg2)
     ** 返回值：arg1加上arg2的精确结果
     **/
    add = (arg1, arg2) => {
        let r1, r2, m, c;
        try {
            r1 = arg1.toString().split(".")[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split(".")[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        c = Math.abs(r1 - r2);
        m = Math.pow(10, Math.max(r1, r2));
        if (c > 0) {
            let cm = Math.pow(10, c);
            if (r1 > r2) {
                arg1 = Number(arg1.toString().replace(".", ""));
                arg2 = Number(arg2.toString().replace(".", "")) * cm;
            } else {
                arg1 = Number(arg1.toString().replace(".", "")) * cm;
                arg2 = Number(arg2.toString().replace(".", ""));
            }
        } else {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", ""));
        }
        return (arg1 + arg2) / m;
    };

    sub = (arg1, arg2) => {
        let r1, r2, m, n;
        try {
            r1 = arg1.toString().split(".")[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split(".")[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
        n = (r1 >= r2) ? r1 : r2;
        return ((arg1 * m - arg2 * m) / m).toFixed(n);
    };

    minus = (value, step) => {
        value = parseFloat(value+'');
        this.onChange(this.sub(value,  step));
    };

    plus = (value, step) => {
        value = parseFloat(value+'');
        this.onChange(this.add(value, step));
    };

    render() {
        let {
            value:strValue, max = Infinity, min = -Infinity, unit, step,
            disabled, style, editable, autoFocus, width = 110, onChange,
            ...restProps
        } = this.props;

        let value:number = parseFloat(strValue+'') ? 0 : parseFloat(strValue+'');
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
                <TouchableOpacity onPress={this.minus.bind(this, value, step)}>
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
                <TouchableOpacity onPress={this.plus.bind(this, value, step)}>
                    <View style={[styles.action]}>
                        <Icon name="plus" size={10} style={activeAction}/>
                    </View>
                </TouchableOpacity>
            )
        }

        let inputEditable = !disabled && editable;

        let newValue:string = value+'' || '0';

        return (
            <View style={[styles.wrap, style, activeWrap, {width: width}]} {...restProps}>
                {minusDom}
                <TextInput
                    style={[styles.textInput, activeInput]}
                    value={newValue}
                    editable={inputEditable}
                    autoFocus={autoFocus}
                    keyboardType="numbers-and-punctuation"
                    underlineColorAndroid="transparent"
                    onChangeText={(text)=>{
                        this.onChange(text)
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
