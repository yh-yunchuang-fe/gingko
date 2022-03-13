"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const variables_1 = __importDefault(require("../../src/style/variables"));
class WingBlank extends react_1.default.Component {
    render() {
        const { size, style, children } = this.props;
        const margin = variables_1.default[`h_spacing_${size}`];
        return (<react_native_1.View style={[{ marginHorizontal: margin }, style]}>
                {children}
            </react_native_1.View>);
    }
}
exports.default = WingBlank;
WingBlank.defaultProps = {
    size: 'lg',
    style: {}
};
//# sourceMappingURL=index.js.map