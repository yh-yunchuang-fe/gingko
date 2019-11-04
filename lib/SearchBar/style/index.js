"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 * @date 2018/3/15
 */
const react_native_1 = require("react-native");
const variables_1 = __importDefault(require("../../../src/style/variables"));
exports.default = react_native_1.StyleSheet.create({
    wrapper: {
        backgroundColor: variables_1.default.search_bar_fill,
        height: variables_1.default.search_bar_height,
        paddingHorizontal: variables_1.default.h_spacing_lg,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputWrapper: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: variables_1.default.radius,
        backgroundColor: variables_1.default.search_bar_input_fill,
        height: variables_1.default.search_bar_input_height,
        paddingVertical: 0,
        // paddingHorizontal: variables.h_spacing_md + 2,
        alignItems: 'center'
    },
    input: {
        height: variables_1.default.search_bar_input_height,
        flex: 1,
        paddingVertical: 0,
        // marginHorizontal: variables.h_spacing_md - 1,
        color: variables_1.default.color_base,
        fontSize: variables_1.default.font_size_base - 1,
    },
    searchIcon: {
        fontSize: 14,
        color: '#aaa',
        marginLeft: variables_1.default.h_spacing_md + 2,
        marginRight: variables_1.default.h_spacing_md - 1,
    },
    deleteIcon: {
        color: '#C2C2C2',
        paddingLeft: variables_1.default.h_spacing_md - 1,
        paddingRight: variables_1.default.h_spacing_md + 2,
    },
    cancel: {
        height: variables_1.default.search_bar_input_height,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        marginRight: -50,
    },
    cancelText: {
        fontSize: variables_1.default.font_size_base,
        color: variables_1.default.color_link,
        paddingLeft: variables_1.default.h_spacing_lg
    }
});
//# sourceMappingURL=index.js.map