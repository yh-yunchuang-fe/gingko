/**
 * Created by beilunyang on 2018/3/27
 */
import React from 'react'
import {
    View,
    Text,
    Image,
    Animated,
} from 'react-native'
import { IPropsType }from './propsType'
import Icon from '../Icon'
import Indicator from '../Indicator'
import styles from './style'
import variables from '@src/style'

export default class Toast extends React.Component<IPropsType, any> {
    static defaultProps = {
        duration: 2000,
        animationEnd: () => {},
        onClose: () => {},
        position: 'center',
        mask: false,
        style: {},
    }

    state = {
        fadeAnim: new Animated.Value(0),
    }

    anim: any = null

    ownIcon = false

    componentDidMount() {
        const {
            type,
            onClose,
            duration,
            animationEnd,
        } = this.props
        if ((duration as number) < 0) {
            console.warn('duration can not less than or equal to 0')
            return
        }
        const start = Animated.timing(this.state.fadeAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false
        })
        
        const end = Animated.timing(this.state.fadeAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false
        })
        const survival = Animated.delay(duration!)
        if ((duration as number) > 0 && type !== 'loading') {
            this.anim = Animated.sequence([start, survival, end])
        } else {
            this.anim = Animated.sequence([start, survival])
        }
        this.anim.start(() => {
            this.anim = null
            if ((duration as number) > 0 && type !== 'loading') {
                onClose && onClose()
                animationEnd && animationEnd()
            }
        })
    }

    componentWillUnmount() {
        if (this.anim) {
            this.anim.stop()
            this.anim = null
        }
    }

    renderIcon() {
        const { type, icon } = this.props

        if (type === 'loading') {
            return (
                <View style={styles.iconContainer}>
                    <Indicator size={variables.width_toast_withicon_icon}/>
                </View>
            )
        }

        let iconName = ''
        switch (type) {
            case 'success':
                iconName = 'unchecked'
                break
            case 'fail':
                iconName = 'close-circle-o'
                break
            case 'warn':
                iconName = 'alert'
                break
        }

        if (iconName) {
            this.ownIcon = true
            return (
                <View style={styles.iconContainer}>
                    <Icon
                        name={iconName}
                        color={variables.color_toast_icon}
                        size={variables.width_toast_withicon_icon}
                    />
                </View>
            )
        }


        if (React.isValidElement(icon)) {
            this.ownIcon = true
            return (
                <View style={styles.iconContainer}>{icon}</View>
            )
        }
        if (typeof icon === 'function') {
            const elements: any = icon()
            if (React.isValidElement(elements)) {
                this.ownIcon = true
                return (
                    <View style={styles.iconContainer}>{elements}</View>
                )
            }
            console.warn('icon must a function that can render reactElements')
            return null
        }
        return null
    }

    renderContent() {
        const { content } = this.props
        if (typeof content === 'string') {
            return (
                <View style={[
                    styles.textContainer,
                    this.ownIcon ? { justifyContent: 'flex-start', paddingBottom: 4 } : {}
                ]}>
                    <Text style={styles.contentText}>{content}</Text>
                </View>
            )
        }
        if (React.isValidElement(content)) {
            return <View style={styles.textContainer}>{content}</View>
        }
        return null
    }

    render() {
        const {
            style,
            mask,
            position,
        } = this.props

        let sty: any = null
        switch (position) {
            case 'top':
                sty = { position: 'absolute', top: 80 }
                break
            case 'bottom':
                sty = { position: 'absolute', bottom: 80 }
                break
        }

        return (
            <View
                style={[styles.container, position === 'center' ? { justifyContent: 'center' } : {}]}
                pointerEvents={mask ? undefined : 'box-none'}
            >
                <Animated.View style={[
                    styles.innerContainer,
                    sty,
                    style,
                    { opacity: this.state.fadeAnim },
                ]}>
                    {this.renderIcon()}
                    {this.renderContent()}
                </Animated.View>
            </View>
        )
    }
}
