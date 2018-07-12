"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 * @date 2018/3/9
 */
const react_native_1 = require("react-native");
const variables_1 = __importDefault(require("../../../src/style/variables"));
exports.default = react_native_1.StyleSheet.create({
    wrap: {
        borderRadius: variables_1.default.radius_sm,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        overflow: 'visible',
    },
    content: {
        borderColor: variables_1.default.color_base,
        borderRadius: variables_1.default.radius_sm,
        borderWidth: variables_1.default.border_width,
        paddingHorizontal: variables_1.default.h_spacing_sm,
        paddingVertical: variables_1.default.v_spacing_xs,
        flexDirection: 'row',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: variables_1.default.font_size_base_xs,
    },
    textlargeSty: {
        fontSize: variables_1.default.font_size_caption_sm
    }
});
//# sourceMappingURL=index.js.map