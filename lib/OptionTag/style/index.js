"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 * @date 2018/4/20
 */
const react_native_1 = require("react-native");
const variables_1 = __importDefault(require("../../../src/style/variables"));
const border_disabled = variables_1.default.border_color;
const text_disabled = '#ccc';
exports.default = react_native_1.StyleSheet.create({
    wrap: {
        borderRadius: variables_1.default.radius_sm,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        overflow: 'visible',
    },
    content: {
        backgroundColor: variables_1.default.fill_base,
        borderWidth: variables_1.default.border_width,
        borderColor: variables_1.default.border_color,
        borderRadius: variables_1.default.radius_sm,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        width: 102,
        height: 40,
        flexDirection: 'row',
    },
    text: {
        fontSize: variables_1.default.font_size_base_sm,
        color: variables_1.default.color_label
    },
    active: {
        backgroundColor: '#E7F7FF',
        borderColor: '#E7F7FF'
    },
    activeText: {
        color: variables_1.default.color_link
    },
    disabled: {
        borderColor: border_disabled,
        backgroundColor: variables_1.default.fill_base
    },
    disabledText: {
        color: text_disabled
    },
    multiple: {
        backgroundColor: variables_1.default.color_link,
        width: 26,
        height: 17,
        transform: [{
                rotate: '-45deg',
            }],
        position: 'absolute',
        bottom: -5,
        right: -10
    },
    multipleIcon: {
        position: 'absolute',
        top: 1,
        left: 8,
        transform: [{
                rotate: '35deg',
            }],
    }
});
//# sourceMappingURL=index.js.map