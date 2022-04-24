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
 * Created by beilunyang on 2018/2/9
 */
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const style_1 = __importDefault(require("./style"));
const Icon_1 = __importDefault(require("../Icon"));
const fixControlledValue = (value) => {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
};
function InputItem(props) {
    const { title = '', ok = false, disabled = false, onBlur = () => { }, onFocus = () => { }, type = 'text', children, value, defaultValue, error, errorHint, style, inputStyle } = props, restProps = __rest(props, ["title", "ok", "disabled", "onBlur", "onFocus", "type", "children", "value", "defaultValue", "error", "errorHint", "style", "inputStyle"]);
    let inputRef;
    const clear = () => {
        const { onChange } = props;
        if (onChange && typeof onChange === 'function') {
            onChange('');
        }
    };
    const onChange = (text) => {
        switch (props.type) {
            case 'phone':
                text = text.replace(/\D/g, '');
                text = text.substring(0, 11);
                const textLen = text.length;
                if (textLen > 3 && textLen < 8) {
                    text = `${text.substr(0, 3)}-${text.substr(3)}`;
                }
                else if (textLen >= 8) {
                    text = `${text.substr(0, 3)}-${text.substr(3, 4)}-${text.substr(7)}`;
                }
                break;
            default:
        }
        props.onChange && props.onChange(text);
    };
    const onInputBlur = () => {
        const { onBlur, value } = props;
        onBlur && onBlur(value);
    };
    const onInputFocus = () => {
        const { onFocus, value } = props;
        onFocus && onFocus(value);
    };
    const renderIcon = () => {
        const { ok, error, value, } = props;
        if (error) {
            return (<Icon_1.default name='alert' color='#f00' size='lg'/>);
        }
        if (ok) {
            return (<Icon_1.default name='unchecked' color='#589c3e' size='lg'/>);
        }
        if (value && value.length > 0) {
            return (<react_native_1.TouchableOpacity onPress={clear}>
                    <Icon_1.default name='close-circle' color='#c2c2c2' size='lg'/>
                </react_native_1.TouchableOpacity>);
        }
        return null;
    };
    const keyboardTypeArray = ['default', 'email-address',
        'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation',
        'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search'];
    let keyboardType = 'default';
    if (type === 'number') {
        keyboardType = 'numeric';
    }
    else if (type === 'phone') {
        keyboardType = 'phone-pad';
    }
    else if (type && keyboardTypeArray.indexOf(type) > -1) {
        keyboardType = type;
    }
    let valueProps;
    if ('value' in props) {
        valueProps = {
            value: fixControlledValue(value),
        };
    }
    else {
        valueProps = {
            defaultValue,
        };
    }
    return (<react_native_1.View style={[{ flexDirection: 'row' }, style]}>
            <react_native_1.View style={style_1.default.container}>
                <react_native_1.Text style={style_1.default.label}>{children}</react_native_1.Text>
                <react_native_1.View style={[style_1.default.input, inputStyle]}>
                    <react_native_1.TextInput {...restProps} {...valueProps} onChange={(event) => onChange(event.nativeEvent.text)} onBlur={onInputBlur} onFocus={onInputFocus} secureTextEntry={type === 'password'} keyboardType={keyboardType} placeholderTextColor='#ddd' style={style_1.default.textInput} underlineColorAndroid='transparent' ref={(ref) => inputRef = ref}/>
                    {renderIcon()}
                </react_native_1.View>
                {error && errorHint ? <react_native_1.Text style={style_1.default.hintText}>{errorHint}</react_native_1.Text> : null}
            </react_native_1.View>
        </react_native_1.View>);
}
exports.default = InputItem;
//# sourceMappingURL=index.js.map