"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by beilunyang on 2018/2/28
 */
const react_native_1 = require("react-native");
exports.default = react_native_1.StyleSheet.create({
    indicator: {
        position: 'absolute',
        left: 0,
        top: -99,
        borderColor: '#aaa',
        borderTopWidth: react_native_1.StyleSheet.hairlineWidth,
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
    },
    scrollView: {
        height: 0,
    },
    selectedItemText: {
        color: '#333',
    },
    itemText: {
        fontSize: 22,
        lineHeight: 30,
        color: '#999',
        textAlign: 'center',
    },
});
