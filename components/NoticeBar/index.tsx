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
        color = '#B97400',
        mode = '',
        icon = '',
        action = '',
        bgColor = '#FFEFD4',
        children
    } = props

    const [show, setShow] = React.useState(true)

    if (!show) {
        return null
    }

    const onClick = () => {
        props.onClick && props.onClick()

        if (props.mode === 'closeable') {
            setShow(false)
        }
    }

    let operationDom: any = null
    let actionDom: any = null
    const colorSty = color ? { color } : {}

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
        childrenDom = <Text style={[styles.content, colorSty]}>{ children }</Text>
    } else {
        childrenDom = children
    }
    
    const mainDom = (
        <View style={[styles.noticeBar, style, {backgroundColor: bgColor}]}>
            { !!icon && <Icon name={icon} size={14} style={[styles.icon, colorSty]}/> }
            { !!children && <View style={styles.container}>{childrenDom}</View> }
            { operationDom }
        </View>
    )

    return mode === 'link' ? (
        <TouchableWithoutFeedback onPress={onClick}>
            { mainDom }
        </TouchableWithoutFeedback>
    ) : mainDom
}
