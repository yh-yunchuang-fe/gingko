"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 */
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Dialog_1 = __importDefault(require("../Dialog"));
const Button_1 = __importDefault(require("../Button"));
const style_1 = __importDefault(require("./style"));
const variables_1 = __importDefault(require("../../src/style/variables"));
class GkModal extends react_1.default.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const _a = this.props, { visible, style, title, bodyStyle, children, footer, onClose } = _a, restProps = __rest(_a, ["visible", "style", "title", "bodyStyle", "children", "footer", "onClose"]);
        let footerDom = null;
        if (footer && footer.length) {
            if (footer.length === 1) {
                const _b = footer[0], { text, type, onPress, style } = _b, restProps = __rest(_b, ["text", "type", "onPress", "style"]);
                const onPressFn = () => {
                    if (onPress) {
                        onPress();
                    }
                    if (onClose) {
                        onClose();
                    }
                };
                let newType = type || 'primary';
                footerDom = (react_1.default.createElement(react_native_1.View, { style: [style_1.default.btnGroup, style_1.default.singleBtn] },
                    react_1.default.createElement(Button_1.default, Object.assign({}, restProps, { type: newType, style: Object.assign({ width: variables_1.default.modal_single_btn_width }, style), onClick: onPressFn }), text)));
            }
            if (footer.length === 2) {
                const buttons = footer.map((button, idx) => {
                    const _a = button, { text, type, onPress, style } = _a, restProps = __rest(_a, ["text", "type", "onPress", "style"]);
                    const onPressFn = () => {
                        if (onPress) {
                            onPress();
                        }
                        if (onClose) {
                            onClose();
                        }
                    };
                    return (react_1.default.createElement(Button_1.default, Object.assign({}, restProps, { type: type, key: idx, style: Object.assign({ width: variables_1.default.modal_group_btn_width }, style), onClick: onPressFn }), text));
                });
                footerDom = (react_1.default.createElement(react_native_1.View, { style: style_1.default.btnGroup }, buttons));
            }
            if (footer.length > 2) {
                console.warn('最多支持两个按钮');
            }
        }
        return (react_1.default.createElement(Dialog_1.default, Object.assign({ visible: visible, onClose: onClose }, restProps),
            react_1.default.createElement(react_native_1.View, { style: [style_1.default.container, style] },
                title ? react_1.default.createElement(react_native_1.Text, { style: style_1.default.header }, title) : null,
                react_1.default.createElement(react_native_1.View, { style: [style_1.default.body, bodyStyle] }, children),
                footerDom)));
    }
}
GkModal.defaultProps = {
    visible: false,
    animationType: 'fade',
    animationDuration: 300,
    animateAppear: false,
    transparent: true,
    maskClosable: true,
    onClose: () => { },
    onAnimationEnd: () => { },
    style: {},
    bodyStyle: {},
    title: '',
    footer: []
};
exports.default = GkModal;
//# sourceMappingURL=modal.js.map