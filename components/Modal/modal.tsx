/**
 * Created by beilunyang on 2018/2/23
 */
import * as React from 'react';
import {
    Text,
    View,
    Modal,
    Animated,
    Dimensions,
    TouchableWithoutFeedback,
} from 'react-native';
import styles from './style/index';
import Button from '../Button';
import {IActionButton, IModalProps} from './propsType';

const { height } = Dimensions.get('window');

export default class YHModal extends React.Component<IModalProps, any> {
    static defaultProps = {
        title: '',
        visible: false,
        closable: false,
        maskClosable: false,
        onCloseEnd: () => {},
        animationType: 'fade',
        footer: [],
        style: {},
        bodyStyle: {},
    };

    static alert: any;

    state = {
        visible: true,
        slideUp: new Animated.Value(0),
        slideDown: new Animated.Value(0),
    };

    injectAnimation() {
        const { animationType, onClose } = this.props;
        if (animationType === 'slide-up' && onClose) {
            return () => {
                Animated.timing(this.state.slideUp, {
                    toValue: 1,
                }).start(onClose);
            };
        }

        if (animationType === 'slide-down' && onClose) {
            return () => {
                Animated.timing(this.state.slideDown, {
                    toValue: 1,
                }).start(onClose);
            }
        }
        return onClose;
    }

    componentWillReceiveProps(nextProps) {
        const { onCloseEnd } = this.props;
        if (onCloseEnd) {
            onCloseEnd(nextProps.visible);
        }
    }

    render() {
        const {
            children,
            visible,
            maskClosable,
            animationType,
            onClose,
            style,
            bodyStyle,
            footer,
            title,
        } = this.props;
        let footerElement: any = null;
        let animatedClose: Function | void;
        if (Array.isArray(footer)) {
            if (footer.length === 1) {
                const { text, type, onPress, style } = footer[0] as IActionButton;
                animatedClose = this.injectAnimation();
                const onPressFn = () => {
                    if (onPress) {
                        onPress();
                    }
                    if (animatedClose) {
                        animatedClose();
                    }
                };
                footerElement = (
                    <View style={styles.singleBtn}>
                        <Button type={type} style={{ width: 112, ...style }} onClick={onPressFn}>{text}</Button>
                    </View>
                );
            }

            if (footer.length === 2) {
                const buttons = footer.map((button, idx) => {
                    const { text, type, onPress, style } = button as IActionButton;
                    animatedClose = this.injectAnimation();
                    const onPressFn = () => {
                        if (onPress) {
                            onPress();
                        }
                        if (animatedClose) {
                            animatedClose();
                        }
                    }
                    return (
                        <Button type={type} key={idx} style={{ width: 112, ...style }} onClick={onPressFn}>{text}</Button>
                    );
                });
                footerElement = (
                    <View style={styles.btnGroup}>
                        {buttons}
                    </View>
                );
            }

            if (footer.length > 2) {
                console.warn('最多支持两个按钮');
            }
        }
        if (visible) {
            if (animationType === 'slide-up') {
                setTimeout(() => {
                    Animated.timing(this.state.slideUp, {
                        toValue: 0.5,
                    }).start();
                }, 0);
                return (
                    <Modal
                        visible={visible}
                        onRequestClose={onClose}
                        transparent
                    >
                        <View style={styles.modalWrap}>
                            {
                                maskClosable ? (
                                    <TouchableWithoutFeedback onPress={() => animatedClose && animatedClose()}>
                                        <View style={styles.frameLayout} />
                                    </TouchableWithoutFeedback>
                                ) : null
                            }
                            <Animated.View style={[styles.modalMain, style, {
                                transform: [{
                                    translateY: this.state.slideUp.interpolate({
                                        inputRange: [0, 0.5, 1],
                                        outputRange: [height, 0, height],
                                    }),
                                }],
                            }]}>
                                <Text style={styles.modalHeader}>{title}</Text>
                                <View style={[styles.modalBody, bodyStyle]}>{children}</View>
                                {footerElement}
                            </Animated.View>
                        </View>
                    </Modal>
                );
            }
            if (animationType === 'slide-down') {
                setTimeout(() => {
                    Animated.timing(this.state.slideDown, {
                        toValue: 0.5,
                    }).start();
                }, 0);
                return (
                    <Modal
                        visible={visible}
                        onRequestClose={onClose}
                        transparent
                    >
                        <View style={styles.modalWrap}>
                            {
                                maskClosable ? (
                                    <TouchableWithoutFeedback onPress={() => animatedClose && animatedClose()}>
                                        <View style={styles.frameLayout} />
                                    </TouchableWithoutFeedback>
                                ) : null
                            }
                            <Animated.View style={[styles.modalMain, style, {
                                transform: [{
                                    translateY: this.state.slideDown.interpolate({
                                        inputRange: [0, 0.5, 1],
                                        outputRange: [-height, 0, -height],
                                    }),
                                }],
                            }]}>
                                <Text style={styles.modalHeader}>{title}</Text>
                                <View style={[styles.modalBody, bodyStyle]}>{children}</View>
                                {footerElement}
                            </Animated.View>
                        </View>
                    </Modal>
                );
            }
            return (
                <Modal
                    visible={visible}
                    animationType={animationType}
                    onRequestClose={onClose}
                    transparent
                >
                    <View style={styles.modalWrap}>
                        {maskClosable ? (
                            <TouchableWithoutFeedback onPress={onClose}>
                                <View style={styles.frameLayout} />
                            </TouchableWithoutFeedback>
                        ) : null}
                        <View style={[styles.modalMain, style]}>
                            <Text style={styles.modalHeader}>{title}</Text>
                            <View style={[styles.modalBody, bodyStyle]}>{children}</View>
                            {footerElement}
                        </View>
                    </View>
                </Modal>
            );
        }
        return null;
    }
}