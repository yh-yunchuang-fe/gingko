import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native'
import { Indicator } from '../index'
import ButtonProps from './propsType'
import btnStyles from './style'
import Icon from '../Icon'

export default function Button(props: ButtonProps) {
    const {
        size = 'large',
        type = 'default',
        second = false,
        primary = false,
        link = false,
        disabled = false,
        style = {},
        textStyle = {},
        loading = false,
        activeStyle = {},
        onClick = (x?: any) => {},
        icon = {},
        children,
        ...restProps
    }: any = props

    const [state, setState] = React.useState({
        pressIn: false,
            touchIt: false
    })

    const onPressIn = (...args: any[]) => {
        setState({...state, pressIn: true})
        if (props.onPressIn) {
            (props.onPressIn as any)(...args)
        }
    }

    const onPressOut = (...args: any[]) => {
        setState({...state, pressIn: false})
        if (props.onPressOut) {
            (props.onPressOut as any)(...args)
        }
    }

    const onShowUnderlay = (...arg: any[]) => {
        setState({...state, touchIt: true })
        if (props.onShowUnderlay) {
            (props.onShowUnderlay as any)(...arg)
        }
    }

    const onHideUnderlay = (...arg: any[]) => {
        setState({...state, touchIt: false })
        if (props.onHideUnderlay) {
            (props.onHideUnderlay as any)(...arg)
        }
    }

    ['activeOpacity', 'underlayColor', 'onPress', 'onPressIn',
        'onPressOut', 'onShowUnderlay', 'onHideUnderlay'].forEach((prop) => {
        if (restProps.hasOwnProperty(prop)) {
            delete restProps[prop]
        }
    })

    const wrapperSty = [
        btnStyles.wrapperSty,
        btnStyles[`${size}Sty`],
        btnStyles[`${type}Sty`],
        primary && btnStyles[`${type}PrimarySty`],
        disabled && btnStyles[`${type}DisabledSty`],
        link && btnStyles[`${type}LinkSty`],
        activeStyle && state.touchIt && activeStyle,
        style
    ]

    const textSty = [
        btnStyles[`${size}Text`],
        btnStyles[`${type}Text`],
        primary && btnStyles[`${type}PrimaryText`],
        disabled && btnStyles[`${type}DisabledText`],
        link && btnStyles[`${type}LinkText`],
        state.pressIn && btnStyles[`${type}TapText`],
        textStyle
    ]

    const underlayColor = (StyleSheet.flatten(
        btnStyles[activeStyle ? `${type}TapSty` : `${type}Sty`],
    ) as any)?.backgroundColor

    let iconDom: any
    if (icon) {
        if (typeof icon === 'string') {
            iconDom = (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name={icon} style={btnStyles.iconSty}/>
                </View>
            )
        } else if (typeof icon === 'object' && !!icon.name) {
            iconDom = (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name={icon.name} color={icon.color} size={icon.size} style={[btnStyles.iconSty, icon.style]}/>
                </View>
            )
        }
    }
    let childrenDom: any
    if (React.isValidElement(children)) {
        childrenDom = children
    } else {
        childrenDom = <Text style={[btnStyles.text, textSty]} numberOfLines={1}>{ children }</Text>
    }

    return (
        <TouchableHighlight
            activeOpacity={1}
            underlayColor={underlayColor}
            onPress={(e?: any)=> { onClick && onClick(e) }}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onShowUnderlay={onShowUnderlay}
            onHideUnderlay={onHideUnderlay}
            disabled={disabled}
            style={wrapperSty}
            {...restProps}
            >
            <View style={btnStyles.container}>
                { loading ? <Indicator style={btnStyles.indicator} color={type === 'primary' ? 'blue' : 'blue'}/> : null }
                { iconDom }
                { childrenDom }
            </View>
        </TouchableHighlight>
    )
}
