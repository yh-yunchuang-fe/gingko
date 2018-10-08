"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 * @date 2018/3/25
 */
const react_native_1 = require("react-native");
const variables_1 = __importDefault(require("../../../src/style/variables"));
exports.default = react_native_1.StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        height: variables_1.default.nav_bar_height,
        backgroundColor: variables_1.default.nav_bar_fill,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: variables_1.default.font_size_caption,
        color: variables_1.default.color_base,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightWrap: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftWrap: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftIcon: {
        color: variables_1.default.color_base
    },
    leftText: {
        fontSize: variables_1.default.font_size_base,
        color: variables_1.default.color_base
    }
});
//# sourceMappingURL=index.js.map