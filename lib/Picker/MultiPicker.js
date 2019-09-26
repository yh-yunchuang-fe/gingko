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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by beilunyang on 2018/4/10
 */
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
class MultiPicker extends React.Component {
    constructor() {
        super(...arguments);
        this.getValue = () => {
            const { children, value, } = this.props;
            if (Array.isArray(value) && value.length > 0) {
                return value;
            }
            if (!children) {
                return [];
            }
            return React.Children.map(children, (col) => {
                const items = React.Children.toArray(col.props.children);
                return items[0] && items[0].props.value;
            });
        };
        this.onChange = (idx, val, cb) => {
            const values = this.getValue();
            values[idx] = val;
            if (cb) {
                cb(values, idx);
            }
        };
    }
    render() {
        const _a = this.props, { children, onChange, style, itemStyle, columnStyle } = _a, rest = __rest(_a, ["children", "onChange", "style", "itemStyle", "columnStyle"]);
        const elements = React.Children.map(children, (col, idx) => {
            return React.cloneElement(col, Object.assign(Object.assign({}, rest), { selectedValue: this.getValue()[idx], onValueChange: (val) => {
                    this.onChange(idx, val, onChange);
                }, style: Object.assign({ flex: 1 }, columnStyle[idx]), itemStyle: itemStyle[idx] }));
        });
        return (React.createElement(react_native_1.View, { style: [{ flexDirection: 'row', justifyContent: 'center' }, style] }, elements));
    }
}
exports.default = MultiPicker;
