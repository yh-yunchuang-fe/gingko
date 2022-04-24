"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
function Badge(props) {
    const { style = {}, dot = false, image = false, source, overflowCount = 99, bgColor = '#FF0000', color = '#FFFFFF', cornerContent = null, badgeStyle = {}, badgeTextStyle = {}, imageBadgeStyle = {}, top = -10, right = -10, // 不要超过容器宽度的1/2 to do 兼容任何数字
    children } = props, restProps = __rest(props, ["style", "dot", "image", "source", "overflowCount", "bgColor", "color", "cornerContent", "badgeStyle", "badgeTextStyle", "imageBadgeStyle", "top", "right", "children"]);
    let contentElement = null;
    const contentStyle = {
        paddingHorizontal: Math.abs(right),
        paddingTop: Math.abs(top)
    };
    const textDomExtraStyle = {
        top: react_native_1.Platform.OS === 'ios' ? top : 0,
        right: react_native_1.Platform.OS === 'ios' ? right : 0,
    };
    let text = props.text;
    if (cornerContent) {
        contentElement = cornerContent;
    }
    else {
        if (overflowCount && typeof text === 'number' && text > overflowCount) {
            text = `${overflowCount}+`;
        }
        console.log('text===', text);
        if (dot) {
            contentElement = (<react_native_1.View {...restProps} style={[style_1.default.dot]}/>);
        }
        else if (image) {
            const imgStyle = Object.assign({ width: '100%', height: '100%' }, imageBadgeStyle);
            contentElement = (<react_native_1.View {...restProps} style={[style_1.default.textDom, style_1.default.imageTextDom, textDomExtraStyle, badgeStyle]}>
                    <react_native_1.Image source={source} style={imgStyle}/>
                    <react_native_1.Text style={[style_1.default.text, { color }, style_1.default.imageTextBadge, badgeTextStyle]}>{text}</react_native_1.Text>
                </react_native_1.View>);
        }
        else if (!!text) {
            contentElement = (<react_native_1.View {...restProps} style={[style_1.default.textDom, textDomExtraStyle, { backgroundColor: bgColor }, badgeStyle]}>
                    <react_native_1.Text style={[style_1.default.text, { color }, badgeTextStyle]}>{text}</react_native_1.Text>
                </react_native_1.View>);
        }
    }
    return (<react_native_1.View style={[style_1.default.wrap, react_native_1.Platform.OS === 'ios' ? {} : contentStyle, style]}>
            {children}
            {contentElement}
        </react_native_1.View>);
}
exports.default = Badge;
//# sourceMappingURL=index.js.map