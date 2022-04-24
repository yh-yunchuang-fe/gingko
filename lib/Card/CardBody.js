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
const __1 = require("../");
const style_1 = __importDefault(require("./style"));
function CardBody(_a) {
    var { style = {}, line = true } = _a, restProps = __rest(_a, ["style", "line"]);
    return <react_native_1.View style={style}>
        {line && <__1.Divider />}
        <react_native_1.View style={style_1.default.body} {...restProps}/>
    </react_native_1.View>;
}
exports.default = CardBody;
//# sourceMappingURL=CardBody.js.map