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
                titleDom = react_1.default.createElement(react_native_1.Text, { style: index_1.default.title }, title);
            }
        }
        let messageDom = null;
        if (message) {
            if (react_1.default.isValidElement(message)) {
                messageDom = message;
            }
            else if (typeof message === 'string') {
                messageDom = react_1.default.createElement(react_native_1.Text, { style: index_1.default.message }, message);
            }
        }
        return (react_1.default.createElement(react_native_1.View, { style: [index_1.default.result, style] },
            img,
            titleDom,
            messageDom));
    }
}
Result.defaultProps = {
    img: react_1.default.createElement(Icon_1.default, { name: "alert", size: 40 }),
    message: '暂无数据'
};
exports.default = Result;
//# sourceMappingURL=index.js.map