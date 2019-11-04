"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const variables_1 = __importDefault(require("../../src/style/variables"));
class WhiteSpace extends react_1.default.Component {
    render() {
        const { size, style } = this.props;
        return (react_1.default.createElement(react_native_1.View, { style: [{ height: variables_1.default[`v_spacing_${size}`] }, style] }));
    }
}
WhiteSpace.defaultProps = {
    size: 'md',
};
exports.default = WhiteSpace;
//# sourceMappingURL=index.js.map