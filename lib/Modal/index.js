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
const alert_1 = __importDefault(require("./alert"));
const style_2 = __importDefault(require("@src/style"));
function Modal(props) {
    const { visible = false, animationType = 'fade', animationDuration = 300, transparent = true, maskClosable = true, onClose = () => { }, onAnimationEnd = () => { }, style = {}, bodyStyle = {}, contentStyle = {}, title = '', content = '', footer = [], children } = props, restProps = __rest(props, ["visible", "animationType", "animationDuration", "transparent", "maskClosable", "onClose", "onAnimationEnd", "style", "bodyStyle", "contentStyle", "title", "content", "footer", "children"]);
    let footerDom = null;
    if (footer && footer.length) {
        if (footer.length === 1) {
            const _a = footer[0], { text, type, onPress, style } = _a, restProps = __rest(_a, ["text", "type", "onPress", "style"]);
            const onPressFn = () => {
                onPress && onPress();
                onClose && onClose();
            };
            const newType = type || 'primary';
            footerDom = (<react_native_1.View style={[style_1.default.btnGroup, style_1.default.singleBtn]}>
                    <Button_1.default {...restProps} type={newType} style={Object.assign({ width: '100%' }, style)} onClick={onPressFn}>{text}</Button_1.default>
                </react_native_1.View>);
        }
        if (footer.length === 2) {
            const buttons = footer.map((button, idx) => {
                const _a = button, { text, type, onPress, style } = _a, restProps = __rest(_a, ["text", "type", "onPress", "style"]);
                const onPressFn = () => {
                    onPress && onPress();
                    onClose && onClose();
                };
                const marginRight = (idx === 0) && { marginRight: style_2.default.spacing_alert_btnGroup_gap };
                return (<Button_1.default {...restProps} type={type} key={idx} style={Object.assign(Object.assign({ flex: 1 }, marginRight), style)} onClick={onPressFn}>{text}</Button_1.default>);
            });
            footerDom = (<react_native_1.View style={style_1.default.btnGroup}>
                    {buttons}
                </react_native_1.View>);
        }
        if (footer.length > 2) {
            console.warn('最多支持两个按钮');
        }
    }
    return (<Dialog_1.default visible={visible} onClose={onClose} {...restProps}>
            <react_native_1.View style={[style_1.default.container, style]}>
                {title ? <react_native_1.Text style={style_1.default.header}>{title}</react_native_1.Text> : null}
                {content ? <react_native_1.Text style={[style_1.default.modalText, contentStyle]}>{content}</react_native_1.Text> : null}
                <react_native_1.View style={bodyStyle}>
                    {children}
                </react_native_1.View>
                {footerDom}
            </react_native_1.View>
        </Dialog_1.default>);
}
Modal.alert = alert_1.default;
exports.default = Modal;
//# sourceMappingURL=index.js.map