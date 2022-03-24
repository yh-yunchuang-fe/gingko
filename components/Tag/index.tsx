/**
 * @author zhangyi
 * @date 2018/3/9
 */
import React from 'react'
import {
    View,
    Text, TouchableWithoutFeedback,
} from 'react-native'
import styles from './style'
import TagProps from './propsType'

export default function Tag(props: TagProps) {

    const {
        readonly = true,
        fill = false,
        color = '#666',
        textColor = '',
        activeColor = '#24A8E8',
        style = null,
        size = 'default',
        selected = false,
        textStyle,
        children,
        onChange,
        ...restProps
    } = props

    const [isSelect, setSelected] = React.useState(props.selected)

    React.useEffect(() => {
        if (selected !== isSelect) {
            setSelected(isSelect)
        }
    }, [props.selected])

    const onClick = () => {
        if (readonly) {
            return
        }

        setSelected(!isSelect)
        onChange && onChange(!isSelect)
    }

    let sty: object = {}
    let textSty: object  = {}

    if (fill) {
        sty = {
            backgroundColor: isSelect ? activeColor : color,
            borderWidth: 0
        }
        textSty = {
            color: textColor ? textColor : '#ffffff'
        }
    } else {
        sty = {
            borderColor: isSelect ? activeColor : color,
        }
        textSty = {
            color: isSelect ? activeColor : color,
        }
    }

    const textSizeSty = styles[`text${size}Sty`]

    return <View style={styles.wrap}>
        <TouchableWithoutFeedback onPress={readonly ? () => {} : onClick}>
            <View style={[styles.content, sty, style]} {...restProps}>
                <Text style={[styles.text, textSizeSty, textSty, textStyle]}>
                    { children }
                </Text>
            </View>
        </TouchableWithoutFeedback>
    </View>
}
