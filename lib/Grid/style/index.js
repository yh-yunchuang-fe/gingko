"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const variables_1 = __importDefault(require("../../../src/style/variables"));
exports.default = react_native_1.StyleSheet.create({
    gridContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    gridRow: {
        flexDirection: 'row',
        borderColor: variables_1.default.border_color_base,
    },
    gridItem: {
        borderColor: variables_1.default.border_color_base,
        backgroundColor: variables_1.default.fill_base,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 22,
        height: 22,
    },
    text: {
        fontSize: variables_1.default.font_size_caption_sm,
        color: variables_1.default.color_base,
        marginTop: variables_1.default.v_spacing_md,
    }
});
