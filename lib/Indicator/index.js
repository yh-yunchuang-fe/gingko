"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const style_1 = __importDefault(require("./style"));
const style_2 = __importDefault(require("@src/style"));
function Indicator(props) {
    const { text, size = 'md', source = require('../../src/assets/imgs/loading.gif'), style = {}, textStyle = {}, imgStyle = {} } = props;
    const sizeSty = {
        width: style_2.default[`indicator_${size}`] || size,
        height: style_2.default[`indicator_${size}`] || size
    };
    return (<react_native_1.View style={[style_1.default.indicator, style]}>
            <react_native_1.Image style={[sizeSty, imgStyle]} source={source}/>
            {text && <react_native_1.Text style={[style_1.default.tip, textStyle]}>{text}</react_native_1.Text>}
        </react_native_1.View>);
}
exports.default = Indicator;
//# sourceMappingURL=index.js.map