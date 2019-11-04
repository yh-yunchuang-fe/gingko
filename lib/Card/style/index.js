"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const variables_1 = __importDefault(require("../../../src/style/variables"));
exports.default = react_native_1.StyleSheet.create({
    card: {
        borderRadius: variables_1.default.radius,
        backgroundColor: variables_1.default.fill_base,
        flexDirection: 'column'
    },
    full: {
        borderRadius: 0
    },
    body: {
        flexGrow: 1,
        paddingVertical: variables_1.default.v_spacing_md,
        paddingHorizontal: variables_1.default.h_spacing_lg,
        borderTopWidth: variables_1.default.border_width,
        borderColor: variables_1.default.border_color_base,
    },
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: variables_1.default.v_spacing_md,
        paddingHorizontal: variables_1.default.h_spacing_lg
    },
    headerContent: {
        color: variables_1.default.color_base,
        fontSize: variables_1.default.font_size_caption,
    },
    footer: {
        flexDirection: 'row',
        paddingVertical: variables_1.default.v_spacing_sm,
        paddingHorizontal: variables_1.default.h_spacing_lg,
    },
    footerContent: {
        fontSize: variables_1.default.font_size_base,
        color: variables_1.default.color_text_caption,
    },
});
//# sourceMappingURL=index.js.map