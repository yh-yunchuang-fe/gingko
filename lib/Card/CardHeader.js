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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const style_1 = __importDefault(require("./style"));
class CardHeader extends react_1.default.Component {
    render() {
        const _a = this.props, { children, style } = _a, restProps = __rest(_a, ["children", "style"]);
        const node = react_1.default.isValidElement(children) ? (react_1.default.createElement(react_native_1.View, { style: { flex: 1 } }, children)) : (react_1.default.createElement(react_native_1.Text, { style: style_1.default.headerContent }, children));
        return (react_1.default.createElement(react_native_1.View, Object.assign({ style: [style_1.default.headerTitle, style] }, restProps), node));
    }
}
CardHeader.defaultProps = {
    style: {}
};
exports.default = CardHeader;
//# sourceMappingURL=CardHeader.js.map