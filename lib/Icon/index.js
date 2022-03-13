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
    'bell': '\ue929',
    'clock-circle-o': '\ue92a',
    'store': '\ue92b',
};
class Icon extends React.Component {
    render() {
        const { name, size, color, style } = this.props;
        const sizeMap = { xxs: 12, xs: 14, sm: 16, md: 18, lg: 20 };
        let fontSize = typeof size === 'string' ? sizeMap[size] : size;
        fontSize = fontSize || 16;
        const lineHeight = fontSize + 1;
        const TextIconStyle = {
            fontSize,
            lineHeight,
            color,
            fontFamily: 'gingkoIcon',
            flexDirection: 'row',
        };
        return (<react_native_1.Text style={[TextIconStyle, style]}>{iconMap[name] || name}</react_native_1.Text>);
    }
}
exports.default = Icon;
Icon.defaultProps = {
    size: 16,
    color: '#333',
};
//# sourceMappingURL=index.js.map