"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
                const iconName = checked ? 'checked' : 'radio-off';
                return (<react_native_1.View style={style_1.default.icon}>
                        <Icon_1.default name={iconName} color={variables_1.default.color_link}/>
                    </react_native_1.View>);
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
            elements = <react_native_1.Text style={textStyle}>{children}</react_native_1.Text>;
        }
        return (<react_native_1.TouchableOpacity {...restProps} onPress={this.handleClick} disabled={disabled}>
                <react_native_1.View style={[style_1.default.container, style]}>
                    {dir === 'left' ? this.renderIcon() : null}
                    {elements}
                    {dir === 'right' ? this.renderIcon() : null}
                </react_native_1.View>
            </react_native_1.TouchableOpacity>);
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
//# sourceMappingURL=index.js.map