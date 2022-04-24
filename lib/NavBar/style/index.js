"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 * @date 2018/3/25
 */
const react_native_1 = require("react-native");
exports.default = react_native_1.StyleSheet.create({
    navBar: {
        height: 44,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        paddingHorizontal: 55,
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightWrap: {
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftWrap: {
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftIcon: {
        color: '#333333'
    },
    leftText: {
        fontSize: 16,
        color: '#333333'
    }
});
//# sourceMappingURL=index.js.map