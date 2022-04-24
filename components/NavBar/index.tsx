/**
 * @author zhangyi
 * @date 2018/3/25
 * TODO 暂时不用使用navBar,而应该直接使用react-navigation
 */

import React from 'react'
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import NavBarProps from './propsType'
import styles from './style'
import Icon from '../Icon'

export default function NarBar({
    style = null,
    leftIcon = 'back', // 'home'
    leftContent = null,
    rightContent = null,
    onLeftClick = ()=> {},
    children,
    ...restProps
}: NavBarProps) {

    let leftDom: any = null

    if (leftContent) {
        if (typeof leftContent === 'string') {
            leftDom = (<Text style={styles.leftText}>{ leftContent }</Text>)
        } else {
            leftDom = leftContent
        }
    } else {
        leftDom = (<Icon name={leftIcon} style={styles.leftIcon} size={16}/>)
    }

    leftDom = (
        <TouchableOpacity onPress={onLeftClick}>
            <View style={styles.leftWrap}>
                {leftDom}
            </View>
        </TouchableOpacity>
    )

    let childDom: any = null
    if (children && typeof children === 'string') {
        childDom = (<Text style={styles.title}>{children}</Text>)
    } else {
        childDom = children
    }

    return (
        <View style={[styles.navBar, style]} {...restProps}>
            {leftDom}
            <View style={styles.content}>
                { childDom }
            </View>
            <View style={styles.rightWrap}>
                {rightContent}
            </View>
        </View>
    )
}
