"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by suki on 2018/12/13.
 */
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const style_1 = __importDefault(require("./style"));
class Body extends React.Component {
    render() {
        const { style, children } = this.props;
        return (React.createElement(react_native_1.View, { style: [style_1.default.container, style] }, children));
    }
}
Body.defaultProps = {
    style: null
};
exports.default = Body;
//# sourceMappingURL=index.js.map