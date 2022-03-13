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
 * @date 2018/5/5
 */
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const style_1 = __importDefault(require("./style/"));
function noop() { }
class CodeInputGroup extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.onChangeText = (values) => {
            const { onChange } = this.props;
            const preValues = this.state.values;
            if (isNaN(values)) {
                values = preValues;
            }
            this.setState({
                values
            });
            console.log('values----s: ', values);
            onChange && onChange(values);
        };
        this.onFocus = () => {
            const { onFocus } = this.props;
            onFocus && onFocus();
        };
        this.onBlur = () => {
            const { onBlur } = this.props;
            onBlur && onBlur();
        };
        const values = props.defaultValue + '' || '';
        this.state = {
            values
        };
    }
    render() {
        const _a = this.props, { style, inputWrapStyle, inputStyle, size = 6, autoFocus, onChange } = _a, restProps = __rest(_a, ["style", "inputWrapStyle", "inputStyle", "size", "autoFocus", "onChange"]);
        const { values } = this.state;
        const arrValues = values.split('');
        const node = [];
        for (let i = 0; i < size; i++) {
            node.push(<react_native_1.View style={[style_1.default.inputWrap, inputWrapStyle]} key={i}>
                    <react_native_1.Text style={[style_1.default.input, inputStyle]}>
                        {arrValues[i] || ''}
                    </react_native_1.Text>
                </react_native_1.View>);
        }
        return (<react_native_1.View style={[style_1.default.wrap, style]} {...restProps}>
                {node}
                <react_native_1.TextInput value={values} style={style_1.default.textInput} keyboardType='numeric' autoFocus={autoFocus} underlineColorAndroid='transparent' onChangeText={this.onChangeText} onFocus={this.onFocus} onBlur={this.onBlur} maxLength={size}/>
            </react_native_1.View>);
    }
}
exports.default = CodeInputGroup;
CodeInputGroup.defaultProps = {
    defaultValue: '',
    size: 6,
    autoFocus: false,
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
};
//# sourceMappingURL=index.js.map