"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 */
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const style_1 = __importDefault(require("./style"));
const screen = react_native_1.Dimensions.get('window');
class Dialog extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.getOpacity = (visible) => {
            return visible ? 1 : 0;
        };
        this.getScale = (visible) => {
            return visible ? 1 : 1.05;
        };
        this.getPosition = (visible) => {
            if (visible) {
                return 0;
            }
            return this.props.animationType === 'slide-down' ? -screen.height : screen.height;
        };
        this.onMaskClose = () => {
            const { maskClosable, onClose } = this.props;
            if (maskClosable) {
                onClose && onClose();
            }
        };
        this.close = () => {
            this.animateDialog(false);
        };
        this.animateMask = (visible) => {
            this.stopMaskAnim();
            this.state.opacity.setValue(this.getOpacity(!visible));
            this.animMask = react_native_1.Animated.timing(this.state.opacity, {
                toValue: this.getOpacity(visible),
                duration: this.props.animationDuration,
                useNativeDriver: true // RN >= 0.64 添加
            });
            this.animMask.start(() => {
                this.animMask = null;
            });
        };
        this.stopMaskAnim = () => {
            if (this.animMask) {
                this.animMask.stop();
                this.animMask = null;
            }
        };
        this.stopDialogAnim = () => {
            if (this.animDialog) {
                this.animDialog.stop();
                this.animDialog = null;
            }
        };
        this.animateDialog = (visible) => {
            this.stopDialogAnim();
            this.animateMask(visible);
            const { animationType, animationDuration } = this.props;
            if (animationType === 'none') {
                if (!visible) {
                    this.setState({
                        modalVisible: false
                    });
                }
                return;
            }
            if (animationType === 'fade') {
                this.animDialog = react_native_1.Animated.parallel([
                    react_native_1.Animated.timing(this.state.opacity, {
                        toValue: this.getOpacity(visible),
                        duration: animationDuration,
                        easing: (visible ? react_native_1.Easing.elastic(0.8) : undefined),
                        useNativeDriver: true // RN >= 0.64 添加
                    }),
                    react_native_1.Animated.spring(this.state.scale, {
                        toValue: this.getScale(visible),
                        useNativeDriver: true // RN >= 0.64 添加
                        // tension: 2000,
                        // friction: 1000
                        // duration: animationDuration,
                        // easing: (visible ? Easing.elastic(0.8) : undefined)
                    })
                ]);
            }
            else if (animationType === 'slide-up' || animationType === 'slide-down') {
                this.state.position.setValue(this.getPosition(!visible));
                this.animDialog = react_native_1.Animated.timing(this.state.position, {
                    toValue: this.getPosition(visible),
                    duration: animationDuration,
                    easing: (visible ? react_native_1.Easing.elastic(0.8) : undefined),
                    useNativeDriver: true // RN >= 0.64 添加
                });
            }
            this.animDialog.start(() => {
                this.animDialog = null;
                const { onAnimationEnd } = this.props;
                if (!visible) {
                    this.setState({
                        modalVisible: false
                    });
                }
                onAnimationEnd && onAnimationEnd(visible);
            });
        };
        const { visible } = this.props;
        this.state = {
            modalVisible: this.props.visible,
            opacity: new react_native_1.Animated.Value(this.getOpacity(visible)),
            scale: new react_native_1.Animated.Value(this.getScale(visible)),
            position: new react_native_1.Animated.Value(this.getPosition(visible))
        };
    }
    componentDidMount() {
        if (this.props.animateAppear && this.props.animationType !== 'none') {
            this.componentDidUpdate({});
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.shouldComponentUpdate(nextProps, this.state)) {
            this.setState({ modalVisible: true });
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        const props = this.props;
        if (props.visible || props.visible !== nextProps.visible) {
            return true;
        }
        if (nextState) {
            if (nextState.modalVisible !== this.state.modalVisible) {
                return true;
            }
        }
        return false;
    }
    componentDidUpdate(prevProps) {
        const props = this.props;
        if (prevProps.visible !== props.visible) {
            this.animateDialog(props.visible);
        }
    }
    render() {
        const { modalVisible } = this.state;
        if (!modalVisible) {
            return null;
        }
        const { transparent, onClose, wrapStyle, maskStyle, style, children } = this.props;
        const animationType = this.props.animationType || 'none';
        const animationStyleMap = {
            'none': {},
            'fade': {
                transform: [{ scale: this.state.scale }],
                opacity: this.state.opacity
            },
            'slide-up': { transform: [{ translateY: this.state.position }] },
            'slide-down': { transform: [{ translateY: this.state.position }] },
        };
        return (<react_native_1.Modal visible={true} transparent={transparent} onRequestClose={onClose}>
                <react_native_1.View style={[style_1.default.wrap, wrapStyle]}>
                    <react_native_1.TouchableWithoutFeedback onPress={this.onMaskClose.bind(this)}>
                        <react_native_1.Animated.View style={[style_1.default.absolute, { opacity: this.state.opacity }]}>
                            <react_native_1.View style={[style_1.default.absolute, maskStyle]}/>
                        </react_native_1.Animated.View>
                    </react_native_1.TouchableWithoutFeedback>
                    <react_native_1.Animated.View style={[style, animationStyleMap[animationType]]}>
                        {children}
                    </react_native_1.Animated.View>
                </react_native_1.View>
            </react_native_1.Modal>);
    }
}
exports.default = Dialog;
Dialog.defaultProps = {
    style: {},
    wrapStyle: style_1.default.wrap,
    maskStyle: style_1.default.mask,
    animationType: 'none',
    animationDuration: 300,
    animateAppear: false,
    visible: false,
    transparent: true,
    maskClosable: true,
    onClose: () => { },
    onAnimationEnd: () => { }
};
//# sourceMappingURL=index.js.map