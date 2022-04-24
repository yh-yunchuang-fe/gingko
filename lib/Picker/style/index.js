"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by beilunyang on 2018/2/9
 */
const style_1 = __importDefault(require("@src/style"));
const react_native_1 = require("react-native");
exports.default = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: style_1.default.color_picker_body_bg,
    },
    header: {
        height: 58,
        backgroundColor: style_1.default.color_picker_header_bg,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
    },
    dismiss: {
        color: style_1.default.color_picker_action_cancel_font,
        fontSize: style_1.default.font_picker_action_cancel_size,
        fontWeight: '600',
    },
    ok: {
        color: style_1.default.color_picker_action_active_font,
        fontSize: style_1.default.font_picker_action_active_size,
        fontWeight: '600',
    },
    title: {
        color: style_1.default.color_picker_title_font,
        fontSize: style_1.default.font_picker_title_size,
        fontWeight: '600',
    },
});
//# sourceMappingURL=index.js.map