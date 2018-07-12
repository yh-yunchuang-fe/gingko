"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const iconMap = {
    'chevron-down': '\ue900',
    'chevron-left': '\ue901',
    'chevron-right': '\ue902',
    'chevron-up': '\ue903',
    'back-home': '\ue904',
    'back': '\ue905',
    'camera': '\ue906',
    'close-circle': '\ue907',
    'eye-off': '\ue908',
    'more': '\ue909',
    'unchecked': '\ue90a',
    'scan': '\ue90b',
    'search': '\ue90c',
    'checked': '\ue90d',
    'radio-on': '\ue90e',
    'radio-off': '\ue90f',
    'eye': '\ue910',
    'alert': '\ue911',
    'flash-circle': '\ue912',
    'checkmark': '\ue913',
    'chevron-left-circle': '\ue914',
    'chevron-right-circle': '\ue915',
    'trashcan': '\ue916',
    'close': '\ue917',
    'chevron-down-circle': '\ue918',
    'edit': '\ue919',
    'arrow-down': '\ue91a',
    'light-off': '\ue91b',
    'light-on': '\ue91c',
    'arrow-up': '\ue91d',
    'minus': '\ue91e',
    'order': '\ue91f',
    'plus': '\ue920',
    'remark-active': '\ue921',
    'remark': '\ue922',
    'triangle-down': '\ue923',
    'triangle-up': '\ue924',
    'chevron-up-circle': '\ue925',
    'close-circle-o': '\ue926',
    'user-check': '\ue927',
    'edit-plus': '\ue928',
    'bell': '\ue929'
};
class Icon extends React.Component {
    render() {
        const { name, size, color, style } = this.props;
        const sizeMap = { 'xxs': 12, 'xs': 14, 'sm': 16, 'md': 18, 'lg': 20 };
        let fontSize = typeof size === 'string' ? sizeMap[size] : size;
        fontSize = fontSize || 16;
        const lineHeight = fontSize + 1;
        const TextIconStyle = {
            fontSize,
            lineHeight: lineHeight,
            color: color,
            fontFamily: 'gingkoIcon',
            flexDirection: 'row',
        };
        return (React.createElement(react_native_1.Text, { style: [TextIconStyle, style] }, iconMap[name] || name));
    }
}
Icon.defaultProps = {
    size: 16,
    color: '#333',
};
exports.default = Icon;
//# sourceMappingURL=index.js.map