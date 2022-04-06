/**
 * @author zhangyi
 * @date 2018/4/20
 */
import React from 'react'
import {
    View,
    Text, 
    TouchableOpacity,
} from 'react-native'
import Icon from '../Icon'
import OptionTagProps from './propsType'
import styles from './style'

export default function OptionTag(props: OptionTagProps) {
    const {
        disabled = false,
        multiple = false,
        selected = false,
        width = 102,
        height = 40,
        style, 
        textStyle, 
        renderText,
        children,
        ...restProps
    } = props

    const [isSelect, setSelected] = React.useState(selected)

    React.useEffect(() => {
        if (props.selected !== isSelect) {
            setSelected(props.selected)
        }
    }, [props.selected])

    const onChange = () => {
        
        setSelected(!isSelect)
        props.onChange && props.onChange(!isSelect)
    }

    const offsetSty = {
        width,
        height
    }

    if (disabled) {
        return (
            <View style={styles.wrap}>
                <View style={[styles.content, style, styles.disabled, offsetSty]}>
                    {
                        renderText ? renderText(isSelect) :
                            <Text style={[styles.text, textStyle, styles.disabledText]}>{ children }</Text>
                    }
                </View>
            </View>
        )
    }

    let activeSty: any = null
    let activeTextSty: any = null
    let multipleNode: any = null
    console.log('isSelect===', isSelect)
    
    if (isSelect) {
        activeSty = styles.active
        activeTextSty = styles.activeText
        if (multiple) {
            multipleNode = (
                <View style={styles.multiple}>
                    <Icon style={styles.multipleIcon} name='checkmark' size={6} color='#fff'/>
                </View>
            )
        }
    }

    return (
        <View style={styles.wrap}>
            <TouchableOpacity onPress={onChange}>
                <View style={[styles.content, style, activeSty, offsetSty]} {...restProps}>
                    {
                        renderText ? renderText(isSelect) :
                            <Text style={[styles.text, textStyle, activeTextSty]}>{ children }</Text>
                    }
                    { multipleNode }
                </View>
            </TouchableOpacity>
        </View>
    )
} 
