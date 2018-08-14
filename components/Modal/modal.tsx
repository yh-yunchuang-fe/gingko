/**
 * @author zhangyi
 */
import React  from 'react'
import {
    View,
    Text,
} from 'react-native'
import Dialog from '../Dialog'
import Button from '../Button'
import { IModalProps } from './propsType';
import styles from './style'
import {IActionButton} from "../Modal/propsType";
import variables from '../../src/style/variables';

export default class GkModal extends React.Component<IModalProps, any> {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        visible: false,
        animationType: 'fade',
        animationDuration: 300,
        animateAppear: false,
        transparent: true,
        maskClosable: true,
        onClose: () => {},
        onAnimationEnd: () => {},
        style: {},
        bodyStyle: {},
        title: '',
        footer: []
    };

    static alert: any;

    render () {
        const {
            visible, style, title, bodyStyle, children, footer, onClose,
            ...restProps,
        } = this.props;

        let footerDom: any = null;

        if (footer && footer.length) {
            if (footer.length === 1) {
                const { text, type, onPress, style, ...restProps } = footer[0] as IActionButton;
                const onPressFn = () => {
                    if (onPress) {
                        onPress();
                    }
                    if (onClose) {
                        onClose();
                    }
                };
                let newType = type || 'primary';
                footerDom = (
                    <View style={[styles.btnGroup, styles.singleBtn]}>
                        <Button {...restProps}
                                type={newType}
                                style={{ width: variables.modal_single_btn_width, ...style }}
                                onClick={onPressFn}>{text}</Button>
                    </View>
                );
            }

            if (footer.length === 2) {
                const buttons = footer.map((button, idx) => {
                    const { text, type, onPress, style, ...restProps } = button as IActionButton;
                    const onPressFn = () => {
                        if (onPress) {
                            onPress();
                        }
                        if (onClose) {
                            onClose();
                        }
                    };
                    return (
                        <Button {...restProps}     
                                type={type} key={idx}
                                style={{ width: variables.modal_group_btn_width, ...style }}
                                onClick={onPressFn}>{text}</Button>
                    );
                });
                footerDom = (
                    <View style={styles.btnGroup}>
                        {buttons}
                    </View>
                );
            }

            if (footer.length > 2) {
                console.warn('最多支持两个按钮');
            }

        }

        return (
            <Dialog
                visible={visible}
                onClose={onClose}
                {...restProps}
            >
                <View style={[styles.container, style]}>
                    {title ? <Text style={styles.header}>{title}</Text> : null}
                    <View style={[styles.body, bodyStyle]}>
                        { children }
                    </View>
                    { footerDom }
                </View>
            </Dialog>
        )
    }
}
