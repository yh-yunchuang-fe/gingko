"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 * @date 2018/3/19
 */
const react_native_1 = require("react-native");
const variables_1 = __importDefault(require("../../../src/style/variables"));
exports.default = react_native_1.StyleSheet.create({
    noticeBar: {
        overflow: 'hidden',
        flexDirection: 'row',
        paddingVertical: 11,
        paddingLeft: 15
    },
    icon: {
        marginRight: 5,
    },
    container: {
        flex: 1,
        overflow: 'hidden',
        marginRight: variables_1.default.h_spacing_lg
    },
    content: {
        fontSize: variables_1.default.font_size_base_sm,
    },
    actionWrap: {
        marginRight: variables_1.default.h_spacing_lg
    },
    actionIcon: {},
    action: {
        fontSize: variables_1.default.font_size_base_sm,
    }
});
//# sourceMappingURL=index.js.map