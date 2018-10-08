"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by beilunyang on 2018/2/9
 */
const react_native_1 = require("react-native");
const variables_1 = __importDefault(require("../../../src/style/variables"));
exports.default = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontSize: variables_1.default.font_size_caption_sm,
        color: variables_1.default.color_label,
        lineHeight: variables_1.default.font_size_caption_sm + variables_1.default.line_height_plus_md,
    },
    input: {
        backgroundColor: variables_1.default.color_white,
        padding: variables_1.default.h_spacing_sm * 2,
        marginTop: variables_1.default.h_spacing_sm,
        borderRadius: variables_1.default.radius,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textInput: {
        fontSize: variables_1.default.font_size_base,
        color: variables_1.default.color_base,
        height: variables_1.default.font_size_base + variables_1.default.line_height_plus_md,
        flex: 1,
        padding: 0,
    },
    hintIcon: {
        marginHorizontal: variables_1.default.h_spacing_md,
    },
    hintText: {
        color: variables_1.default.color_warning,
        fontSize: variables_1.default.font_size_tip,
        margin: variables_1.default.h_spacing_sm,
        lineHeight: variables_1.default.font_size_tip + variables_1.default.line_height_plus_md,
    },
});
//# sourceMappingURL=index.js.map