"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: your name
 * @Date: 2021-09-01 17:56:38
 * @LastEditTime: 2022-03-11 15:01:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gingko/components/Toast/style/index.tsx
 */
/**
 * Created by beilunyang on 2018/3/27
 */
const react_native_1 = require("react-native");
const variables_1 = __importDefault(require("../../../src/style/variables"));
exports.default = react_native_1.StyleSheet.create({
    container: {
        position: 'absolute',
        top: react_native_1.Platform.OS ? 64 : 54,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent',
        alignItems: 'center',
        zIndex: variables_1.default.toast_zIndex,
    },
    innerContainer: {
        backgroundColor: 'rgba(0, 0, 0, .8)',
        borderRadius: variables_1.default.radius,
        paddingHorizontal: 10,
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 90,
    },
    iconContainer: {
        paddingTop: 10,
        paddingBottom: 8,
    },
    textContainer: {
        minHeight: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentText: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 21,
        textAlign: 'center',
    },
});
//# sourceMappingURL=index.js.map