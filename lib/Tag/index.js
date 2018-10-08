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
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 * @date 2018/3/9
 */
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const index_1 = __importDefault(require("./style/index"));
const variables_1 = __importDefault(require("../../src/style/variables"));
class Tag extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.onClick = () => {
            const { readonly, onChange } = this.props;
            if (readonly) {
                return;
            }
            const isSelect = this.state.selected;
            this.setState({
                selected: !isSelect,
            }, () => {
                if (onChange) {
                    onChange(!isSelect);
                }
            });
        };
        this.state = {
            selected: props.selected,
        };
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.selected !== nextProps.selected) {
            this.setState({
                selected: nextProps.selected,
            });
        }
    }
    render() {
        const _a = this.props, { readonly, fill, color, children, style, size, textColor, textStyle, activeColor } = _a, restProps = __rest(_a, ["readonly", "fill", "color", "children", "style", "size", "textColor", "textStyle", "activeColor"]);
        const selected = this.state.selected;
        let sty = {};
        let textSty = {};
        if (fill) {
            sty = {
                backgroundColor: selected ? activeColor : color,
                borderWidth: 0
            };
            textSty = {
                color: textColor ? textColor : '#ffffff'
            };
        }
        else {
            sty = {
                borderColor: selected ? activeColor : color,
            };
            textSty = {
                color: selected ? activeColor : color,
            };
        }
        let textSizeSty = index_1.default[`text${size}Sty`];
        if (readonly) {
            return (react_1.default.createElement(react_native_1.View, { style: index_1.default.wrap },
                react_1.default.createElement(react_native_1.View, Object.assign({ style: [index_1.default.content, sty, style] }, restProps),
                    react_1.default.createElement(react_native_1.Text, { style: [index_1.default.text, textSizeSty, textSty, textStyle] }, children))));
        }
        else {
            return (react_1.default.createElement(react_native_1.View, { style: index_1.default.wrap },
                react_1.default.createElement(react_native_1.TouchableWithoutFeedback, { onPress: this.onClick },
                    react_1.default.createElement(react_native_1.View, Object.assign({ style: [index_1.default.content, sty, style] }, restProps),
                        react_1.default.createElement(react_native_1.Text, { style: [index_1.default.text, textSizeSty, textSty, textStyle] }, children)))));
        }
    }
}
Tag.defaultProps = {
    readonly: true,
    fill: false,
    color: variables_1.default.color_label,
    textColor: '',
    activeColor: variables_1.default.color_link,
    style: null,
    size: 'default',
    selected: false,
};
exports.default = Tag;
//# sourceMappingURL=index.js.map