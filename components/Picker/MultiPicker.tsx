/**
 * Created by beilunyang on 2018/4/10
 */
import React from 'react'
import { View } from 'react-native'

export default function MultiPicker(props: any) {
    const {
        children,
        value,
        style,
        itemStyle,
        columnStyle,
        ...rest
    } = props

    const getValue = () => {
        if (Array.isArray(value) && value.length > 0) {
            return value
        }

        if (!children) {
            return []
        }

        return React.Children.map(children, (col: any) => {
            const items: any = React.Children.toArray(col.props.children)
            return items[0] && items[0].props.value
        })
    }

    const onChange = (idx: any, val: any) => {
        const values: any = getValue()
        values[idx] = val
        props.onChange && props.onChange(values, idx)
    }

    const vals: any = getValue()
    const elements = React.Children.map(children, (col: any, idx) => {
        const dataLen = children.length
        let currentType: any
        if (dataLen === 1) {
            currentType = ''
        }else if (idx === 0) {
            currentType = 'first'
        } else if ((idx + 1) === dataLen) {
            currentType = 'last'
        } else {
            currentType = 'center'
        }

        let fontSize = 18
        if (dataLen === 3) {
            fontSize = 16
        } else if (dataLen === 5) {
            fontSize = 14
        }

        return React.cloneElement(col, {
            ...rest,
            selectedValue: vals[idx],
            currentIndex: idx,
            currentType,
            onValueChange: (val: any) => {
                onChange(idx, val)
            },
            style: { 
                flex: 1,
                marginHorizontal: -4, 
                ...columnStyle[idx] },
            itemStyle: {
                fontSize,
                ...itemStyle[idx]
            },
        })
    })
    return (
        <View style={[{ flexDirection: 'row',justifyContent: 'center' }, style]}>
            {elements}
        </View>
    )
}
