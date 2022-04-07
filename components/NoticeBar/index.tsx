/**
 * @author zhangyi
 * @date 2018/3/19
 */
import React from 'react'
import {
    View,
    Text, 
    TouchableWithoutFeedback
} from 'react-native'
import NoticeBarProps from './propsType'
import styles from './style/index'
import Icon from '../Icon'

export default function NoticeBar(props: NoticeBarProps) {
    const {
        style,
        color = '#666666',
        mode = '',
        icon = '',
        action = '',
        bgColor = '#FFF5CC',
        children
    } = props

    const [show, setShow] = React.useState(true)

    const onClick = () => {
        const { mode, onClick } = props
        if (onClick) {
            onClick()
        }
        if (mode === 'closeable') {
            setShow(false)
        }
    }

    if (!show) {
        return null
    }

    let operationDom: any = null
    let actionDom: any = null
    const colorSty = color ? { color } : null

    if (action) {
        if (typeof action === 'string') {
            actionDom = (
                <Text style={[styles.action, colorSty]}>{ action }</Text>
            )
        } else {
            actionDom = action
        }
    }

    if (mode === 'link') {
        operationDom = (
            <View style={styles.actionWrap}>
                { action ? actionDom : <Icon name='chevron-right' size={12} style={colorSty}/>}
            </View>
        )
    } else if(mode === 'closeable') {
        operationDom = (
            <TouchableWithoutFeedback onPress={onClick}>
                <View style={styles.actionWrap}>
                    {action ? actionDom : <Icon name='close' size={12} style={colorSty}/>}
                </View>
            </TouchableWithoutFeedback>
        )
    }

    let childrenDom: any = null
    if (typeof children === 'string') {
        childrenDom = (
            <Text style={[styles.content, colorSty]}>{ children }</Text>
        )
    } else {
        childrenDom = children
    }
    
    const mainDom = (
        <View style={[styles.noticeBar, style, {backgroundColor: bgColor}]}>
            { icon ? <Icon name={icon} size={14} style={[styles.icon, colorSty]}/> : null }
            <View style={styles.container}>
                { children ? childrenDom : null }
            </View>
            { operationDom }
        </View>
    )

    return mode === 'link' ? (
        <TouchableWithoutFeedback onPress={onClick}>
            { mainDom }
        </TouchableWithoutFeedback>
    ) : mainDom
}
