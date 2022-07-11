/**
 * Created by beilunyang on 2018/3/7
 */
import React from 'react'
import {
    View,
    Text,
    Image,
    Platform
} from 'react-native'
import styles from './style'
import { IBadge } from './propsType'

export default function Badge(props: IBadge) {
    const {
        style = {},
        dot = false,
        image = false,
        source,
        overflowCount = 99,
        bgColor = '#FF0000',
        color = '#FFFFFF',
        cornerContent = null,
        badgeStyle = {},
        badgeTextStyle = {},
        imageBadgeStyle = {},
        top = -10,
        right = -10, // 不要超过容器宽度的1/2 to do 兼容任何数字
        children,
        ...restProps
    } = props

    let contentElement: any = null

    const contentStyle = {
        paddingHorizontal: Math.abs(right),
        paddingTop: Math.abs(top)
    }

    const textDomExtraStyle = {
        top: Platform.OS === 'ios' ? top : 0,
        right: Platform.OS === 'ios' ? right : 0,
    }

    let text = props.text
    if (cornerContent) {
        contentElement = cornerContent
    } else {
        if (overflowCount && typeof text === 'number' && text > overflowCount) {
            text = `${overflowCount}+`
        }

        if (dot) {
            contentElement = (
                <View {...restProps} style={[styles.dot]}/>
            )
        } else if(image) {
            const imgStyle = {
                width: '100%',
                height: '100%',
                ...imageBadgeStyle
            } as any

            contentElement = (
                <View {...restProps} style={[styles.textDom, styles.imageTextDom, textDomExtraStyle, badgeStyle]}>
                    <Image source={source} style={imgStyle} />
                    <Text style={[styles.text, {color}, styles.imageTextBadge, badgeTextStyle]}>{text}</Text>
                </View>
            )
        } else if(!!text) {
            contentElement = (
                <View {...restProps} style={[styles.textDom, textDomExtraStyle, { backgroundColor: bgColor }, badgeStyle]}>
                    <Text style={[styles.text, {color}, badgeTextStyle]}>{text}</Text>
                </View>
            )
        }
    }

    return (
        <View style={[styles.wrap, Platform.OS === 'ios' ? {} : contentStyle, style]}>
            {children}
            {contentElement}
        </View>
    )
}
