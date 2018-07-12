"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 * @date 2018/4/20
 */
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Icon_1 = __importDefault(require("../Icon"));
const index_1 = __importDefault(require("./style/index"));
class OptionTag extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.onChange = () => {
            const { selected } = this.state;
            const { onChange } = this.props;
            console.log('selected:', selected);
            this.setState({
                selected: !selected
            });
            onChange && onChange(!selected);
        };
        this.state = {
            selected: props.selected,
        };
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.selected != nextProps.selected) {
            this.setState({
                selected: nextProps.selected
            });
        }
    }
    render() {
        const _a = this.props, { width, height, children, style, textStyle, disabled, multiple, onChange, renderText } = _a, restProps = __rest(_a, ["width", "height", "children", "style", "textStyle", "disabled", "multiple", "onChange", "renderText"]);
        const selected = this.state.selected;
        let offsetSty = {
            width,
            height
        };
        if (disabled) {
            return (react_1.default.createElement(react_native_1.View, { style: index_1.default.wrap },
                react_1.default.createElement(react_native_1.View, { style: [index_1.default.content, style, index_1.default.disabled, offsetSty] }, renderText ? renderText(selected) :
                    react_1.default.createElement(react_native_1.Text, { style: [index_1.default.text, textStyle, index_1.default.disabledText] }, children))));
        }
        let activeSty = null;
        let activeTextSty = null;
        let multipleNode = null;
        if (selected) {
            activeSty = index_1.default.active;
            activeTextSty = index_1.default.activeText;
            if (multiple) {
                multipleNode = (react_1.default.createElement(react_native_1.View, { style: index_1.default.multiple },
                    react_1.default.createElement(Icon_1.default, { style: index_1.default.multipleIcon, name: "checkmark", size: 6, color: "#fff" })));
            }
        }
        return (react_1.default.createElement(react_native_1.View, { style: index_1.default.wrap },
            react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: this.onChange },
                react_1.default.createElement(react_native_1.View, Object.assign({ style: [index_1.default.content, style, activeSty, offsetSty] }, restProps),
                    renderText ? renderText(selected) :
                        react_1.default.createElement(react_native_1.Text, { style: [index_1.default.text, textStyle, activeTextSty] }, children),
                    multipleNode))));
    }
}
OptionTag.defaultProps = {
    disabled: false,
    multiple: false,
    selected: false,
    width: 102,
    height: 40
};
exports.default = OptionTag;
//# sourceMappingURL=index.js.map