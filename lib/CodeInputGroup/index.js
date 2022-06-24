"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const style_1 = __importDefault(require("./style"));
function CodeInputGroup(props) {
    const { style, inputWrapStyle, inputStyle, size = 6, autoFocus = false, onChange } = props, restProps = __rest(props, ["style", "inputWrapStyle", "inputStyle", "size", "autoFocus", "onChange"]);
    const defaultVal = `${props.defaultValue}` || '';
    const [values, setValues] = (0, react_1.useState)(defaultVal);
    const onChangeText = (val) => {
        if (isNaN(val)) {
            val = values;
        }
        setValues(val);
        props.onChange && props.onChange(val);
    };
    const onFocus = () => {
        props.onFocus && props.onFocus();
    };
    const onBlur = () => {
        props.onBlur && props.onBlur();
    };
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
            <react_native_1.TextInput value={values} style={style_1.default.textInput} keyboardType='numeric' autoFocus={autoFocus} underlineColorAndroid='transparent' onChangeText={onChangeText} onFocus={onFocus} onBlur={onBlur} maxLength={size}/>
        </react_native_1.View>);
}
exports.default = CodeInputGroup;
//# sourceMappingURL=index.js.map