"use strict";
/**
 * @author zhangyi
 * @date 2018/3/25
 * TODO 暂时不用使用navBar,而应该直接使用react-navigation
 */
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
const style_1 = __importDefault(require("./style"));
const Icon_1 = __importDefault(require("../Icon"));
class NarBar extends react_1.default.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const _a = this.props, { style, leftIcon = 'home', leftContent, rightContent, onLeftClick, children } = _a, restProps = __rest(_a, ["style", "leftIcon", "leftContent", "rightContent", "onLeftClick", "children"]);
        let leftDom = null;
        if (leftContent) {
            if (typeof leftContent === 'string') {
                leftDom = (react_1.default.createElement(react_native_1.Text, { style: style_1.default.leftText }, leftContent));
            }
            else {
                leftDom = leftContent;
            }
        }
        else {
            leftDom = (react_1.default.createElement(Icon_1.default, { name: leftIcon, style: style_1.default.leftIcon, size: 20 }));
        }
        leftDom = (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: onLeftClick },
            react_1.default.createElement(react_native_1.View, { style: style_1.default.leftWrap }, leftDom)));
        let childDom = null;
        if (children && typeof children === 'string') {
            childDom = (react_1.default.createElement(react_native_1.Text, { style: style_1.default.title }, children));
        }
        else {
            childDom = children;
        }
        return (react_1.default.createElement(react_native_1.View, Object.assign({ style: [style_1.default.navBar, style] }, restProps),
            leftDom,
            react_1.default.createElement(react_native_1.View, { style: style_1.default.content }, childDom),
            react_1.default.createElement(react_native_1.View, { style: style_1.default.rightWrap }, rightContent)));
    }
}
exports.default = NarBar;
NarBar.defaultProps = {
    style: null,
    leftIcon: 'back',
    leftContent: null,
    rightContent: null,
    onLeftClick: () => { }
};
