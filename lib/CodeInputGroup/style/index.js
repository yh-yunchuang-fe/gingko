"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 * @date 2018/5/5
 */
const react_native_1 = require("react-native");
const variables_1 = __importDefault(require("../../../src/style/variables"));
exports.default = react_native_1.StyleSheet.create({
    wrap: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    textInput: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 40,
        fontSize: 24,
        textAlign: 'center',
        opacity: 0,
        borderBottomWidth: variables_1.default.border_width,
        borderColor: variables_1.default.color_link,
    },
    inputWrap: {
        width: 45,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: variables_1.default.border_width,
        borderColor: variables_1.default.color_link,
    },
    input: {
        fontSize: 24,
        textAlign: 'center',
    }
});
//# sourceMappingURL=index.js.map