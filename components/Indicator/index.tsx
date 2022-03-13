import React from 'react'
import {
    View,
    Animated, Text, Easing
} from 'react-native'
import { Images } from '../../src/assets'
import IndicatorProps from './propsType'
import variables from '../../src/style/variables'
import styles from './style'

export default class Indicator extends React.Component<IndicatorProps, any> {
    public static defaultProps = {
        size: 'md',
        color: 'blue',
        style: {},
        textStyle: {}
    }

    constructor(props: any) {
        super(props)
        this.state = {
            rotate: new Animated.Value(0)
        }
    }

    public componentDidMount() {
        this.startAnimate()
    }

    public componentWillUnmount() {
        this.state.rotate.stopAnimation() // 停止动画
    }

    public startAnimate() {
        Animated.loop(
            Animated.timing(this.state.rotate, {
                toValue: 1,
                duration: 800,
                easing: Easing.linear,
                useNativeDriver: true,
            }), {
                iterations: -1 // 无限循环
            }
        ).start((event) => {
            if (event.finished) {
                console.log('finished')
            }
        })
    }

    public render() {
        const { size, color, text, textStyle, style} = this.props

        const sizeSty = {
            width: variables[`indicator_${size}`],
            height: variables[`indicator_${size}`]
        }
        const spinnerImg = color === 'blue' ? Images.loading_blue : Images.loading_white

        const outPut = this.state.rotate.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '-360deg']
        })

        const rotateSty = { transform: [{rotate: outPut}] }

        return (
            <View style={[styles.indicator, style]}>
                <Animated.Image
                    source={spinnerImg}
                    style={[styles.spinner, sizeSty, rotateSty]}/>
                { text && <Text style={[styles.tip, textStyle]}>{ text }</Text> }
            </View>
        )
    }
}
