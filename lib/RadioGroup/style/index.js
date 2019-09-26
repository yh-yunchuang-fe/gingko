"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 * @date 2018/3/20
 */
const react_native_1 = require("react-native");
const variables_1 = __importDefault(require("../../../src/style/variables"));
const hairlineWidth = react_native_1.StyleSheet.hairlineWidth;
exports.default = react_native_1.StyleSheet.create({
    radioGroup: {
        flexDirection: 'row',
    },
    radioBtn: {
        paddingHorizontal: variables_1.default.h_spacing_lg,
        // paddingVertical: variables.v_spacing_sm,
        height: 28,
        justifyContent: 'center',
        backgroundColor: variables_1.default.fill_base,
        borderColor: variables_1.default.color_link,
        borderTopWidth: hairlineWidth,
        borderBottomWidth: hairlineWidth,
    },
    radioBtnText: {
        fontSize: variables_1.default.font_size_base_sm,
        color: variables_1.default.color_link,
    },
    firstRadioBtn: {
        borderTopLeftRadius: variables_1.default.radius_sm,
        borderBottomLeftRadius: variables_1.default.radius_sm,
        borderLeftWidth: hairlineWidth
    },
    lastRadioBtn: {
        borderTopRightRadius: variables_1.default.radius_sm,
        borderBottomRightRadius: variables_1.default.radius_sm,
        borderRightWidth: hairlineWidth
    },
    activeRadioBtn: {
        backgroundColor: variables_1.default.color_link,
    },
    activeRadioBtnText: {
        color: variables_1.default.color_white,
    },
    cutLineSty: {
        borderRightWidth: hairlineWidth,
        borderColor: variables_1.default.color_link,
    }
});
