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
 * @date 2018/4/18
 */
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Icon_1 = __importDefault(require("../Icon"));
const index_1 = __importDefault(require("./style/index"));
function noop() { }
class SearchInput extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.searchInput = null;
        this.isControlledComponent = () => {
            return this.props.hasOwnProperty('value');
        };
        this.clearInput = () => {
            this.setState({
                value: '',
                showDelete: false
            });
            if (this.props.onClear) {
                this.props.onClear();
            }
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
            if (this.props.onFocus) {
                this.props.onFocus();
            }
        };
        this.onBlur = () => {
            this.setState({
                focus: false
            });
            this.searchInput.blur();
            if (this.props.onBlur) {
                this.props.onBlur();
            }
        };
        this.onSubmit = (e) => {
            e.preventDefault();
            if (this.props.onSubmit) {
                this.props.onSubmit(this.state.value);
            }
        };
        const value = (this.isControlledComponent() ? props.value : props.defaultValue) || '';
        const showDelete = !!value;
        this.state = {
            value,
            showDelete,
            focus: false,
        };
    }
    componentWillReceiveProps(nextProps) {
        if (this.isControlledComponent() && nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value,
                showDelete: nextProps.value != ''
            });
        }
    }
    render() {
        const _a = this.props, { placeholder, style, autoFocus, wrapStyle, onChange, onSubmit, onFocus, onBlur, onClear } = _a, restProps = __rest(_a, ["placeholder", "style", "autoFocus", "wrapStyle", "onChange", "onSubmit", "onFocus", "onBlur", "onClear"]);
        const { value, showDelete } = this.state;
        return (react_1.default.createElement(react_native_1.View, { style: [index_1.default.inputWrapper, wrapStyle] },
            react_1.default.createElement(Icon_1.default, { style: index_1.default.searchIcon, name: "search" }),
            react_1.default.createElement(react_native_1.TextInput, Object.assign({}, restProps, { ref: (searchInput) => { this.searchInput = searchInput; }, autoFocus: autoFocus, value: value, placeholder: placeholder, style: [index_1.default.input, style], underlineColorAndroid: "transparent", clearButtonMode: "never", onChangeText: this.onChangeText, onFocus: this.onFocus, onBlur: this.onBlur, onSubmitEditing: this.onSubmit })),
            showDelete &&
                react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: this.clearInput },
                    react_1.default.createElement(Icon_1.default, { name: "close-circle", size: 18, style: index_1.default.deleteIcon }))));
    }
}
SearchInput.defaultProps = {
    defaultValue: '',
    placeholder: 'Search',
    autoFocus: false,
    onSubmit: noop,
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
    onClear: noop
};
exports.default = SearchInput;
//# sourceMappingURL=index.js.map