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

export default class Button extends React.Component<ButtonProps, any> {

    public static defaultProps = {
        size: 'large',
        type: 'default',
        second: false,
        disabled: false,
        style: {},
        textStyle: {},
        loading: false,
        activeStyle: {},
        onClick: (x?: any) => {},
        onPressIn: (x?: any) => {},
        onPressOut: (x?: any) => {},

        icon: {}
    }
    constructor(props: ButtonProps) {
        super(props)
        this.state = {
            pressIn: false,
            touchIt: false
        }
    }

    public onPressIn = (...args: any[]) => {
        this.setState({pressIn: true})
        if (this.props.onPressIn) {
            (this.props.onPressIn as any)(...args)
        }
    }

    public onPressOut = (...args: any[]) => {
        this.setState({pressIn: false})
        if (this.props.onPressOut) {
            (this.props.onPressOut as any)(...args)
        }
    }

    public onShowUnderlay = (...arg: any[]) => {
        this.setState({ touchIt: true })
        if (this.props.onShowUnderlay) {
            (this.props.onShowUnderlay as any)(...arg)
        }
    }

    public onHideUnderlay = (...arg: any[]) => {
        this.setState({ touchIt: false })
        if (this.props.onHideUnderlay) {
            (this.props.onHideUnderlay as any)(...arg)
        }
    }

    public render() {

        const {
            size, type, style, textStyle, 
            disabled, second,
            activeStyle, onClick, loading,
            icon, children, ...restProps
        } = this.props;

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
            second && btnStyles[`${type}SecondSty`],
            disabled && btnStyles[`${type}DisabledSty`],
            activeStyle && this.state.touchIt && activeStyle,
            style
        ]

        const textSty = [
            btnStyles[`${size}Text`],
            btnStyles[`${type}Text`],
            second && btnStyles[`${type}SecondText`],
            disabled && btnStyles[`${type}DisabledText`],
            this.state.pressIn && btnStyles[`${type}TapText`],
            textStyle
        ]

        const underlayColor = (StyleSheet.flatten(
            btnStyles[activeStyle ? `${type}TapSty` : `${type}Sty`],
        ) as any).backgroundColor

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
                onPressIn={this.onPressIn}
                onPressOut={this.onPressOut}
                onShowUnderlay={this.onShowUnderlay}
                onHideUnderlay={this.onHideUnderlay}
                disabled={disabled}
                style={wrapperSty}
                {...restProps}
                >
                <View style={btnStyles.container}>
                    {
                        loading ? <Indicator style={btnStyles.indicator} color={type === 'primary' ? 'white' : 'blue'}/> : null
                    }
                    { iconDom }
                    { childrenDom }
                </View>
            </TouchableHighlight>
        )
    }
}
