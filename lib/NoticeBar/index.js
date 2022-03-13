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
const index_1 = __importDefault(require("./style/index"));
const Icon_1 = __importDefault(require("../Icon"));
const variables_1 = __importDefault(require("../../src/style/variables"));
class NoticeBar extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.onClick = () => {
            const { mode, onClick } = this.props;
            if (onClick) {
                onClick();
            }
            if (mode === 'closeable') {
                this.setState({
                    show: false
                });
            }
        };
        this.state = {
            show: true
        };
    }
    render() {
        if (!this.state.show) {
            return null;
        }
        const { children, icon, action, color, mode, style, bgColor } = this.props;
        let operationDom = null;
        let actionDom = null;
        const colorSty = color ? { color } : null;
        if (action) {
            if (typeof action === 'string') {
                actionDom = (<react_native_1.Text style={[index_1.default.action, colorSty]}>{action}</react_native_1.Text>);
            }
            else {
                actionDom = action;
            }
        }
        if (mode === 'link') {
            operationDom = (<react_native_1.View style={index_1.default.actionWrap}>
                    {action ? actionDom : <Icon_1.default name='chevron-right' size={12} style={colorSty}/>}
                </react_native_1.View>);
        }
        else if (mode === 'closeable') {
            operationDom = (<react_native_1.TouchableWithoutFeedback onPress={this.onClick}>
                    <react_native_1.View style={index_1.default.actionWrap}>
                        {action ? actionDom : <Icon_1.default name='close' size={12} style={colorSty}/>}
                    </react_native_1.View>
                </react_native_1.TouchableWithoutFeedback>);
        }
        let childrenDom = null;
        if (typeof children === 'string') {
            childrenDom = (<react_native_1.Text style={[index_1.default.content, colorSty]}>{children}</react_native_1.Text>);
        }
        else {
            childrenDom = children;
        }
        const mainDom = (<react_native_1.View style={[index_1.default.noticeBar, style, { backgroundColor: bgColor }]}>
                {icon ? <Icon_1.default name={icon} size={14} style={[index_1.default.icon, colorSty]}/> : null}
                <react_native_1.View style={index_1.default.container}>
                    {children ? childrenDom : null}
                </react_native_1.View>
                {operationDom}
            </react_native_1.View>);
        return mode === 'link' ? (<react_native_1.TouchableWithoutFeedback onPress={this.onClick}>
                {mainDom}
            </react_native_1.TouchableWithoutFeedback>) : mainDom;
    }
}
exports.default = NoticeBar;
NoticeBar.defaultProps = {
    color: variables_1.default.color_label,
    mode: '',
    icon: '',
    action: '',
    bgColor: variables_1.default.fill_notice
};
//# sourceMappingURL=index.js.map