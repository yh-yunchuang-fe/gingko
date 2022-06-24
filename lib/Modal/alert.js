"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 */
const style_1 = __importDefault(require("@src/style"));
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_root_view_1 = __importDefault(require("react-native-root-view"));
const index_1 = __importDefault(require("./index"));
const Alert = (props) => {
    const [visible, setVisible] = react_1.default.useState(true);
    const onClose = () => {
        setVisible(false);
    };
    const { title, actions, content, onAnimationEnd } = props;
    const footer = actions.map((button) => {
        const originPress = button.onPress || (() => { });
        button.onPress = () => {
            const res = originPress();
            if (res && res.then) {
                res.then(() => {
                    onClose();
                });
            }
            else {
                onClose();
            }
        };
        return button;
    });
    return <index_1.default transparent title={title} visible={visible} footer={footer} onAnimationEnd={onAnimationEnd}>
        {content ? <react_native_1.Text style={{
                textAlign: 'center',
                fontSize: style_1.default.font_alert_description_size,
                lineHeight: style_1.default.font_alert_description_lineheight
            }}>{content}</react_native_1.Text> : null}
    </index_1.default>;
};
const reference = {
    id: null
};
function alert(title, content, actions = [{ text: '确定' }]) {
    const onAnimationEnd = (data, visible) => {
        !visible && react_native_root_view_1.default.remove(data.id);
    };
    reference.id = react_native_root_view_1.default.set(<Alert title={title} content={content} actions={actions} onAnimationEnd={onAnimationEnd.bind(null, reference)}/>);
}
exports.default = alert;
//# sourceMappingURL=alert.js.map