/**
 * @author zhangyi
 * @date 2018/3/20
 */
/**
 * TODO 后续需添加对mode = 'radio'的支持
 */
import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import styles from './style'
import RadioGroupProps from './propsType'

export default function RadioGroup(props: RadioGroupProps) {

    const {
        options = [], 
        style,
        mode = 'button',
        defaultIndex = 0,
    } = props

    const index = props.index ? props.index : (defaultIndex || 0)
    const [activeIndex, setActiveIndex] = React.useState(index)

    React.useEffect(() => {
        if (props.index !== activeIndex) {
            setActiveIndex(activeIndex)
        }
    }, [props.index])

    if (mode !== 'button') {
        console.warn('暂支持button模式')
        return null
    }

    const onChange = (item: any, idx: any) => {
        setActiveIndex(idx)
        props.onChange && props.onChange(item, index)
    }

    const dom = options.map((item, idx) => {
        let itemSty: any = null
        let activeSty: any = null
        let activeText: any = null
        let cutLineSty: any = styles.cutLineSty

        if (idx === 0) {
            itemSty = styles.firstRadioBtn
        } else if (idx === options.length - 1) {
            itemSty = styles.lastRadioBtn
            cutLineSty = null
        }

        if (activeIndex === idx) {
            activeSty = styles.activeRadioBtn
            activeText = styles.activeRadioBtnText
        }

        return (
            <View style={cutLineSty} key={idx}>
                <TouchableOpacity onPress={() => {onChange(item, idx)}}>
                    <View style={[styles.radioBtn, itemSty, activeSty]}>
                        <Text style={[styles.radioBtnText, activeText]}>
                            { item }
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    })

    return (
        <View style={[styles.radioGroup, style]}>
            { dom }
        </View>
    )
}
