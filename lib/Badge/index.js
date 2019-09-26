"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by beilunyang on 2018/3/7
 */
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const style_1 = __importDefault(require("./style"));
const variables_1 = __importDefault(require("../../src/style/variables"));
class Badge extends React.Component {
    render() {
        const _a = this.props, { bgColor, color, style, overflowCount, cornerContent, children, dot, image, source, badgeStyle, badgeTextStyle, imageBadgeStyle, top, right } = _a, restProps = __rest(_a, ["bgColor", "color", "style", "overflowCount", "cornerContent", "children", "dot", "image", "source", "badgeStyle", "badgeTextStyle", "imageBadgeStyle", "top", "right"]);
        let { text } = this.props;
        let contentElement = null;
        let contentStyle = {
            paddingHorizontal: Math.abs(right),
            paddingTop: Math.abs(top)
        };
        let textDomExtraStyle = {
            top: react_native_1.Platform.OS === 'ios' ? top : 0,
            right: react_native_1.Platform.OS === 'ios' ? right : 0,
        };
        // if (corner && cornerContent) {
        //     contentElement = (
        //         <View style={styles}>
        //
        //         </View>
        //     )
        // } else {
        if (cornerContent) {
            contentElement = cornerContent;
        }
        else {
            if (overflowCount && typeof text === 'number' && text > overflowCount) {
                text = `${overflowCount}+`;
            }
            if (dot) {
                contentElement = (React.createElement(react_native_1.View, Object.assign({}, restProps, { style: [style_1.default.dot] })));
            }
            else if (image) {
                const imgStyle = Object.assign({ width: '100%', height: '100%' }, imageBadgeStyle);
                contentElement = (React.createElement(react_native_1.View, Object.assign({}, restProps, { style: [style_1.default.textDom, style_1.default.imageTextDom, textDomExtraStyle, badgeStyle] }),
                    React.createElement(react_native_1.Image, { source: source, style: imgStyle }),
                    React.createElement(react_native_1.Text, { style: [style_1.default.text, { color: color }, style_1.default.imageTextBadge, badgeTextStyle] }, text)));
            }
            else {
                contentElement = (React.createElement(react_native_1.View, Object.assign({}, restProps, { style: [style_1.default.textDom, textDomExtraStyle, { backgroundColor: bgColor }, badgeStyle] }),
                    React.createElement(react_native_1.Text, { style: [style_1.default.text, { color: color }, badgeTextStyle] }, text)));
            }
        }
        return (React.createElement(react_native_1.View, { style: [style_1.default.wrap, react_native_1.Platform.OS === 'ios' ? {} : contentStyle, style] },
            children,
            contentElement));
    }
}
exports.default = Badge;
Badge.defaultProps = {
    text: '',
    style: {},
    dot: false,
    image: false,
    source: '',
    overflowCount: 99,
    bgColor: variables_1.default.fill_badge,
    color: variables_1.default.color_white,
    cornerContent: null,
    badgeStyle: {},
    badgeTextStyle: {},
    imageBadgeStyle: {},
    top: -10,
    right: -10 //不要超过容器宽度的1/2 to do 兼容任何数字
    // corner: false,
    // cornerContent: null
};
