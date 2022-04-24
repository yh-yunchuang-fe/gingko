"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 * @date 2018/5/5
 */
const react_native_1 = require("react-native");
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
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
        borderColor: '#FE8F1D',
    },
    inputWrap: {
        width: 45,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
        borderColor: '#FE8F1D',
    },
    input: {
        fontSize: 24,
        textAlign: 'center',
    }
});
//# sourceMappingURL=index.js.map