/**
 * Created by beilunyang on 2018/2/9
 */
import * as React from 'react'
import {
    Text,
    View,
    Platform,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import AndroidPicker from './Picker.android'
import MultiPicker from './MultiPicker'
import Popup from '../Popup'
import {
    IItemProps,
    IPickerProps,
} from './propsType'
import styles from './style'

const isAndroid = Platform.OS === 'android'

export default class extends React.Component<IPickerProps, any> {

    static Item = Picker.Item

    static defaultProps: IPickerProps = {
        dismissText: '取消',
        okText: '完成',
        onDismiss: () => {},
        onOk: () => {},
        title: '',
        data: [],
        style: {},
        itemStyle: [],
        columnStyle: [],
        visible: false,
    }

    state = {
        value: this.props.value || this.props.defaultValue,
    }

    componentWillReceiveProps(nextProps: any) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value,
            })
        }
    }

    renderHeader = () => {
        const {
            dismissText,
            onOk,
            onDismiss,
            okText,
            title,
        } = this.props
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={onDismiss}>
                    <Text style={styles.dismiss}>{dismissText}</Text>
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity onPress={() => {
                    this.props.onOk && this.props.onOk(this.state.value)
                }}>
                    <Text style={styles.ok}>{okText}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderItems = (group: IItemProps[]) => {
        return group.map(({ label, value }, idx) => {
            console.log('label===', label, value)
            if (label === undefined || label === null) {
                return (  // @ts-ignore
                    <Picker.Item label={String(value)} value={value} key={idx} />
                )
            } else {
                // @ts-ignore
                return <Picker.Item label={String(label)} value={value} key={idx} />
            }
        })
    }

    renderCols = () => {
        const { data } = this.props
        if (Array.isArray(data)) {
            const Pick: any = isAndroid ? AndroidPicker : Picker
            return data.map((group, idx) => {
                return (
                    <Pick key={idx}>
                        {this.renderItems(group)}
                    </Pick>
                )
            })
        }
        return null
    }

    onChange = (values: any, idx: any) => {
        const { onChange } = this.props
        if (!('value' in this.props)) {
            this.setState({
                value: values,
            })
        }
        if (onChange) {
            onChange(values, idx)
        }
    }

    renderPicker = () => {
        const Pick: any = isAndroid ? AndroidPicker : Picker
        const {
            value,
            onChange,
            children,
            style,
            itemStyle,
            columnStyle,
            ...rest
        } = this.props
        if (children) {

            const itemPickSty = Array.isArray(itemStyle) ? itemStyle[0] : itemStyle
            const columnPickSty = Array.isArray(columnStyle) ? columnStyle[0] : columnStyle
            return (
                <Pick
                    {...rest}
                    itemStyle={StyleSheet.flatten(itemPickSty)}
                    style={StyleSheet.flatten([style, columnPickSty])}
                    onValueChange={this.onChange}
                    selectedValue={this.state.value}
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
                onChange={this.onChange}
                value={this.state.value}
            >
                {this.renderCols()}
            </MultiPicker>
        )
    }

    render() {
        const { visible } = this.props
        return (
            <Popup visible={visible as boolean}>
                <View style={styles.container}>
                    {this.renderHeader()}
                    {this.renderPicker()}
                </View>
            </Popup>
        )
    }
}
