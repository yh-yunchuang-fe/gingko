"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const style_1 = __importDefault(require("@src/style"));
function WhiteSpace(props) {
    const { size = 'md', style } = props;
    return (<react_native_1.View style={[{ height: style_1.default[`v_spacing_${size}`] }, style]}/>);
}
exports.default = WhiteSpace;
//# sourceMappingURL=index.js.map