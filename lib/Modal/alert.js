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
            const originPress = button.onPress || (() => { });
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
        return (<modal_1.default transparent title={title} visible={this.state.visible} footer={footer} onAnimationEnd={onAnimationEnd}>
                {content ? <react_native_1.Text style={{
                    textAlign: 'center',
                    fontSize: variables_1.default.font_size_alert,
                    lineHeight: 21
                }}>{content}</react_native_1.Text> : null}
            </modal_1.default>);
    }
}
const reference = {
    id: null
};
function a(title, content, actions = [{ text: '确定' }]) {
    const onAnimationEnd = (references, visible) => {
        if (!visible) {
        }
    };
}
exports.default = a;
//# sourceMappingURL=alert.js.map