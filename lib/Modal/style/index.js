"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 * @date 2018/2/28
 */
const react_native_1 = require("react-native");
const variables_1 = __importDefault(require("../../../src/style/variables"));
exports.default = react_native_1.StyleSheet.create({
    container: {
        borderRadius: variables_1.default.radius,
        backgroundColor: variables_1.default.fill_base,
        paddingHorizontal: variables_1.default.h_spacing_lg,
        paddingVertical: variables_1.default.h_spacing_sm * 2,
        width: variables_1.default.modal_main_width,
        zIndex: variables_1.default.modal_main_zIndex,
    },
    header: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: variables_1.default.font_size_caption,
        color: variables_1.default.color_base,
        marginTop: variables_1.default.v_spacing_md,
    },
    body: {
        paddingTop: variables_1.default.v_spacing_md,
        paddingBottom: variables_1.default.v_spacing_lg,
        paddingHorizontal: variables_1.default.h_spacing_lg,
    },
    btnGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: variables_1.default.v_spacing_md,
    },
    singleBtn: {
        justifyContent: 'center',
    },
});
//# sourceMappingURL=index.js.map