/**
 * @author zhangyi
 */
import React  from 'react'
import {
    View,
    Modal,
    Easing,
    Animated,
    Dimensions,
    TouchableWithoutFeedback, Text
} from 'react-native'
import IDialogProps from './propsType';
import styles from './style'

const screen = Dimensions.get('window');

export default class Dialog extends React.Component<IDialogProps, any> {
    constructor(props: IDialogProps) {
        super(props);
        const { visible } = this.props;
        this.state = {
            modalVisible: this.props.visible,
            opacity: new Animated.Value(this.getOpacity(visible)),
            scale: new Animated.Value(this.getScale(visible)),
            position: new Animated.Value(this.getPosition(visible))
        }
    }

    static defaultProps = {
        style: {},
        wrapStyle: styles.wrap,
        maskStyle: styles.mask,
        animationType: 'none',
        animationDuration: 300,
        animateAppear: false,
        visible: false,
        transparent: true,
        maskClosable: true,
        onClose: () => {},
        onAnimationEnd: () => {}
    };

    animMask;

    animDialog;

    componentDidMount() {
        if (this.props.animateAppear && this.props.animationType !== 'none') {
            this.componentDidUpdate({});
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.shouldComponentUpdate(nextProps, this.state)) {
            this.setState({modalVisible: true});
        }
    }

    shouldComponentUpdate (nextProps, nextState) {
        const props = this.props;
        if (props.visible || props.visible !== nextProps.visible) {
            return true
        }
        if (nextState) {
            if (nextState.modalVisible !== this.state.modalVisible) {
                return true
            }
        }
        return false
    }

    componentDidUpdate (prevProps) {
        const props = this.props;
        if (prevProps.visible !== props.visible) {
            this._animateDialog(props.visible)
        }
    }

    getOpacity = (visible) => {
        return visible ? 1 : 0
    };

    getScale = (visible) => {
        return visible ? 1 : 1.05
    };

    getPosition = (visible) => {
        if (visible) {
            return 0;
        }
        return this.props.animationType === 'slide-down' ? -screen.height : screen.height;
    };

    onMaskClose = () => {
        const { maskClosable, onClose } = this.props;
        if (maskClosable) {
            onClose && onClose()
        }
    };

    close = () => {
        this._animateDialog(false)
    };

    animateMask = (visible) => {
        this.stopMaskAnim();
        this.state.opacity.setValue(this.getOpacity(!visible));
        this.animMask = Animated.timing(
            this.state.opacity,
            {
                toValue: this.getOpacity(visible),
                duration: this.props.animationDuration
            }
        );
        this.animMask.start(() => {
            this.animMask = null
        });
    };

    stopMaskAnim = () => {
        if (this.animMask) {
            this.animMask.stop();
            this.animMask = null
        }
    };

    stopDialogAnim = () => {
        if (this.animDialog) {
            this.animDialog.stop();
            this.animDialog = null
        }
    }

    private _animateDialog = (visible) => {
        this.stopDialogAnim();
        this.animateMask(visible);

        const { animationType, animationDuration } = this.props;
        if (animationType === 'none') {
            if (!visible) {
                this.setState({
                    modalVisible: false
                })
            }
            return;
        }
        if (animationType === 'fade') {
            this.animDialog = Animated.parallel([
                Animated.timing(
                    this.state.opacity,
                    {
                        toValue: this.getOpacity(visible),
                        duration: animationDuration,
                        easing: (visible ? Easing.elastic(0.8) : undefined)
                    }
                ),
                Animated.spring(
                    this.state.scale,
                    {
                        toValue: this.getScale(visible),
                        // tension: 2000,
                        // friction: 1000
                        // duration: animationDuration,
                        // easing: (visible ? Easing.elastic(0.8) : undefined)
                    }
                )
            ])
        } else if (animationType === 'slide-up' || animationType === 'slide-down') {
            this.state.position.setValue(this.getPosition(!visible))
            this.animDialog = Animated.timing(
                this.state.position,
                {
                    toValue: this.getPosition(visible),
                    duration: animationDuration,
                    easing: (visible ? Easing.elastic(0.8) : undefined)
                }
            )
        }

        this.animDialog.start(() => {
            this.animDialog = null;
            const { onAnimationEnd } = this.props;
            if (!visible) {
                this.setState({
                    modalVisible: false
                })
            }
            onAnimationEnd && onAnimationEnd(visible)
        })
    };

    render () {
        const {
            modalVisible,
        } = this.state;
        if (!modalVisible) {
            return null;
        }

        const{
            transparent, onClose, wrapStyle, maskStyle, style, children
        } = this.props;

        const animationType = this.props.animationType || 'none';

        const animationStyleMap = {
            none: {},
            fade: {
                transform: [{scale: this.state.scale}],
                opacity: this.state.opacity
            },
            'slide-up': { transform: [{translateY: this.state.position}] },
            'slide-down': { transform: [{translateY: this.state.position}] },
        };

        return (
            <Modal
                visible={true}
                transparent={transparent}
                onRequestClose={onClose}
            >
                <View style={[styles.wrap, wrapStyle]}>
                    <TouchableWithoutFeedback
                        onPress={this.onMaskClose.bind(this)}
                    >
                        <Animated.View style={[styles.absolute, { opacity: this.state.opacity }]}>
                            <View style={[styles.absolute, maskStyle]}/>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                    <Animated.View
                        style={[style, animationStyleMap[animationType]]}>
                        {children}
                    </Animated.View>
                </View>
            </Modal>
        )
    }
}