"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const variables_1 = __importDefault(require("../../../src/style/variables"));
exports.default = react_native_1.StyleSheet.create({
    wrapperSty: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: variables_1.default.border_width,
        borderRadius: variables_1.default.radius
    },
    container: {
        flexDirection: 'row',
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    defaultSty: {
        backgroundColor: variables_1.default.btn_default_fill,
        borderColor: variables_1.default.color_link
    },
    defaultTapSty: {
        backgroundColor: variables_1.default.btn_default_fill_tap,
        borderColor: variables_1.default.color_link_tap
    },
    defaultDisabledSty: {
        // backgroundColor: variables.btn_default_disabled,
        borderColor: variables_1.default.btn_default_disabled
    },
    defaultText: {
        color: variables_1.default.color_link,
    },
    defaultTapText: {
        color: variables_1.default.color_link_tap,
    },
    defaultDisabledText: {
        color: variables_1.default.btn_default_disabled
    },
    primarySty: {
        backgroundColor: variables_1.default.btn_primary_fill,
        borderColor: variables_1.default.color_link
    },
    primaryTapSty: {
        backgroundColor: variables_1.default.btn_primary_fill_tap,
        borderColor: variables_1.default.color_link_tap
    },
    primaryDisabledSty: {
        backgroundColor: variables_1.default.btn_primary_disabled,
        borderColor: variables_1.default.btn_primary_disabled
    },
    primaryText: {
        color: variables_1.default.color_white,
    },
    primaryTapText: {
    // color: variables.color_white,
    },
    primaryDisabledText: {
    // color: variables.color_white,
    },
    warningSty: {
        backgroundColor: variables_1.default.btn_warning_fill,
        borderColor: variables_1.default.color_warning
    },
    warningTapSty: {
        backgroundColor: variables_1.default.btn_warning_fill_tap,
        borderColor: variables_1.default.color_warning_tap,
    },
    warningDisabledSty: {
        opacity: .3
    },
    warningText: {
        color: variables_1.default.color_warning
    },
    warningTapText: {
        color: variables_1.default.color_warning_tap
    },
    largeSty: {
        height: variables_1.default.btn_height,
        paddingHorizontal: variables_1.default.h_spacing_md,
    },
    smallSty: {
        height: variables_1.default.btn_height_sm,
        paddingHorizontal: variables_1.default.h_spacing_sm
    },
    largeText: {
        fontSize: variables_1.default.btn_font_size,
    },
    smallText: {
        fontSize: variables_1.default.btn_font_size_sm,
    },
    indicator: {
        marginRight: variables_1.default.h_spacing_md
    },
    iconSty: {
        marginRight: variables_1.default.h_spacing_md
    }
});
//# sourceMappingURL=index.js.map