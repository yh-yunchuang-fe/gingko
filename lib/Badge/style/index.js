"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by beilunyang on 2018/3/7
 */
const react_native_1 = require("react-native");
const variables_1 = __importDefault(require("../../../src/style/variables"));
const grid = 4;
exports.default = react_native_1.StyleSheet.create({
    wrap: {
        flexDirection: 'row',
    },
    // cornerWrap: {
    //     overflow: 'hidden',
    // },
    textDom: {
        paddingVertical: 0.5 * grid,
        paddingHorizontal: (react_native_1.Platform.OS === 'ios' ? 1.5 : 2) * grid,
        backgroundColor: variables_1.default.fill_badge,
        borderRadius: 4 * (variables_1.default.radius_sm + 1),
        borderStyle: 'solid',
        position: 'absolute',
        top: react_native_1.Platform.OS === 'ios' ? -10 : 0,
        right: react_native_1.Platform.OS === 'ios' ? -10 : 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dot: {
        width: 2 * grid,
        height: 2 * grid,
        borderRadius: grid,
        backgroundColor: variables_1.default.fill_badge,
        position: 'absolute',
        top: -1 * grid,
        right: -1 * grid,
    },
    text: {
        textAlign: 'center',
        color: variables_1.default.color_white,
        fontSize: variables_1.default.font_size_tip + 1
    },
    imageTextDom: {
        paddingVertical: 0,
        paddingHorizontal: 0,
        backgroundColor: 'transparent',
        borderRadius: 0
    },
    imageBadge: {
        width: '100%',
        height: '100%'
    },
    imageTextBadge: {
        position: 'absolute',
        zIndex: 2
    }
    // cornerContainer: {
    //     position: 'absolute',
    //     top: 8,
    //     right: -20,
    //     width: 72,
    //     backgroundColor: variables.fill_badge,
    //     transform: [{
    //         rotateZ: '45deg',
    //     }],
    // },
    // // contentContainer: {
    // //     overflow: 'hidden',
    // // },
    // cornerText: {
    //     textAlign: 'center',
    //     color: variables.color_white,
    // },
    // small: {
    //     fontSize: variables.font_size_base_xs,
    //     lineHeight: variables.font_size_base_xs,
    //     color: variables.color_white,
    //     paddingVertical: variables.v_spacing_xs,
    //     paddingHorizontal: variables.h_spacing_sm,
    // },
    // dotSizelarge: {
    //     width: 4 * grid,
    //     height: 4 * grid,
    //     borderRadius: 2 * grid,
    // },
});
//# sourceMappingURL=index.js.map