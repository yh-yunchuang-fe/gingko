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
 * @date 2018/3/15
 */
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Icon_1 = __importDefault(require("../Icon"));
const index_1 = __importDefault(require("./style/index"));
const variables_1 = __importDefault(require("../../src/style/variables"));
function noop() { }
class SearchBar extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.duration = 200;
        this.clearInput = () => {
            const { onClear } = this.props;
            this.setState({
                value: '',
                showDelete: false
            });
            onClear && onClear();
        };
        this.onChangeText = (value) => {
            const { onChange } = this.props;
            if (value != '') {
                this.setState({
                    value,
                    showDelete: true
                });
            }
            else {
                this.setState({
                    value,
                    showDelete: false
                });
            }
            onChange && onChange(value);
        };
        this.onFocus = () => {
            this.setState({
                focus: true
            });
            react_native_1.Animated.timing(this.state.rightAnim, {
                toValue: 1,
                duration: this.duration
            }).start();
            if (this.props.onFocus) {
                this.props.onFocus();
            }
        };
        this.onBlur = () => {
            this.setState({
                focus: false
            });
            this.searchInput.blur();
            react_native_1.Animated.timing(this.state.rightAnim, {
                toValue: 0,
                duration: this.duration
            }).start();
            if (this.props.onBlur) {
                this.props.onBlur();
            }
        };
        this.onCancel = () => {
            this.onBlur();
            if (this.props.onCancel) {
                this.props.onCancel(this.state.value);
            }
        };
        this.onSubmit = (e) => {
            e.preventDefault();
            if (this.props.onSubmit) {
                this.props.onSubmit(this.state.value);
            }
        };
        const value = (props.value || props.defaultValue) || '';
        const showDelete = !!(value && this.props.autoFocus);
        this.state = {
            value,
            showDelete,
            focus: false,
            rightAnim: new react_native_1.Animated.Value(0),
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.value && nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value,
                showDelete: nextProps.value != ''
            });
        }
    }
    render() {
        const _a = this.props, { placeholder, showCancel, cancelText, cancelColor, style, autoFocus, onChange, onSubmit, onFocus, onBlur, onCancel, onClear } = _a, restProps = __rest(_a, ["placeholder", "showCancel", "cancelText", "cancelColor", "style", "autoFocus", "onChange", "onSubmit", "onFocus", "onBlur", "onCancel", "onClear"]);
        const { value, showDelete } = this.state;
        const slide = {
            marginRight: this.state.rightAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [-50, 0]
            })
        };
        return (react_1.default.createElement(react_native_1.View, { style: index_1.default.wrapper },
            react_1.default.createElement(react_native_1.View, { style: index_1.default.inputWrapper },
                react_1.default.createElement(Icon_1.default, { style: index_1.default.searchIcon, name: "search" }),
                react_1.default.createElement(react_native_1.TextInput, Object.assign({}, restProps, { ref: (searchInput) => { this.searchInput = searchInput; }, autoFocus: autoFocus, value: value, placeholder: placeholder, style: [index_1.default.input, style], underlineColorAndroid: "transparent", clearButtonMode: "never", onChangeText: this.onChangeText, onFocus: this.onFocus, onBlur: this.onBlur, onSubmitEditing: this.onSubmit })),
                showDelete &&
                    react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: this.clearInput },
                        react_1.default.createElement(Icon_1.default, { name: "close-circle", size: 18, style: index_1.default.deleteIcon }))),
            showCancel &&
                react_1.default.createElement(react_native_1.Animated.View, { style: [index_1.default.cancel, slide] },
                    react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: this.onCancel },
                        react_1.default.createElement(react_native_1.Text, { style: [index_1.default.cancelText, { color: cancelColor }] }, cancelText)))));
    }
}
SearchBar.defaultProps = {
    defaultValue: '',
    placeholder: 'Search',
    showCancel: true,
    cancelText: '取消',
    cancelColor: variables_1.default.color_base,
    autoFocus: false,
    onSubmit: noop,
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
    onCancel: noop,
    onClear: noop
};
exports.default = SearchBar;
//# sourceMappingURL=index.js.map