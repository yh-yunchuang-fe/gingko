"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const variables_1 = __importDefault(require("../../../src/style/variables"));
exports.default = react_native_1.StyleSheet.create({
    indicator: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    spinner: {},
    tip: {
        fontSize: variables_1.default.font_size_base,
        color: variables_1.default.color_text_caption,
        marginLeft: variables_1.default.h_spacing_md
    }
});
//# sourceMappingURL=index.js.map