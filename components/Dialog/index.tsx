/**
 * @author zhangyi
 */
import React from 'react'
import {
    View,
    Modal,
    Easing,
    Animated,
    Dimensions,
    TouchableWithoutFeedback,
} from 'react-native'
import IDialogProps from './propsType'
import styles from './style'

const screen = Dimensions.get('window')

export default class Dialog extends React.Component<IDialogProps, any> {
    
    public static defaultProps = {
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
    }

    public animMask: any

    public animDialog: any
    
    constructor(props: IDialogProps) {
        super(props)
        const { visible } = this.props
        this.state = {
            modalVisible: this.props.visible,
            opacity: new Animated.Value(this.getOpacity(visible)),
            scale: new Animated.Value(this.getScale(visible)),
            position: new Animated.Value(this.getPosition(visible))
        }
    }

    public componentDidMount() {
        if (this.props.animateAppear && this.props.animationType !== 'none') {
            this.componentDidUpdate({})
        }
    }

    public componentWillReceiveProps(nextProps) {
        if (this.shouldComponentUpdate(nextProps, this.state)) {
            this.setState({modalVisible: true})
        }
    }

    public shouldComponentUpdate(nextProps: any, nextState: any) {
        const props = this.props
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

    public componentDidUpdate(prevProps: any) {
        const props = this.props
        if (prevProps.visible !== props.visible) {
            this.animateDialog(props.visible)
        }
    }

    public getOpacity = (visible: boolean) => {
        return visible ? 1 : 0
    }

    public getScale = (visible: boolean) => {
        return visible ? 1 : 1.05
    }

    public getPosition = (visible: boolean) => {
        if (visible) {
            return 0
        }
        return this.props.animationType === 'slide-down' ? -screen.height : screen.height
    }

    public onMaskClose = () => {
        const { maskClosable, onClose } = this.props
        if (maskClosable) {
            onClose && onClose()
        }
    }

    public close = () => {
        this.animateDialog(false)
    }

    public animateMask = (visible: any) => {
        this.stopMaskAnim()
        this.state.opacity.setValue(this.getOpacity(!visible))
        this.animMask = Animated.timing(
            this.state.opacity,
            {
                toValue: this.getOpacity(visible),
                duration: this.props.animationDuration,
                useNativeDriver: true // RN >= 0.64 添加
            }
        )
        this.animMask.start(() => {
            this.animMask = null
        })
    }

    public stopMaskAnim = () => {
        if (this.animMask) {
            this.animMask.stop()
            this.animMask = null
        }
    }

    public stopDialogAnim = () => {
        if (this.animDialog) {
            this.animDialog.stop()
            this.animDialog = null
        }
    }

    public render() {
        const { modalVisible } = this.state
        if (!modalVisible) {
            return null
        }

        const{
            transparent, onClose, wrapStyle, maskStyle, style, children
        } = this.props

        const animationType = this.props.animationType || 'none'

        const animationStyleMap = {
            'none': {},
            'fade': {
                transform: [{scale: this.state.scale}],
                opacity: this.state.opacity
            },
            'slide-up': { transform: [{translateY: this.state.position}] },
            'slide-down': { transform: [{translateY: this.state.position}] },
        }

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

    private animateDialog = (visible: boolean) => {
        this.stopDialogAnim()
        this.animateMask(visible)

        const { animationType, animationDuration } = this.props
        if (animationType === 'none') {
            if (!visible) {
                this.setState({
                    modalVisible: false
                })
            }
            return
        }
        if (animationType === 'fade') {
            this.animDialog = Animated.parallel([
                Animated.timing(this.state.opacity, {
                    toValue: this.getOpacity(visible),
                    duration: animationDuration,
                    easing: (visible ? Easing.elastic(0.8) : undefined),
                    useNativeDriver: true
                }),
                Animated.spring(this.state.scale, {
                    toValue: this.getScale(visible),
                    useNativeDriver: true
                })
            ])
        } else if (animationType === 'slide-up' || animationType === 'slide-down') {
            this.state.position.setValue(this.getPosition(!visible))
            this.animDialog = Animated.timing(this.state.position, {
                toValue: this.getPosition(visible),
                duration: animationDuration,
                easing: (visible ? Easing.elastic(0.8) : undefined),
                useNativeDriver: true
            })
        }

        this.animDialog.start(() => {
            this.animDialog = null
            const { onAnimationEnd } = this.props
            if (!visible) {
                this.setState({
                    modalVisible: false
                })
            }
            onAnimationEnd && onAnimationEnd(visible)
        })
    }
}
