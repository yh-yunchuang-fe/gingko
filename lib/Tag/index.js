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
 * @date 2018/3/9
 */
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const style_1 = __importDefault(require("./style"));
const style_2 = __importDefault(require("@src/style"));
function Tag(props) {
    const { readonly = true, fill = false, font = false, color = style_2.default.color_tag_solid_bg_gray, textColor = '', activeColor = style_2.default.color_tag_solid_bg_orange, style = null, size = 'md', selected = false, textStyle, children, onChange } = props, restProps = __rest(props, ["readonly", "fill", "font", "color", "textColor", "activeColor", "style", "size", "selected", "textStyle", "children", "onChange"]);
    const [isSelect, setSelected] = react_1.default.useState(props.selected);
    react_1.default.useEffect(() => {
        if (selected !== isSelect) {
            setSelected(isSelect);
        }
    }, [props.selected]);
    const onClick = () => {
        if (readonly) {
            return;
        }
        setSelected(!isSelect);
        onChange && onChange(!isSelect);
    };
    let sty = {};
    let textSty = {};
    const colors = ['orange', 'blue', 'green', 'red', 'gray'];
    if (fill) {
        if (colors.includes(color)) {
            sty = {
                backgroundColor: style_2.default[`color_tag_solid_bg_${color}`],
                borderWidth: 0
            };
            textSty = {
                color: style_2.default.color_tag_font_inverse
            };
        }
        else {
            sty = {
                backgroundColor: isSelect ? activeColor : color,
                borderWidth: 0
            };
            textSty = {
                color: textColor ? textColor : style_2.default.color_tag_font_inverse
            };
        }
    }
    else if (font) {
        if (colors.includes(color)) {
            sty = {
                backgroundColor: style_2.default[`color_tag_solid_bg_light_${color}`],
                borderWidth: 0
            };
            textSty = {
                color: style_2.default[`color_tag_solid_bg_${color}`],
            };
        }
        else {
            sty = {
                backgroundColor: isSelect ? activeColor : color,
                borderWidth: 0
            };
            textSty = {
                color: textColor ? textColor : style_2.default.color_tag_font_inverse
            };
        }
    }
    else if (colors.includes(color)) {
        sty = {
            borderColor: isSelect ? activeColor : style_2.default[`color_tag_solid_bg_${color}`],
        };
        textSty = {
            color: isSelect ? activeColor : style_2.default[`color_tag_solid_bg_${color}`],
        };
    }
    else {
        sty = {
            borderColor: isSelect ? activeColor : color,
        };
        textSty = {
            color: isSelect ? activeColor : color,
        };
    }
    const contentSty = {
        paddingHorizontal: style_2.default[`spacing_tag_paddingLeft_${size}`],
        paddingVertical: style_2.default[`spacing_tag_paddingTop_${size}`]
    };
    const textSizeSty = {
        fontSize: style_2.default[`font_tag_size_${size}`],
        lineHeight: style_2.default[`font_tag_lineheight_${size}`],
        fontWeight: style_2.default.font_tag_weight_regular
    };
    return <react_native_1.View style={style_1.default.wrap}>
        <react_native_1.TouchableWithoutFeedback onPress={readonly ? () => { } : onClick}>
            <react_native_1.View style={[style_1.default.content, contentSty, sty, style]} {...restProps}>
                <react_native_1.Text style={[textSizeSty, textSty, textStyle]}>
                    {children}
                </react_native_1.Text>
            </react_native_1.View>
        </react_native_1.TouchableWithoutFeedback>
    </react_native_1.View>;
}
exports.default = Tag;
//# sourceMappingURL=index.js.map