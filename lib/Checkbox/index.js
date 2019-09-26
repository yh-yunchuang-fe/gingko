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
 * Created by beilunyang on 2018/3/14
 */
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const Icon_1 = __importDefault(require("../Icon"));
const style_1 = __importDefault(require("./style"));
const variables_1 = __importDefault(require("../../src/style/variables"));
class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = () => {
            const checked = !this.state.checked;
            if (!(typeof this.props.checked === 'boolean')) {
                this.setState({
                    checked,
                });
            }
            if (this.props.onChange) {
                this.props.onChange(checked);
            }
        };
        const { checked, defaultChecked } = this.props;
        let initChecked = false;
        if (typeof checked === 'boolean') {
            initChecked = checked;
        }
        else {
            initChecked = defaultChecked;
        }
        this.state = {
            checked: initChecked,
        };
    }
    componentWillReceiveProps(nextProps) {
        if (typeof nextProps.checked === 'boolean') {
            this.setState({
                checked: nextProps.checked,
            });
        }
    }
    renderIcon() {
        const { icon } = this.props;
        if (typeof icon === 'function') {
            const elements = icon({ checked: this.state.checked });
            if (React.isValidElement(elements)) {
                return elements;
            }
        }
        if (typeof icon === 'boolean' && icon) {
            const defaultIcon = (checked) => {
                const icon = checked ? 'checked' : 'radio-off';
                return (React.createElement(react_native_1.View, { style: style_1.default.icon },
                    React.createElement(Icon_1.default, { name: icon, color: variables_1.default.color_link })));
            };
            return defaultIcon(this.state.checked);
        }
        return null;
    }
    render() {
        const _a = this.props, { icon, onChange, defaultChecked, checked, dir, style, textStyle, disabled, children } = _a, restProps = __rest(_a, ["icon", "onChange", "defaultChecked", "checked", "dir", "style", "textStyle", "disabled", "children"]);
        let elements = null;
        if (React.isValidElement(children)) {
            elements = children;
        }
        if (typeof children === 'string') {
            elements = React.createElement(react_native_1.Text, { style: textStyle }, children);
        }
        return (React.createElement(react_native_1.TouchableOpacity, Object.assign({}, restProps, { onPress: this.handleClick, disabled: disabled }),
            React.createElement(react_native_1.View, { style: [style_1.default.container, style] },
                dir === 'left' ? this.renderIcon() : null,
                elements,
                dir === 'right' ? this.renderIcon() : null)));
    }
}
exports.default = Checkbox;
Checkbox.defaultProps = {
    icon: true,
    dir: 'left',
    defaultChecked: false,
    onChange() { },
    style: {},
    textStyle: {},
    disabled: false,
};
