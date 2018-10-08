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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by beilunyang on 2018/2/9
 */
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const Picker_android_1 = __importDefault(require("./Picker.android"));
const MultiPicker_1 = __importDefault(require("./MultiPicker"));
const Popup_1 = __importDefault(require("../Popup"));
const style_1 = __importDefault(require("./style"));
const isAndroid = react_native_1.Platform.OS === 'android';
class default_1 extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: this.props.value || this.props.defaultValue,
        };
        this.renderHeader = () => {
            const { dismissText, onOk, onDismiss, okText, title, } = this.props;
            return (React.createElement(react_native_1.View, { style: style_1.default.header },
                React.createElement(react_native_1.TouchableOpacity, { onPress: onDismiss },
                    React.createElement(react_native_1.Text, { style: style_1.default.dismiss }, dismissText)),
                React.createElement(react_native_1.Text, { style: style_1.default.title }, title),
                React.createElement(react_native_1.TouchableOpacity, { onPress: onOk.bind(null, this.state.value) },
                    React.createElement(react_native_1.Text, { style: style_1.default.ok }, okText))));
        };
        this.renderItems = (group) => {
            return group.map(({ label, value }, idx) => {
                if (label === undefined || label === null) {
                    return (React.createElement(react_native_1.Picker.Item, { label: String(value), value: value, key: idx }));
                }
                return (React.createElement(react_native_1.Picker.Item, { label: String(label), value: value, key: idx }));
            });
        };
        this.renderCols = () => {
            const { data } = this.props;
            if (Array.isArray(data)) {
                const Pick = isAndroid ? Picker_android_1.default : react_native_1.Picker;
                return data.map((group, idx) => {
                    return (React.createElement(Pick, { key: idx }, this.renderItems(group)));
                });
            }
            return null;
        };
        this.onChange = (values, idx) => {
            const { onChange } = this.props;
            if (!('value' in this.props)) {
                this.setState({
                    value: values,
                });
            }
            if (onChange) {
                onChange(values, idx);
            }
        };
        this.renderPicker = () => {
            const Pick = isAndroid ? Picker_android_1.default : react_native_1.Picker;
            const _a = this.props, { value, onChange, children, style, itemStyle, columnStyle } = _a, rest = __rest(_a, ["value", "onChange", "children", "style", "itemStyle", "columnStyle"]);
            if (children) {
                const itemSty = Array.isArray(itemStyle) ? itemStyle[0] : itemStyle;
                const columnSty = Array.isArray(columnStyle) ? columnStyle[0] : columnStyle;
                return (React.createElement(Pick, Object.assign({}, rest, { itemStyle: react_native_1.StyleSheet.flatten(itemSty), style: react_native_1.StyleSheet.flatten([style, columnSty]), onValueChange: this.onChange, selectedValue: this.state.value }), children));
            }
            const itemSty = Array.isArray(itemStyle) ? itemStyle : [itemStyle];
            const columnSty = Array.isArray(columnStyle) ? columnStyle : [columnStyle];
            return (React.createElement(MultiPicker_1.default, Object.assign({}, rest, { style: style, itemStyle: itemSty, columnStyle: columnSty, onChange: this.onChange, value: this.state.value }), this.renderCols()));
        };
    }
    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value,
            });
        }
    }
    render() {
        const { visible, } = this.props;
        return (React.createElement(Popup_1.default, { visible: visible },
            React.createElement(react_native_1.View, { style: style_1.default.container },
                this.renderHeader(),
                this.renderPicker())));
    }
}
default_1.Item = react_native_1.Picker.Item;
default_1.defaultProps = {
    dismissText: '取消',
    okText: '确定',
    onDismiss: () => { },
    onOk: () => { },
    title: '',
    data: [],
    style: {},
    itemStyle: [],
    columnStyle: [],
    visible: false,
};
exports.default = default_1;
//# sourceMappingURL=index.js.map