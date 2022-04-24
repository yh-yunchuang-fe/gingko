"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 * @date 2018/3/20
 */
/**
 * TODO 后续需添加对mode = 'radio'的支持
 */
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const style_1 = __importDefault(require("./style"));
function RadioGroup(props) {
    const { options = [], style, mode = 'button', defaultIndex = 0, itemStyle, itemTextStyle, } = props;
    const index = props.index ? props.index : (defaultIndex || 0);
    const [activeIndex, setActiveIndex] = react_1.default.useState(index);
    react_1.default.useEffect(() => {
        if (props.index !== activeIndex) {
            setActiveIndex(activeIndex);
        }
    }, [props.index]);
    if (mode !== 'button') {
        console.warn('暂支持button模式');
        return null;
    }
    const onChange = (item, idx) => {
        setActiveIndex(idx);
        props.onChange && props.onChange(item, idx);
    };
    const dom = options.map((item, idx) => {
        let itemSty = null;
        let activeSty = null;
        let activeText = null;
        let cutLineSty = style_1.default.cutLineSty;
        if (idx === 0) {
            itemSty = style_1.default.firstRadioBtn;
        }
        else if (idx === options.length - 1) {
            itemSty = style_1.default.lastRadioBtn;
            cutLineSty = null;
        }
        if (activeIndex === idx) {
            activeSty = style_1.default.activeRadioBtn;
            activeText = style_1.default.activeRadioBtnText;
        }
        return (<react_native_1.View style={[cutLineSty]} key={idx}>
                <react_native_1.TouchableOpacity onPress={() => { onChange(item, idx); }}>
                    <react_native_1.View style={[style_1.default.radioBtn, itemSty, activeSty, itemStyle]}>
                        <react_native_1.Text style={[style_1.default.radioBtnText, activeText, itemTextStyle]}>
                            {item}
                        </react_native_1.Text>
                    </react_native_1.View>
                </react_native_1.TouchableOpacity>
            </react_native_1.View>);
    });
    return (<react_native_1.View style={[style_1.default.radioGroup, style]}>
            {dom}
        </react_native_1.View>);
}
exports.default = RadioGroup;
//# sourceMappingURL=index.js.map