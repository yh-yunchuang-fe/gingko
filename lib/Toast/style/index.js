"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by beilunyang on 2018/3/27
 */
const react_native_1 = require("react-native");
const variables_1 = __importDefault(require("../../../src/style/variables"));
exports.default = react_native_1.StyleSheet.create({
    container: {
        position: 'absolute',
        top: react_native_1.PlatformIOS ? 64 : 54,
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