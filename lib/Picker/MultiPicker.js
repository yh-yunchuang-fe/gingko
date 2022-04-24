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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by beilunyang on 2018/4/10
 */
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
function MultiPicker(props) {
    const getValue = () => {
        const { children, value, } = props;
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
    const onChange = (idx, val) => {
        const values = getValue();
        values[idx] = val;
        props.onChange && props.onChange(values, idx);
    };
    const { children, style, itemStyle, columnStyle } = props, rest = __rest(props, ["children", "style", "itemStyle", "columnStyle"]);
    const value = getValue();
    const elements = React.Children.map(children, (col, idx) => {
        const dataLen = children.length;
        let currentType;
        if (dataLen === 1) {
            currentType = '';
        }
        else if (idx === 0) {
            currentType = 'first';
        }
        else if ((idx + 1) === dataLen) {
            currentType = 'last';
        }
        else {
            currentType = 'center';
        }
        let fontSize = 18;
        if (dataLen === 3) {
            fontSize = 16;
        }
        else if (dataLen === 5) {
            fontSize = 14;
        }
        return React.cloneElement(col, Object.assign(Object.assign({}, rest), { selectedValue: value[idx], currentIndex: idx, currentType: currentType, onValueChange: (val) => {
                onChange(idx, val);
            }, style: Object.assign({ flex: 1, marginHorizontal: -4 }, columnStyle[idx]), itemStyle: Object.assign({ fontSize: fontSize }, itemStyle[idx]) }));
    });
    return (<react_native_1.View style={[{ flexDirection: 'row', justifyContent: 'center' }, style]}>
            {elements}
        </react_native_1.View>);
}
exports.default = MultiPicker;
//# sourceMappingURL=MultiPicker.js.map