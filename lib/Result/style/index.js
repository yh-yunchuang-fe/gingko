"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 * @date 2018/3/28
 */
const react_native_1 = require("react-native");
const variables_1 = __importDefault(require("../../../src/style/variables"));
exports.default = react_native_1.StyleSheet.create({
    result: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        marginTop: 12,
        fontSize: variables_1.default.font_size_base,
        color: variables_1.default.color_base
    },
    message: {
        fontSize: variables_1.default.font_size_tip,
        color: variables_1.default.color_disabled,
        marginTop: 12,
    }
});
//# sourceMappingURL=index.js.map