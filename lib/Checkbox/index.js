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
 * Created by beilunyang on 2018/3/14
 */
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const Icon_1 = __importDefault(require("../Icon"));
const style_1 = __importDefault(require("./style"));
const style_2 = __importDefault(require("@src/style/"));
function Checkbox(props) {
    const { icon = true, dir = 'left', defaultChecked = false, onChange, style = {}, textStyle = {}, disabled = false, children } = props, restProps = __rest(props, ["icon", "dir", "defaultChecked", "onChange", "style", "textStyle", "disabled", "children"]);
    let initChecked = false;
    if (typeof props.checked === 'boolean') {
        initChecked = props.checked;
    }
    else {
        initChecked = defaultChecked;
    }
    const [checked, setChecked] = React.useState(initChecked);
    React.useEffect(() => {
        if (typeof props.checked === 'boolean') {
            setChecked(props.checked);
        }
    }, [props.checked]);
    const handleClick = () => {
        if (!(typeof props.checked === 'boolean')) {
            setChecked(!checked);
        }
        if (props.onChange) {
            props.onChange(!checked);
        }
    };
    const getCheckedColor = (check) => {
        if (disabled && check) {
            return { color: style_2.default.color_checkbox_icon_selected_disable, icon: 'icon-checkbox-checked' };
        }
        else if (disabled) {
            return { icon: 'icon-unchecked-disabled' };
        }
        else if (check) {
            return { color: style_2.default.color_checkbox_icon_selected_default, icon: 'icon-checkbox-checked' };
        }
        else {
            return { icon: 'icon-unchecked' };
        }
    };
    const renderIcon = () => {
        if (typeof icon === 'function') {
            // tslint:disable-next-line:no-shadowed-variable
            const elements = icon({ checked });
            if (React.isValidElement(elements)) {
                return elements;
            }
        }
        if (typeof icon === 'boolean' && icon) {
            const defaultIcon = (check) => {
                const checkColor = getCheckedColor(check);
                const iconName = checkColor === null || checkColor === void 0 ? void 0 : checkColor.icon;
                return (<react_native_1.View style={style_1.default.icon}>
                        <Icon_1.default name={iconName} color={checkColor === null || checkColor === void 0 ? void 0 : checkColor.color}/>
                    </react_native_1.View>);
            };
            return defaultIcon(checked);
        }
        return null;
    };
    let elements = null;
    if (React.isValidElement(children)) {
        elements = children;
    }
    if (typeof children === 'string') {
        elements = <react_native_1.Text style={[style_1.default.checkboxText, textStyle]}>{children}</react_native_1.Text>;
    }
    return (<react_native_1.TouchableOpacity {...restProps} onPress={handleClick} disabled={disabled}>
            <react_native_1.View style={[style_1.default.container, style]}>
                {dir === 'left' && renderIcon()}
                {elements}
                {dir === 'right' && renderIcon()}
            </react_native_1.View>
        </react_native_1.TouchableOpacity>);
}
exports.default = Checkbox;
//# sourceMappingURL=index.js.map