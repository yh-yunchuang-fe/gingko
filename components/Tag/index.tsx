/**
 * @author zhangyi
 * @date 2018/3/9
 */
import React from 'react'
import {
    View,
    Text, 
    TouchableWithoutFeedback
} from 'react-native'
import styles from './style'
import ITagProps from './propsType'
import variables from '@src/style'

export default function Tag(props: ITagProps) {
    const {
        readonly = true,
        fill = false,
        font = false,
        color = variables.color_tag_solid_bg_gray,
        textColor = '',
        activeColor = variables.color_tag_solid_bg_orange,
        style = null,
        size = 'md',
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

    const colors = ['orange', 'blue', 'green', 'red', 'gray']

    if (fill) {
        if (colors.includes(color)) {
            sty = {
                backgroundColor: variables[`color_tag_solid_bg_${color}`],
                borderWidth: 0
            }
            textSty = {
                color: variables.color_tag_font_inverse
            }
        } else {
            sty = {
                backgroundColor: isSelect ? activeColor : color,
                borderWidth: 0
            }
            textSty = {
                color: textColor ? textColor : variables.color_tag_font_inverse
            }
        }
    } else if(font) {
        if (colors.includes(color)) {
            sty = {
                backgroundColor: variables[`color_tag_solid_bg_light_${color}`],
                borderWidth: 0
            }
            textSty = {
                color: variables[`color_tag_solid_bg_${color}`],
            }
        } else {
            sty = {
                backgroundColor: isSelect ? activeColor : color,
                borderWidth: 0
            }
            textSty = {
                color: textColor ? textColor : variables.color_tag_font_inverse
            }
        }
    } else if (colors.includes(color)) {
        sty = {
            borderColor: isSelect ? activeColor : variables[`color_tag_solid_bg_${color}`],
        }
        textSty = {
            color: isSelect ? activeColor : variables[`color_tag_solid_bg_${color}`],
        }
    } else {
        sty = {
            borderColor: isSelect ? activeColor : color,
        }
        textSty = {
            color: isSelect ? activeColor : color,
        }
    }

    const contentSty = {
        paddingHorizontal: variables[`spacing_tag_paddingLeft_${size}`],
        paddingVertical: variables[`spacing_tag_paddingTop_${size}`]
    }

    const textSizeSty = {
        fontSize: variables[`font_tag_size_${size}`],
        lineHeight: variables[`font_tag_lineheight_${size}`],
        fontWeight: variables.font_tag_weight_regular
    }

    return <View style={styles.wrap}>
        <TouchableWithoutFeedback onPress={readonly ? () => {} : onClick}>
            <View style={[styles.content, contentSty, sty, style]} {...restProps}>
                <Text style={[textSizeSty, textSty, textStyle]}>
                    { children }
                </Text>
            </View>
        </TouchableWithoutFeedback>
    </View>
}
