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
const Indicator_1 = __importDefault(require("../Indicator"));
const style_1 = __importDefault(require("./style"));
const Icon_1 = __importDefault(require("../Icon"));
const style_2 = __importDefault(require("@src/style"));
function Button(props) {
    const { size = 'md', type = 'primary', solid = true, line = false, link = false, style = {}, textStyle = {}, loading = false, activeStyle = {}, onClick = (x) => { }, icon = {}, children } = props, restProps = __rest(props, ["size", "type", "solid", "line", "link", "style", "textStyle", "loading", "activeStyle", "onClick", "icon", "children"]);
    const [state, setState] = react_1.default.useState({
        pressIn: false,
        touchIt: false
    });
    const onPressIn = (...args) => {
        setState(Object.assign(Object.assign({}, state), { pressIn: true }));
        if (props.onPressIn) {
            props.onPressIn(...args);
        }
    };
    const onPressOut = (...args) => {
        setState(Object.assign(Object.assign({}, state), { pressIn: false }));
        if (props.onPressOut) {
            props.onPressOut(...args);
        }
    };
    const onShowUnderlay = (...arg) => {
        setState(Object.assign(Object.assign({}, state), { touchIt: true }));
        if (props.onShowUnderlay) {
            props.onShowUnderlay(...arg);
        }
    };
    const onHideUnderlay = (...arg) => {
        setState(Object.assign(Object.assign({}, state), { touchIt: false }));
        if (props.onHideUnderlay) {
            props.onHideUnderlay(...arg);
        }
    };
    ['activeOpacity', 'underlayColor', 'onPress', 'onPressIn',
        'onPressOut', 'onShowUnderlay', 'onHideUnderlay'].forEach((prop) => {
        if (restProps.hasOwnProperty(prop)) {
            delete restProps[prop];
        }
    });
    const currentBtn = (props === null || props === void 0 ? void 0 : props.line) ? 'line' : 'solid';
    const wrapperSty = [
        style_1.default.wrapperSty,
        {
            backgroundColor: link ? 'transparent' : style_2.default[`color_btn_${currentBtn}_${type}_bg`],
            borderColor: style_2.default[`color_btn_${currentBtn}_${type}_border`],
            borderRadius: style_2.default[`radius_btn_${size}`],
            paddingVertical: style_2.default[`spacing_btn_paddingTop_${size}`],
            paddingHorizontal: style_2.default[`spacing_btn_paddingLeft_${size}`],
        },
        style,
        activeStyle && state.touchIt && activeStyle,
    ];
    const textSty = [
        {
            color: link ? style_2.default[`color_btn_text_${type}_font`] : style_2.default[`color_btn_${currentBtn}_${type}_font`],
            fontSize: style_2.default[`font_btn_size_${size}`],
            lineHeight: style_2.default[`font_btn_lineheight_${size}`],
            fontWeight: style_2.default.font_btn_weight
        },
        textStyle
    ];
    const underlayColor = link ? `rgba(255,255,255, 0.1)` : style_2.default[`color_btn_${currentBtn}_${type}_bg`];
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
    return (<react_native_1.TouchableHighlight activeOpacity={0.3} underlayColor={underlayColor} onPress={(e) => { onClick && onClick(e); }} onPressIn={onPressIn} onPressOut={onPressOut} onShowUnderlay={onShowUnderlay} onHideUnderlay={onHideUnderlay} disabled={type === 'disable'} style={wrapperSty} {...restProps}>
            <react_native_1.View style={style_1.default.container}>
                {loading && <Indicator_1.default style={style_1.default.indicator}/>}
                {iconDom}
                {childrenDom}
            </react_native_1.View>
        </react_native_1.TouchableHighlight>);
}
exports.default = Button;
//# sourceMappingURL=index.js.map