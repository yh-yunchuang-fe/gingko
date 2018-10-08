"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 * @date 2018/3/24
 */
const react_native_1 = require("react-native");
const variables_1 = __importDefault(require("../../../src/style/variables"));
exports.default = react_native_1.StyleSheet.create({
    wrap: {
        height: variables_1.default.input_number_height,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: variables_1.default.input_number_fill,
        borderRadius: variables_1.default.radius,
        overflow: 'hidden'
    },
    activeWrap: {
        backgroundColor: variables_1.default.input_number_active_fill
    },
    action: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%"
    },
    // actionText: {
    //     color: variables.color_base,
    //     fontSize: 22,
    //     lineHeight: 22
    // },
    activeAction: {
        color: variables_1.default.color_link
    },
    actionDisabled: {
        color: variables_1.default.color_disabled
    },
    content: {
        flexDirection: 'row',
        flex: 1,
    },
    textInput: {
        fontSize: variables_1.default.font_size_base,
        color: variables_1.default.color_disabled,
        flex: 1,
        textAlign: 'right'
    },
    activeInput: {
        color: variables_1.default.color_link
    },
    unit: {
        fontSize: variables_1.default.font_size_tip,
        color: variables_1.default.color_disabled,
        marginLeft: variables_1.default.h_spacing_xs
    }
});
//# sourceMappingURL=index.js.map