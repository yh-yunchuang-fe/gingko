"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 * @date 2018/3/19
 */
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const style_1 = __importDefault(require("./style"));
const Icon_1 = __importDefault(require("../Icon"));
const style_2 = __importDefault(require("@src/style"));
function NoticeBar(props) {
    const { style, color = style_2.default.color_noticeBar_icon, mode = '', icon = '', action = '', bgColor = style_2.default.color_noticeBar_bg, children } = props;
    const [show, setShow] = react_1.default.useState(true);
    if (!show) {
        return null;
    }
    const onClick = () => {
        props.onClick && props.onClick();
        if (props.mode === 'closeable') {
            setShow(false);
        }
    };
    let operationDom = null;
    let actionDom = null;
    const colorSty = color ? { color } : {};
    if (action) {
        if (typeof action === 'string') {
            actionDom = (<react_native_1.Text style={[style_1.default.action, colorSty]}>{action}</react_native_1.Text>);
        }
        else {
            actionDom = action;
        }
    }
    if (mode === 'link') {
        operationDom = (<react_native_1.View style={style_1.default.actionWrap}>
                {action ? actionDom : <Icon_1.default name='chevron-right' size={12} style={colorSty}/>}
            </react_native_1.View>);
    }
    else if (mode === 'closeable') {
        operationDom = (<react_native_1.TouchableWithoutFeedback onPress={onClick}>
                <react_native_1.View style={style_1.default.actionWrap}>
                    {action ? actionDom : <Icon_1.default name='close' size={12} style={colorSty}/>}
                </react_native_1.View>
            </react_native_1.TouchableWithoutFeedback>);
    }
    let childrenDom = null;
    if (typeof children === 'string') {
        childrenDom = <react_native_1.Text style={[style_1.default.content, colorSty]}>{children}</react_native_1.Text>;
    }
    else {
        childrenDom = children;
    }
    const mainDom = (<react_native_1.View style={[style_1.default.noticeBar, style, { backgroundColor: bgColor }]}>
            {!!icon && <Icon_1.default name={icon} size={style_2.default.font_noticeBar_size} style={[style_1.default.icon, colorSty]}/>}
            {!!children && <react_native_1.View style={style_1.default.container}>{childrenDom}</react_native_1.View>}
            {operationDom}
        </react_native_1.View>);
    return mode === 'link' ? (<react_native_1.TouchableWithoutFeedback onPress={onClick}>
            {mainDom}
        </react_native_1.TouchableWithoutFeedback>) : mainDom;
}
exports.default = NoticeBar;
//# sourceMappingURL=index.js.map