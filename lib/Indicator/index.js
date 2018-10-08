"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const assets_1 = require("../../src/assets");
const variables_1 = __importDefault(require("../../src/style/variables"));
const style_1 = __importDefault(require("./style"));
class Indicator extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            rotate: new react_native_1.Animated.Value(0)
        };
    }
    componentDidMount() {
        this.startAnimate();
    }
    componentWillUnmount() {
        this.state.rotate.stopAnimation(); //停止动画
    }
    startAnimate() {
        react_native_1.Animated.loop(react_native_1.Animated.timing(this.state.rotate, {
            toValue: 1,
            duration: 800,
            easing: react_native_1.Easing.linear,
            useNativeDriver: true,
        }), {
            iterations: -1 //无限循环
        }).start(event => {
            if (event.finished) {
                console.log('finished');
            }
        });
    }
    render() {
        const { size, color, text, textStyle, style } = this.props;
        const sizeSty = {
            width: variables_1.default[`indicator_${size}`],
            height: variables_1.default[`indicator_${size}`]
        };
        const spinnerImg = color === 'blue' ? assets_1.Images.loading_blue : assets_1.Images.loading_white;
        const outPut = this.state.rotate.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '-360deg']
        });
        const rotateSty = { transform: [{ rotate: outPut }] };
        return (react_1.default.createElement(react_native_1.View, { style: [style_1.default.indicator, style] },
            react_1.default.createElement(react_native_1.Animated.Image, { source: spinnerImg, style: [style_1.default.spinner, sizeSty, rotateSty] }),
            text && react_1.default.createElement(react_native_1.Text, { style: [style_1.default.tip, textStyle] }, text)));
    }
}
Indicator.defaultProps = {
    size: 'md',
    color: 'blue',
    style: {},
    textStyle: {}
};
exports.default = Indicator;
//# sourceMappingURL=index.js.map