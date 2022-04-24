"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by beilunyang on 2018/2/28
 */
const style_1 = __importDefault(require("@src/style"));
const react_native_1 = require("react-native");
exports.default = react_native_1.StyleSheet.create({
    indicator: {
        position: 'absolute',
        left: 0,
        top: -99,
        backgroundColor: '#F5F5F5',
    },
    scrollView: {
        height: 0,
    },
    selectedItemText: {
        color: style_1.default.color_picker_action_cancel_font,
    },
    itemText: {
        fontSize: style_1.default.font_picker_item_size_selected,
        lineHeight: 48,
        color: style_1.default.color_picker_item_font_selected,
        textAlign: 'center',
    },
});
//# sourceMappingURL=Picker.android.js.map