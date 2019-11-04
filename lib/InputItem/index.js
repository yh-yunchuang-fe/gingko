"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
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
const index_1 = __importDefault(require("./style/index"));
const Icon_1 = __importDefault(require("../Icon"));
const fixControlledValue = (value) => {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
};
class InputItem extends React.Component {
    constructor() {
        super(...arguments);
        this.clear = () => {
            const { onChange } = this.props;
            if (onChange && typeof onChange === 'function') {
                onChange('');
            }
        };
        this.onChange = (text) => {
            const { onChange, type } = this.props;
            switch (type) {
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
            if (onChange) {
                onChange(text);
            }
        };
        this.onInputBlur = () => {
            const { onBlur, value } = this.props;
            if (onBlur) {
                onBlur(value);
            }
        };
        this.onInputFocus = () => {
            const { onFocus, value } = this.props;
            if (onFocus) {
                onFocus(value);
            }
        };
        this.renderIcon = () => {
            const { ok, error, value, } = this.props;
            if (error) {
                return (React.createElement(Icon_1.default, { name: "alert", color: "#f00", size: "lg" }));
            }
            if (ok) {
                return (React.createElement(Icon_1.default, { name: "unchecked", color: "#589c3e", size: "lg" }));
            }
            if (value && value.length > 0) {
                return (React.createElement(react_native_1.TouchableOpacity, { onPress: this.clear },
                    React.createElement(Icon_1.default, { name: "close-circle", color: "#c2c2c2", size: "lg" })));
            }
            return null;
        };
    }
    render() {
        const _a = this.props, { value, defaultValue, type, error, errorHint, children, style, inputStyle } = _a, restProps = __rest(_a, ["value", "defaultValue", "type", "error", "errorHint", "children", "style", "inputStyle"]);
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
        if ('value' in this.props) {
            valueProps = {
                value: fixControlledValue(value),
            };
        }
        else {
            valueProps = {
                defaultValue,
            };
        }
        return (React.createElement(react_native_1.View, { style: [{ flexDirection: 'row' }, style] },
            React.createElement(react_native_1.View, { style: index_1.default.container },
                React.createElement(react_native_1.Text, { style: index_1.default.label }, children),
                React.createElement(react_native_1.View, { style: [index_1.default.input, inputStyle] },
                    React.createElement(react_native_1.TextInput, Object.assign({}, restProps, valueProps, { onChange: (event) => this.onChange(event.nativeEvent.text), onBlur: this.onInputBlur, onFocus: this.onInputFocus, secureTextEntry: type === 'password', keyboardType: keyboardType, placeholderTextColor: "#ddd", style: index_1.default.textInput, underlineColorAndroid: "transparent", ref: ref => this.inputRef = ref })),
                    this.renderIcon()),
                error && errorHint ? React.createElement(react_native_1.Text, { style: index_1.default.hintText }, errorHint) : null)));
    }
}
InputItem.defaultProps = {
    title: '',
    ok: false,
    disabled: false,
    onChange: () => { },
    onBlur: () => { },
    onFocus: () => { },
    type: 'text',
};
exports.default = InputItem;
//# sourceMappingURL=index.js.map