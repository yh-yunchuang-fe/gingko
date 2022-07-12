/**
 * Created by beilunyang on 2018/2/9
 */
import React, { useEffect, useState } from 'react'
import {
    Text,
    View,
    Platform,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import { Picker as RNPicker } from '@react-native-picker/picker'
import AndroidPicker from './Picker.android'
import MultiPicker from './MultiPicker'
import Popup from '../Popup'
import {
    IItemProps,
    IPickerProps,
} from './propsType'
import styles from './style'

const isAndroid = Platform.OS === 'android'

function Picker(props: IPickerProps) {
    const {
        dismissText = '取消',
        okText = '完成',
        onDismiss = () => {},
        title = '',
        data = [],
        style = {},
        itemStyle = [],
        columnStyle = [],
        visible = false,
    } = props

    const [state, setState] = useState({
        value: props.value || props.defaultValue
    })

    useEffect(() => {
        if (props.value !== state.value) {
            setState(props.value)
        }
    }, [props.value])

    const renderHeader = () => (
        <View style={styles.header}>
            <TouchableOpacity onPress={onDismiss}>
                <Text style={styles.dismiss}>{dismissText}</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={() => {
                props.onOk && props.onOk(state.value)
            }}>
                <Text style={styles.ok}>{okText}</Text>
            </TouchableOpacity>
        </View>
    )
    const renderItems = (group: IItemProps[]) => {
        return group.map(({ label, value }, idx) => {
            if (label === undefined || label === null) {
                return (  // @ts-ignore
                    <RNPicker.Item label={String(value)} value={value} key={idx} />
                )
            } else {
                // @ts-ignore
                return <RNPicker.Item label={String(label)} value={value} key={idx} />
            }
        })
    }

    const renderCols = () => {
        if (Array.isArray(data)) {
            const Pick: any = isAndroid ? AndroidPicker : RNPicker
            return data.map((group, idx) => (
                <Pick key={idx}>
                    {renderItems(group)}
                </Pick>
            ))
        }
        return null
    }

    const onChange = (values: any, idx: any) => {
        if (!('value' in props)) {
            setState({
                value: values,
            })
        }

        !!props.onChange && props.onChange(values, idx)
    }

    const renderPicker = () => {
        const Pick: any = isAndroid ? AndroidPicker : RNPicker
        const {
            value,
            children,
            ...rest
        } = props
        if (children) {

            const itemPickSty = Array.isArray(itemStyle) ? itemStyle[0] : itemStyle
            const columnPickSty = Array.isArray(columnStyle) ? columnStyle[0] : columnStyle
            return (
                <Pick
                    {...rest}
                    itemStyle={StyleSheet.flatten(itemPickSty)}
                    style={StyleSheet.flatten([style, columnPickSty])}
                    onValueChange={onChange}
                    selectedValue={state.value}
                >
                    {children}
                </Pick>
            )
        }

        const itemSty = Array.isArray(itemStyle) ? itemStyle : [itemStyle]
        const columnSty = Array.isArray(columnStyle) ? columnStyle : [columnStyle]
        return (
            <MultiPicker
                {...rest}
                style={style}
                itemStyle={itemSty}
                columnStyle={columnSty}
                onChange={onChange}
                value={state.value}
            >
                {renderCols()}
            </MultiPicker>
        )
    }

    return (
        <Popup visible={visible as boolean}>
            <View style={styles.container}>
                {renderHeader()}
                {renderPicker()}
            </View>
        </Popup>
    )
}

Picker.Item = RNPicker.Item

export default Picker