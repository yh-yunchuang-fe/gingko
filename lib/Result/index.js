"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 * @date 2018/3/28
 */
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const index_1 = __importDefault(require("./style/index"));
const Icon_1 = __importDefault(require("../Icon"));
class Result extends react_1.default.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { style, img, title, message } = this.props;
        let titleDom = null;
        if (title) {
            if (react_1.default.isValidElement(title)) {
                titleDom = title;
            }
            else if (typeof title === 'string') {
                titleDom = <react_native_1.Text style={index_1.default.title}>{title}</react_native_1.Text>;
            }
        }
        let messageDom = null;
        if (message) {
            if (react_1.default.isValidElement(message)) {
                messageDom = message;
            }
            else if (typeof message === 'string') {
                messageDom = <react_native_1.Text style={index_1.default.message}>{message}</react_native_1.Text>;
            }
        }
        return (<react_native_1.View style={[index_1.default.result, style]}>
                {img}
                {titleDom}
                {messageDom}
            </react_native_1.View>);
    }
}
exports.default = Result;
Result.defaultProps = {
    img: <Icon_1.default name='alert' size={40}/>,
    message: '暂无数据'
};
//# sourceMappingURL=index.js.map