/**
 * @author zhangyi
 * @date 2018/3/28
 */
import React from 'react'
import {
    Text,
    View
} from 'react-native'
import styles from './style'
import Button from '../Button'
import GingkoImage from '../GingkoImage'

interface IEmptyProps {
    source?: any
    message?: string | React.ReactNode
    btn?: string
    style?: any
    imgStyle?: any
    messageStyle?: any
}

export default function Empty({
    source,
    message = '暂无数据',
    btn,
    style,
    imgStyle,
    messageStyle,
}: IEmptyProps) {

    const imageUrl: any = !!source ? source : require('@assets/imgs/empty-default.png')
    const imgDom: any = <GingkoImage style={[styles.emptyImage, imgStyle]} source={imageUrl} />

    let messageDom: any = null
    if (message) {
        if (React.isValidElement(message)) {
            messageDom = message
        } else if (typeof message === 'string') {
            messageDom = <Text style={[styles.message, messageStyle]}>{ message }</Text>
        }
    }

    let btnDom: any = null
    if (btn) {
        if (React.isValidElement(btn)) {
            btnDom = btn
        } else if (typeof btn === 'string') {
            btnDom = <Button style={styles.btn}>{btn}</Button>
        }
    }

    return (
        <View style={[styles.emptyContainer, style]}>
            { imgDom }
            { messageDom }
            { btnDom }
        </View>
    )
}
