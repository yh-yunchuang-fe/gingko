"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 */
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_root_view_1 = __importDefault(require("react-native-root-view"));
const modal_1 = __importDefault(require("./modal"));
const variables_1 = __importDefault(require("../../src/style/variables"));
class Alert extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.onClose = () => {
            this.setState({
                visible: false,
            });
        };
        this.state = {
            visible: true,
        };
    }
    render() {
        const { title, actions, content, onAnimationEnd } = this.props;
        const footer = actions.map((button) => {
            const originPress = button.onPress || function () { };
            button.onPress = () => {
                const res = originPress();
                if (res && res.then) {
                    res.then(() => {
                        this.onClose();
                    });
                }
                else {
                    this.onClose();
                }
            };
            return button;
        });
        return (react_1.default.createElement(modal_1.default, { transparent: true, title: title, visible: this.state.visible, footer: footer, onAnimationEnd: onAnimationEnd }, content ? react_1.default.createElement(react_native_1.Text, { style: {
                textAlign: 'center',
                fontSize: variables_1.default.font_size_alert,
                lineHeight: 21
            } }, content) : null));
    }
}
const reference = {
    id: null
};
function a(title, content, actions = [{ text: '确定' }]) {
    const onAnimationEnd = (reference, visible) => {
        if (!visible) {
            react_native_root_view_1.default.remove(reference.id);
        }
    };
    reference.id = react_native_root_view_1.default.set(react_1.default.createElement(Alert, { title: title, content: content, actions: actions, onAnimationEnd: onAnimationEnd.bind(null, reference) }));
}
exports.default = a;
