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
import styles from './style'
import Icon from '../Icon'
import variables from '@src/style'

export default function NoticeBar(props: NoticeBarProps) {
    const {
        style,
        color = variables.color_noticeBar_icon,
        mode = '',
        icon = '',
        action = '',
        bgColor = variables.color_noticeBar_bg,
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
            { !!icon && <Icon name={icon} size={variables.font_noticeBar_size} style={[styles.icon, colorSty]}/> }
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
