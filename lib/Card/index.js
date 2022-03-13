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
const CardHeader_1 = __importDefault(require("./CardHeader"));
const CardBody_1 = __importDefault(require("./CardBody"));
const CardFooter_1 = __importDefault(require("./CardFooter"));
const style_1 = __importDefault(require("./style"));
class Card extends react_1.default.Component {
    render() {
        const _a = this.props, { full, style, children } = _a, restProps = __rest(_a, ["full", "style", "children"]);
        const fullSty = full ? style_1.default.full : {};
        const childDom = react_1.default.Children.map(children, (child) => react_1.default.cloneElement(child));
        return (<react_native_1.View style={[style_1.default.card, style, fullSty]} {...restProps}>
                {childDom}
            </react_native_1.View>);
    }
}
exports.default = Card;
Card.defaultProps = {
    full: false,
    style: {},
};
Card.Header = CardHeader_1.default;
Card.Body = CardBody_1.default;
Card.Footer = CardFooter_1.default;
//# sourceMappingURL=index.js.map