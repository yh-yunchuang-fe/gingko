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
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const index_1 = require("../index");
const style_1 = __importDefault(require("./style"));
const Icon_1 = __importDefault(require("../Icon"));
class Button extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.onPressIn = (...args) => {
            this.setState({ pressIn: true });
            if (this.props.onPressIn) {
                this.props.onPressIn(...args);
            }
        };
        this.onPressOut = (...args) => {
            this.setState({ pressIn: false });
            if (this.props.onPressOut) {
                this.props.onPressOut(...args);
            }
        };
        this.onShowUnderlay = (...arg) => {
            this.setState({ touchIt: true });
            if (this.props.onShowUnderlay) {
                this.props.onShowUnderlay(...arg);
            }
        };
        this.onHideUnderlay = (...arg) => {
            this.setState({ touchIt: false });
            if (this.props.onHideUnderlay) {
                this.props.onHideUnderlay(...arg);
            }
        };
        this.state = {
            pressIn: false,
            touchIt: false
        };
    }
    render() {
        const _a = this.props, { size, type, style, textStyle, disabled, activeStyle, onClick, loading, icon, children } = _a, restProps = __rest(_a, ["size", "type", "style", "textStyle", "disabled", "activeStyle", "onClick", "loading", "icon", "children"]);
        ['activeOpacity', 'underlayColor', 'onPress', 'onPressIn',
            'onPressOut', 'onShowUnderlay', 'onHideUnderlay'].forEach((prop) => {
            if (restProps.hasOwnProperty(prop)) {
                delete restProps[prop];
            }
        });
        const wrapperSty = [
            style_1.default.wrapperSty,
            style_1.default[`${size}Sty`],
            style_1.default[`${type}Sty`],
            disabled && style_1.default[`${type}DisabledSty`],
            // this.state.pressIn && activeStyle && btnStyles[`${type}TapSty`],
            activeStyle && this.state.touchIt && activeStyle,
            style
        ];
        const textSty = [
            style_1.default[`${size}Text`],
            style_1.default[`${type}Text`],
            disabled && style_1.default[`${type}DisabledText`],
            this.state.pressIn && style_1.default[`${type}TapText`],
            textStyle
        ];
        const underlayColor = react_native_1.StyleSheet.flatten(style_1.default[activeStyle ? `${type}TapSty` : `${type}Sty`]).backgroundColor;
        let iconDom;
        if (icon) {
            if (typeof icon === 'string') {
                iconDom = (<react_native_1.View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon_1.default name={icon} style={style_1.default.iconSty}/>
                    </react_native_1.View>);
            }
            else if (typeof icon === 'object' && !!icon.name) {
                iconDom = (<react_native_1.View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon_1.default name={icon.name} color={icon.color} size={icon.size} style={[style_1.default.iconSty, icon.style]}/>
                    </react_native_1.View>);
            }
        }
        let childrenDom;
        if (react_1.default.isValidElement(children)) {
            childrenDom = children;
        }
        else {
            childrenDom = <react_native_1.Text style={[style_1.default.text, textSty]} numberOfLines={1}>{children}</react_native_1.Text>;
        }
        return (<react_native_1.TouchableHighlight activeOpacity={1} underlayColor={underlayColor} onPress={(e) => { onClick && onClick(e); }} onPressIn={this.onPressIn} onPressOut={this.onPressOut} onShowUnderlay={this.onShowUnderlay} onHideUnderlay={this.onHideUnderlay} disabled={disabled} style={wrapperSty} {...restProps}>
                <react_native_1.View style={style_1.default.container}>
                    {loading ? <index_1.Indicator style={style_1.default.indicator} color={type === 'primary' ? 'white' : 'blue'}/> : null}
                    {iconDom}
                    {childrenDom}
                </react_native_1.View>
            </react_native_1.TouchableHighlight>);
    }
}
exports.default = Button;
Button.defaultProps = {
    size: 'large',
    type: 'default',
    disabled: false,
    style: {},
    textStyle: {},
    loading: false,
    activeStyle: {},
    onClick: (x) => { },
    onPressIn: (x) => { },
    onPressOut: (x) => { },
    icon: {}
};
//# sourceMappingURL=index.js.map