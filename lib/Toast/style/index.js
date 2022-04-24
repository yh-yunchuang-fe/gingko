"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by beilunyang on 2018/3/27
 */
const react_native_1 = require("react-native");
const style_1 = __importDefault(require("@src/style"));
exports.default = react_native_1.StyleSheet.create({
    container: {
        position: 'absolute',
        top: react_native_1.Platform.OS ? 64 : 54,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent',
        alignItems: 'center',
        zIndex: 1000,
    },
    innerContainer: {
        backgroundColor: style_1.default.color_toast_bg,
        borderRadius: style_1.default.radius_toast,
        paddingHorizontal: style_1.default.spacing_toast_default_paddingLeft,
        paddingVertical: style_1.default.spacing_toast_default_paddingTop,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: style_1.default.width_toast_default_bg_min,
        maxWidth: style_1.default.width_toast_default_bg_max
    },
    iconContainer: {
        paddingVertical: 6,
    },
    textContainer: {
        minHeight: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentText: {
        color: style_1.default.color_toast_font,
        fontSize: style_1.default.font_toast_default_size,
        // fontWeight: variables.font_toast_weight,
        lineHeight: style_1.default.font_toast_default_lineheight,
        textAlign: 'center',
    },
    loadingImg: {
        width: style_1.default.width_toast_withicon_icon,
        height: style_1.default.width_toast_withicon_icon
    }
});
//# sourceMappingURL=index.js.map