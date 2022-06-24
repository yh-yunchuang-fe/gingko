"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const style_1 = __importDefault(require("@src/style"));
function WingBlank(props) {
    const { size = 'md', style = {}, children } = props;
    const margin = style_1.default[`h_spacing_${size}`];
    return (<react_native_1.View style={[{ marginHorizontal: margin }, style]}>
            {children}
        </react_native_1.View>);
}
exports.default = WingBlank;
//# sourceMappingURL=index.js.map