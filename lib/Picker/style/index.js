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
        backgroundColor: variables_1.default.color_white,
    },
    dismiss: {
        color: "#666",
        fontSize: variables_1.default.btn_font_size_sm,
    },
    header: {
        alignItems: "center",
        backgroundColor: "#f4f5f6",
        flexDirection: "row",
        height: 42,
        justifyContent: "space-between",
        paddingHorizontal: variables_1.default.h_spacing_lg,
    },
    ok: {
        color: variables_1.default.color_link,
        fontSize: variables_1.default.btn_font_size_sm,
    },
    title: {
        color: variables_1.default.color_base,
        fontSize: variables_1.default.btn_font_size_sm,
    },
});
