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
const style_1 = __importDefault(require("./style"));
function CardFooter(_a) {
    var { style = {}, children } = _a, restProps = __rest(_a, ["style", "children"]);
    const node = react_1.default.isValidElement(children) ? (<react_native_1.View style={{ flex: 1 }}>{children}</react_native_1.View>) : (<react_native_1.Text style={style_1.default.footerContent}>{children}</react_native_1.Text>);
    return (<react_native_1.View style={[style_1.default.footer, style]} {...restProps}>
            {node}
        </react_native_1.View>);
}
exports.default = CardFooter;
//# sourceMappingURL=CardFooter.js.map