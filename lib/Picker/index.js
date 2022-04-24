"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
 * Created by beilunyang on 2018/2/9
 */
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const picker_1 = require("@react-native-picker/picker");
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
            return (<react_native_1.View style={style_1.default.header}>
                <react_native_1.TouchableOpacity onPress={onDismiss}>
                    <react_native_1.Text style={style_1.default.dismiss}>{dismissText}</react_native_1.Text>
                </react_native_1.TouchableOpacity>
                <react_native_1.Text style={style_1.default.title}>{title}</react_native_1.Text>
                <react_native_1.TouchableOpacity onPress={onOk.bind(null, this.state.value)}>
                    <react_native_1.Text style={style_1.default.ok}>{okText}</react_native_1.Text>
                </react_native_1.TouchableOpacity>
            </react_native_1.View>);
        };
        this.renderItems = (group) => {
            return group.map(({ label, value }, idx) => {
                if (label === undefined || label === null) {
                    return (<picker_1.Picker.Item label={String(value)} value={value} key={idx}/>);
                }
                return (<picker_1.Picker.Item label={String(label)} value={value} key={idx}/>);
            });
        };
        this.renderCols = () => {
            const { data } = this.props;
            if (Array.isArray(data)) {
                const Pick = isAndroid ? Picker_android_1.default : picker_1.Picker;
                return data.map((group, idx) => {
                    return (<Pick key={idx}>
                        {this.renderItems(group)}
                    </Pick>);
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
            const Pick = isAndroid ? Picker_android_1.default : picker_1.Picker;
            const _a = this.props, { value, onChange, children, style, itemStyle, columnStyle } = _a, rest = __rest(_a, ["value", "onChange", "children", "style", "itemStyle", "columnStyle"]);
            if (children) {
                const itemSty = Array.isArray(itemStyle) ? itemStyle[0] : itemStyle;
                const columnSty = Array.isArray(columnStyle) ? columnStyle[0] : columnStyle;
                return (<Pick {...rest} itemStyle={react_native_1.StyleSheet.flatten(itemSty)} style={react_native_1.StyleSheet.flatten([style, columnSty])} onValueChange={this.onChange} selectedValue={this.state.value}>
                    {children}
                </Pick>);
            }
            const itemSty = Array.isArray(itemStyle) ? itemStyle : [itemStyle];
            const columnSty = Array.isArray(columnStyle) ? columnStyle : [columnStyle];
            return (<MultiPicker_1.default {...rest} style={style} itemStyle={itemSty} columnStyle={columnSty} onChange={this.onChange} value={this.state.value}>
                {this.renderCols()}
            </MultiPicker_1.default>);
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
        const { visible } = this.props;
        return (<Popup_1.default visible={visible}>
                <react_native_1.View style={style_1.default.container}>
                    {this.renderHeader()}
                    {this.renderPicker()}
                </react_native_1.View>
            </Popup_1.default>);
    }
}
exports.default = default_1;
default_1.Item = picker_1.Picker.Item;
default_1.defaultProps = {
    dismissText: '取消',
    okText: '完成',
    onDismiss: () => { },
    onOk: () => { },
    title: '',
    data: [],
    style: {},
    itemStyle: [],
    columnStyle: [],
    visible: false,
};
//# sourceMappingURL=index.js.map