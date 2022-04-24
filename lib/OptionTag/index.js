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
 * @date 2018/4/20
 */
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Icon_1 = __importDefault(require("../Icon"));
const style_1 = __importDefault(require("./style"));
function OptionTag(props) {
    const { disabled = false, multiple = false, selected = false, width = 102, height = 40, style, textStyle, renderText, children } = props, restProps = __rest(props, ["disabled", "multiple", "selected", "width", "height", "style", "textStyle", "renderText", "children"]);
    const [isSelect, setSelected] = react_1.default.useState(selected);
    react_1.default.useEffect(() => {
        if (props.selected !== isSelect && !!props.selected) {
            setSelected(props.selected);
        }
    }, [props.selected]);
    const onChange = () => {
        setSelected(!isSelect);
        props.onChange && props.onChange(!isSelect);
    };
    const offsetSty = {
        width,
        height
    };
    if (disabled) {
        return (<react_native_1.View style={style_1.default.wrap}>
                <react_native_1.View style={[style_1.default.content, style, style_1.default.disabled, offsetSty]}>
                    {renderText ? renderText(isSelect) :
                <react_native_1.Text style={[style_1.default.text, textStyle, style_1.default.disabledText]}>{children}</react_native_1.Text>}
                </react_native_1.View>
            </react_native_1.View>);
    }
    let activeSty = null;
    let activeTextSty = null;
    let multipleNode = null;
    if (isSelect) {
        activeSty = style_1.default.active;
        activeTextSty = style_1.default.activeText;
        if (multiple) {
            multipleNode = (<react_native_1.View style={style_1.default.multiple}>
                    <Icon_1.default style={style_1.default.multipleIcon} size={14} name={'icon-checkmark'} color={'#FFFFFF'}/>
                </react_native_1.View>);
        }
    }
    return (<react_native_1.View style={style_1.default.wrap}>
            <react_native_1.TouchableOpacity onPress={onChange}>
                <react_native_1.View style={[style_1.default.content, style, activeSty, offsetSty]} {...restProps}>
                    {renderText ? renderText(isSelect) :
            <react_native_1.Text style={[style_1.default.text, textStyle, activeTextSty]}>{children}</react_native_1.Text>}
                    {multipleNode}
                </react_native_1.View>
            </react_native_1.TouchableOpacity>
        </react_native_1.View>);
}
exports.default = OptionTag;
//# sourceMappingURL=index.js.map