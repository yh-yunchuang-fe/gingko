"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
        const value = this.getValue();
        const elements = React.Children.map(children, (col, idx) => {
            return React.cloneElement(col, Object.assign(Object.assign({}, rest), { selectedValue: value[idx], onValueChange: (val) => {
                    this.onChange(idx, val, onChange);
                }, style: Object.assign({ flex: 1 }, columnStyle[idx]), itemStyle: itemStyle[idx] }));
        });
        return (<react_native_1.View style={[{ flexDirection: 'row', justifyContent: 'center' }, style]}>
                {elements}
            </react_native_1.View>);
    }
}
exports.default = MultiPicker;
//# sourceMappingURL=MultiPicker.js.map