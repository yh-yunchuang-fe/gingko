"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 * @date 2018/2/28
 */
const react_1 = __importDefault(require("react"));
const Dialog_1 = __importDefault(require("../Dialog"));
const style_1 = __importDefault(require("./style"));
class Popup extends react_1.default.Component {
    render() {
        const { visible, maskClosable, animateAppear, onAnimationEnd, onClose, style, children, animationDuration } = this.props;
        return (<Dialog_1.default transparent visible={visible} animationType='slide-up' animateAppear={animateAppear} animationDuration={animationDuration} onClose={onClose} maskClosable={maskClosable} onAnimationEnd={onAnimationEnd} style={[style, style_1.default.container]}>
                {children}
            </Dialog_1.default>);
    }
}
exports.default = Popup;
Popup.defaultProps = {
    visible: false,
    animateAppear: true,
    animationDuration: 300,
    maskClosable: true,
    onClose: () => { },
    onAnimationEnd: () => { },
    style: {},
};
//# sourceMappingURL=index.js.map