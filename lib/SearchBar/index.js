"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
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
const style_1 = __importDefault(require("./style"));
const Button_1 = __importDefault(require("../Button"));
const style_2 = __importDefault(require("@src/style"));
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
                duration: this.duration,
                useNativeDriver: true
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
                duration: this.duration,
                useNativeDriver: true
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
        this.onSearch = () => {
            this.onBlur();
            if (this.props.onSearch) {
                this.props.onSearch(this.state.value);
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
        const _a = this.props, { placeholder, searchText, selectionColor, cancelText, cancelColor, style, autoFocus, onChange, onSubmit, onFocus, onBlur, onCancel, onClear } = _a, restProps = __rest(_a, ["placeholder", "searchText", "selectionColor", "cancelText", "cancelColor", "style", "autoFocus", "onChange", "onSubmit", "onFocus", "onBlur", "onCancel", "onClear"]);
        const { value, showDelete } = this.state;
        return (<react_native_1.View style={style_1.default.wrapper}>
                <react_native_1.View style={style_1.default.inputWrapper}>
                    <react_native_1.View style={style_1.default.searchIcon}>
                        <Icon_1.default name='icon-search' color={style_2.default.color_searchBar_icon_search} size={style_2.default.width_searchBar_icon_search}/>
                    </react_native_1.View>
                    <react_native_1.TextInput {...restProps} ref={(searchInput) => { this.searchInput = searchInput; }} autoFocus={autoFocus} value={value} placeholder={placeholder} selectionColor={selectionColor} style={[style_1.default.input, style]} underlineColorAndroid='transparent' clearButtonMode='never' onChangeText={this.onChangeText} onFocus={this.onFocus} onBlur={this.onBlur} onSubmitEditing={this.onSubmit}/>
                    {showDelete &&
                <react_native_1.TouchableOpacity onPress={this.clearInput} style={style_1.default.deleteIcon}>
                            <Icon_1.default name='icon-closeText' size={style_2.default.width_searchBar_icon_close} color={style_2.default.color_searchBar_icon_close_visible}/>
                        </react_native_1.TouchableOpacity>}
                </react_native_1.View>
                
                {!!cancelText && <react_native_1.TouchableOpacity onPress={this.onCancel} style={style_1.default.cancelBtn}>
                    <react_native_1.Text>{cancelText}</react_native_1.Text>
                </react_native_1.TouchableOpacity>}

                {!!searchText && <Button_1.default size='sm' onClick={this.onSearch} style={style_1.default.searchBtn}>
                        {searchText}
                    </Button_1.default>}
            </react_native_1.View>);
    }
}
exports.default = SearchBar;
SearchBar.defaultProps = {
    defaultValue: '',
    placeholder: '搜索关键字',
    searchText: '',
    cancelText: '',
    cancelColor: style_2.default.color_searchBar_icon_close_visible,
    autoFocus: false,
    selectionColor: '#FE8F1D',
    onSubmit: noop,
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
    onSearch: noop,
    onCancel: noop,
    onClear: noop
};
//# sourceMappingURL=index.js.map