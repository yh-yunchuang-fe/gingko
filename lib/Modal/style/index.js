"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const style_1 = __importDefault(require("@src/style"));
const react_native_1 = require("react-native");
exports.default = react_native_1.StyleSheet.create({
    container: {
        borderRadius: style_1.default.radius_alert_bg,
        backgroundColor: style_1.default.color_alert_bg,
        paddingHorizontal: style_1.default.spacing_alert_paddingLeft,
        paddingTop: style_1.default.spacing_alert_paddingTop,
        paddingBottom: style_1.default.spacing_alert_paddingBottom,
        width: style_1.default.width_alert_bg_max,
        zIndex: 999,
    },
    header: {
        fontWeight: '600',
        textAlign: 'center',
        fontSize: style_1.default.font_alert_title_size,
        lineHeight: style_1.default.font_alert_title_lineheight,
        color: style_1.default.color_alert_font,
        marginBottom: style_1.default.spacing_alert_Title_marginBottom
    },
    btnGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: style_1.default.spacing_alert_btnGroup_marginTop,
        marginHorizontal: style_1.default.spacing_alert_btnGroup_marginLeft
    },
    singleBtn: {
        justifyContent: 'center',
    },
    modalText: {
        fontSize: style_1.default.font_alert_description_size,
        color: style_1.default.color_alert_font,
        textAlign: 'center',
        lineHeight: style_1.default.font_alert_description_lineheight,
    },
});
//# sourceMappingURL=index.js.map