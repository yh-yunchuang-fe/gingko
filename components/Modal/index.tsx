/**
 * @author zhangyi
 */
import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import Dialog from '../Dialog'
import Button from '../Button'
import styles from './style'
import { IModalProps } from './propsType'
import { IActionButton } from '../Modal/propsType'
import Alert from './alert'

function Modal(props: IModalProps) {
    const {
        visible = false,
        animationType = 'fade',
        animationDuration = 300,
        animateAppear = false,
        transparent = true,
        maskClosable = true,
        onClose = () => {},
        onAnimationEnd = () => {},
        style = {},
        bodyStyle = {},
        contentStyle = {},
        title = '',
        content = '',
        footer = [],
        children,
        ...restProps
    } = props

    let footerDom: any = null

    if (footer && footer.length) {
        if (footer.length === 1) {
            // tslint:disable-next-line:no-shadowed-variable
            const { text, type, onPress, style, ...restProps } = footer[0] as IActionButton
            const onPressFn = () => {
                onPress && onPress()
                onClose && onClose()
            }
            const newType = type || 'primary'
            footerDom = (
                <View style={[styles.btnGroup, styles.singleBtn]}>
                    <Button {...restProps}
                        type={newType}
                        style={{ width: '100%', ...style }}
                        onClick={onPressFn}>{text}</Button>
                </View>
            )
        }

        if (footer.length === 2) {
            const buttons = footer.map((button, idx) => {
                // tslint:disable-next-line:no-shadowed-variable
                const { text, type, onPress, style, ...restProps } = button as IActionButton
                const onPressFn = () => {
                    onPress && onPress()
                    onClose && onClose()
                }
                return (
                    <Button {...restProps}     
                        type={type} key={idx}
                        style={{ width: '48%', ...style }}
                        onClick={onPressFn}>{text}</Button>
                )
            })
            footerDom = (
                <View style={styles.btnGroup}>
                    {buttons}
                </View>
            )
        }

        if (footer.length > 2) {
            console.warn('最多支持两个按钮')
        }

    }

    return (
        <Dialog
            visible={visible}
            onClose={onClose}
            {...restProps}>
            <View style={[styles.container, style]}>
                {title ? <Text style={styles.header}>{title}</Text> : null}
                {content ? <Text style={[styles.modalText, contentStyle]}>{content}</Text> : null}
                <View style={bodyStyle}>
                    { children }
                </View>
                { footerDom }
            </View>
        </Dialog>
    )
}

Modal.alert = Alert

export default Modal
