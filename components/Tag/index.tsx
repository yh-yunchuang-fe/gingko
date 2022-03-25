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

const colors = ['orange', 'blue', 'green', 'red', 'gray']

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

    const getColor = () => {
        switch(color) {
            case 'orange':
                return {text: '#FE8F1D', bgColor: 'rgba(254, 143, 29, 0.1)'}
            case 'blue':
                return {text: '#069DFF', bgColor: 'rgba(6, 157, 255, 0.1)'}
            case 'green':
                return {text: '#00BF7A', bgColor: 'rgba(0, 191, 122, 0.1)'}
            case 'red':
                return {text: '#FF2E2E', bgColor: 'rgba(255, 46, 46, 0.1)'}
            case 'gray':
                return {text: '#9E9E9E', bgColor: 'rgba(158, 158, 158, 0.1)'}

        }
    }

    console.log('getColor===', getColor(), )

    let sty: object = {}
    let textSty: object  = {}

    if (colors.includes(color) && fill) {
        const currentColor = getColor()
        sty = {
            backgroundColor: currentColor?.bgColor,
            borderWidth: 0
        }
        textSty = {
            color: currentColor?.text
        }
    } else if (fill) {
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
