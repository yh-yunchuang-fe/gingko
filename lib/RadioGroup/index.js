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
 * @date 2018/3/20
 */
/**
 * TODO 后续需添加对mode = 'radio'的支持
 */
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const index_1 = __importDefault(require("./style/index"));
class RadioGroup extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.onChange = (index, item) => {
            const { onChange } = this.props;
            this.setState({ activeIndex: index });
            if (onChange) {
                onChange(index, item);
            }
        };
        let index = props.index ? props.index : (props.defaultIndex || 0);
        this.state = {
            activeIndex: index
        };
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.index != nextProps.index) {
            this.setState({
                index: nextProps.index
            });
        }
    }
    render() {
        const _a = this.props, { mode, radios, style } = _a, restProps = __rest(_a, ["mode", "radios", "style"]);
        if (mode !== 'button') {
            console.warn('暂支持button模式');
            return null;
        }
        const { activeIndex } = this.state;
        let dom = radios.map((item, index) => {
            let itemSty = null;
            let activeSty = null;
            let activeText = null;
            let cutLineSty = index_1.default.cutLineSty;
            if (index === 0) {
                itemSty = index_1.default.firstRadioBtn;
            }
            else if (index === radios.length - 1) {
                itemSty = index_1.default.lastRadioBtn;
                cutLineSty = null;
            }
            if (activeIndex === index) {
                activeSty = index_1.default.activeRadioBtn;
                activeText = index_1.default.activeRadioBtnText;
            }
            return (react_1.default.createElement(react_native_1.View, { style: cutLineSty, key: index },
                react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: this.onChange.bind(this, index, item) },
                    react_1.default.createElement(react_native_1.View, { style: [index_1.default.radioBtn, itemSty, activeSty] },
                        react_1.default.createElement(react_native_1.Text, { style: [index_1.default.radioBtnText, activeText] }, item)))));
        });
        return (react_1.default.createElement(react_native_1.View, { style: [index_1.default.radioGroup, style] }, dom));
    }
}
RadioGroup.defaultProps = {
    mode: 'button',
    defaultIndex: 0,
};
exports.default = RadioGroup;
//# sourceMappingURL=index.js.map