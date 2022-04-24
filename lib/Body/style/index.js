"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by suki on 2018/12/13.
 */
const react_native_1 = require("react-native");
const screenUtils_1 = require("@utils/screenUtils");
exports.default = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: screenUtils_1.isIphoneX ? 20 : 0,
        backgroundColor: '#FFFFFF',
    },
    children: {
        flex: 1,
    }
});
//# sourceMappingURL=index.js.map