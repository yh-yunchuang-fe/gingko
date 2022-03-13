"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 * @date 2018/3/24
 */
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const style_1 = __importDefault(require("./style"));
const Icon_1 = __importDefault(require("../Icon"));
class InputNumber extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.isControlledComponent = this.props.hasOwnProperty('value');
        this.state = {
            modified: false,
            value: this.isControlledComponent ? this.props.value : 0,
        };
        this.onChange = (num) => {
            const { onChange, min = -Infinity, max = Infinity } = this.props;
            num = num < min ? min : num;
            num = num > max ? max : num;
            if (num >= min && num <= max) {
                this.setState({
                    modified: true
                });
            }
            onChange && onChange(num);
        };
        this.onBlur = () => {
            const { onBlur } = this.props;
            const { value } = this.state;
            const num = parseFloat(value + '') || 0;
            this.onChange(num);
            onBlur && onBlur();
        };
        this.onFocus = () => {
            const { onFocus } = this.props;
            onFocus && onFocus();
        };
        // 加法函数，用来得到精确的加法结果
        // 说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
        // 调用：accAdd(arg1,arg2)
        // 返回值：arg1加上arg2的精确结果
        this.add = (arg1, arg2) => {
            // tslint:disable-next-line:one-variable-per-declaration
            let r1, r2, m, c;
            try {
                r1 = arg1.toString().split('.')[1].length;
            }
            catch (e) {
                r1 = 0;
            }
            try {
                r2 = arg2.toString().split('.')[1].length;
            }
            catch (e) {
                r2 = 0;
            }
            c = Math.abs(r1 - r2);
            m = Math.pow(10, Math.max(r1, r2));
            if (c > 0) {
                const cm = Math.pow(10, c);
                if (r1 > r2) {
                    arg1 = Number(arg1.toString().replace('.', ''));
                    arg2 = Number(arg2.toString().replace('.', '')) * cm;
                }
                else {
                    arg1 = Number(arg1.toString().replace('.', '')) * cm;
                    arg2 = Number(arg2.toString().replace('.', ''));
                }
            }
            else {
                arg1 = Number(arg1.toString().replace('.', ''));
                arg2 = Number(arg2.toString().replace('.', ''));
            }
            return (arg1 + arg2) / m;
        };
        this.sub = (arg1, arg2) => {
            // tslint:disable-next-line:one-variable-per-declaration
            let r1, r2, m, n;
            try {
                r1 = arg1.toString().split('.')[1].length;
            }
            catch (e) {
                r1 = 0;
            }
            try {
                r2 = arg2.toString().split('.')[1].length;
            }
            catch (e) {
                r2 = 0;
            }
            m = Math.pow(10, Math.max(r1, r2));
            n = (r1 >= r2) ? r1 : r2;
            return ((arg1 * m - arg2 * m) / m).toFixed(n);
        };
        this.minus = (value, step) => {
            value = parseFloat(value + '');
            this.onChange(this.sub(value, step));
        };
        this.plus = (value, step) => {
            value = parseFloat(value + '');
            this.onChange(this.add(value, step));
        };
    }
    componentWillReceiveProps(nextProps) {
        if (this.isControlledComponent && nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }
    render() {
        const _a = this.props, { max = Infinity, min = -Infinity, unit, disabled, style, editable, autoFocus, width = 110, onChange } = _a, restProps = __rest(_a, ["max", "min", "unit", "disabled", "style", "editable", "autoFocus", "width", "onChange"]);
        let { step } = this.props;
        const { value: stateValue } = this.state;
        const value = parseFloat(stateValue + '');
        step = step || 1;
        const { modified } = this.state;
        const canMinus = (value > min);
        const canPlus = (value < max);
        const activeWrap = modified ? style_1.default.activeWrap : null;
        const activeAction = modified ? style_1.default.activeAction : null;
        const activeInput = modified ? style_1.default.activeInput : null;
        let minusDom = null;
        if (!canMinus || disabled) {
            minusDom = (<react_native_1.View style={[style_1.default.action]}>
                <Icon_1.default name='minus' size={10} style={style_1.default.actionDisabled}/>
            </react_native_1.View>);
        }
        else {
            minusDom = (<react_native_1.TouchableOpacity onPress={this.minus.bind(this, value, step)}>
                    <react_native_1.View style={[style_1.default.action]}>
                        <Icon_1.default name='minus' size={10} style={activeAction}/>
                    </react_native_1.View>
                </react_native_1.TouchableOpacity>);
        }
        let plusDom = null;
        if (!canPlus || disabled) {
            plusDom = (<react_native_1.View style={[style_1.default.action]}>
                <Icon_1.default name='plus' size={10} style={style_1.default.actionDisabled}/>
            </react_native_1.View>);
        }
        else {
            plusDom = (<react_native_1.TouchableOpacity onPress={this.plus.bind(this, value, step)}>
                    <react_native_1.View style={[style_1.default.action]}>
                        <Icon_1.default name='plus' size={10} style={activeAction}/>
                    </react_native_1.View>
                </react_native_1.TouchableOpacity>);
        }
        const inputEditable = !disabled && editable;
        return (<react_native_1.View style={[style_1.default.wrap, style, activeWrap, { width }]} {...restProps}>
                {minusDom}
                <react_native_1.TextInput style={[style_1.default.textInput, activeInput]} value={stateValue + ''} editable={inputEditable} autoFocus={autoFocus} underlineColorAndroid='transparent' onChangeText={(text) => {
                onChange && onChange(text);
            }} onBlur={this.onBlur} onFocus={this.onFocus} selectTextOnFocus={true}/>
                <react_native_1.Text style={[style_1.default.unit, activeInput]}>{unit}</react_native_1.Text>
                {plusDom}
            </react_native_1.View>);
    }
}
exports.default = InputNumber;
InputNumber.defaultProps = {
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
//# sourceMappingURL=index.js.map