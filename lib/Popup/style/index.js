"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 * @date 2018/2/28
 */
const react_native_1 = require("react-native");
const variables_1 = __importDefault(require("../../../src/style/variables"));
const screen = react_native_1.Dimensions.get('window');
exports.default = react_native_1.StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: variables_1.default.fill_base,
        width: screen.width
    }
});
//# sourceMappingURL=index.js.map