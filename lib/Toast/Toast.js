"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by beilunyang on 2018/3/27
 */
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Icon_1 = __importDefault(require("../Icon"));
const Indicator_1 = __importDefault(require("../Indicator"));
const style_1 = __importDefault(require("./style"));
class Toast extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            fadeAnim: new react_native_1.Animated.Value(0),
        };
        this.anim = null;
        this.ownIcon = false;
    }
    componentDidMount() {
        const { type, onClose, duration, animationEnd, } = this.props;
        if (duration < 0) {
            console.warn('duration can not less than or equal to 0');
            return;
        }
        const start = react_native_1.Animated.timing(this.state.fadeAnim, {
            toValue: 1,
            duration: 200,
        });
        const end = react_native_1.Animated.timing(this.state.fadeAnim, {
            toValue: 0,
            duration: 200,
        });
        const survival = react_native_1.Animated.delay(duration);
        if (duration > 0 && type !== 'loading') {
            this.anim = react_native_1.Animated.sequence([start, survival, end]);
        }
        else {
            this.anim = react_native_1.Animated.sequence([start, survival]);
        }
        this.anim.start(() => {
            this.anim = null;
            if (duration > 0 && type !== 'loading') {
                onClose && onClose();
                animationEnd && animationEnd();
            }
        });
    }
    componentWillUnmount() {
        if (this.anim) {
            this.anim.stop();
            this.anim = null;
        }
    }
    renderIcon() {
        const { type, icon } = this.props;
        if (type === 'loading') {
            return (react_1.default.createElement(react_native_1.View, { style: style_1.default.iconContainer },
                react_1.default.createElement(Indicator_1.default, { size: "xl", color: "white" })));
        }
        let iconName = '';
        switch (type) {
            case 'success':
                iconName = 'unchecked';
                break;
            case 'fail':
                iconName = 'close-circle-o';
                break;
            case 'warn':
                iconName = 'alert';
                break;
        }
        if (iconName) {
            this.ownIcon = true;
            return (react_1.default.createElement(react_native_1.View, { style: style_1.default.iconContainer },
                react_1.default.createElement(Icon_1.default, { name: iconName, color: "#fff", size: 32 })));
        }
        if (react_1.default.isValidElement(icon)) {
            this.ownIcon = true;
            return (react_1.default.createElement(react_native_1.View, { style: style_1.default.iconContainer }, icon));
        }
        if (typeof icon === 'function') {
            const elements = icon();
            if (react_1.default.isValidElement(elements)) {
                this.ownIcon = true;
                return (react_1.default.createElement(react_native_1.View, { style: style_1.default.iconContainer }, elements));
            }
            console.warn('icon must a function that can render reactElements');
            return null;
        }
        return null;
    }
    renderContent() {
        const { content } = this.props;
        if (typeof content === 'string') {
            return (react_1.default.createElement(react_native_1.View, { style: [
                    style_1.default.textContainer,
                    this.ownIcon ? { justifyContent: 'flex-start', paddingBottom: 4 } : null
                ] },
                react_1.default.createElement(react_native_1.Text, { style: style_1.default.contentText }, content)));
        }
        if (react_1.default.isValidElement(content)) {
            return (react_1.default.createElement(react_native_1.View, { style: style_1.default.textContainer }, content));
        }
        return null;
    }
    render() {
        const { style, mask, position, } = this.props;
        let sty = null;
        switch (position) {
            case 'top':
                sty = { position: 'absolute', top: 80 };
                break;
            case 'bottom':
                sty = { position: 'absolute', bottom: 80 };
        }
        return (react_1.default.createElement(react_native_1.View, { style: [style_1.default.container, position === 'center' ? { justifyContent: 'center' } : null], pointerEvents: mask ? undefined : "box-none" },
            react_1.default.createElement(react_native_1.Animated.View, { style: [
                    style_1.default.innerContainer,
                    sty,
                    style,
                    { opacity: this.state.fadeAnim },
                ] },
                this.renderIcon(),
                this.renderContent())));
    }
}
Toast.defaultProps = {
    duration: 2000,
    animationEnd: () => { },
    onClose: () => { },
    position: 'center',
    mask: false,
    style: {},
};
exports.default = Toast;
//# sourceMappingURL=Toast.js.map