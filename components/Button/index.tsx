import React from 'react'
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native'
import Indicator from '../Indicator'
import IButtonProps from './propsType'
import btnStyles from './style'
import Icon from '../Icon'
import variables from '@src/style'

export default function Button(props: IButtonProps) {
    const {
        size = 'md',
        type = 'primary',
        solid = true,
        line = false,
        link = false,
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

    const currentBtn = props?.line ? 'line' : 'solid'
    const wrapperSty = [
        btnStyles.wrapperSty,
        {
            backgroundColor: link ? 'transparent' : variables[`color_btn_${currentBtn}_${type}_bg`],
            borderColor: variables[`color_btn_${currentBtn}_${type}_border`],
            borderRadius: variables[`radius_btn_${size}`],
            paddingVertical: variables[`spacing_btn_paddingTop_${size}`],
            paddingHorizontal: variables[`spacing_btn_paddingLeft_${size}`],
        },
        style,
        activeStyle && state.touchIt && activeStyle,
    ]

    const textSty = [
        {
            color: link ? variables[`color_btn_text_${type}_font`] : variables[`color_btn_${currentBtn}_${type}_font`],
            fontSize: variables[`font_btn_size_${size}`],
            lineHeight: variables[`font_btn_lineheight_${size}`],
            fontWeight: variables.font_btn_weight
        },
        textStyle
    ]

    const underlayColor = link ? `rgba(255,255,255, 0.1)` : variables[`color_btn_${currentBtn}_${type}_bg`]

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
            activeOpacity={0.3}
            underlayColor={underlayColor}
            onPress={(e?: any)=> { onClick && onClick(e) }}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onShowUnderlay={onShowUnderlay}
            onHideUnderlay={onHideUnderlay}
            disabled={type === 'disable'}
            style={wrapperSty}
            {...restProps}
            >
            <View style={btnStyles.container}>
                { loading && <Indicator style={btnStyles.indicator}/> }
                { iconDom }
                { childrenDom }
            </View>
        </TouchableHighlight>
    )
}
