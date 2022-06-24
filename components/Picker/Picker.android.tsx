/**
 * Created by beilunyang on 2018/3/2
 *
 * modify from https://github.com/react-component/m-picker/blob/master/src/NativePicker.android.tsx
 */

import React from 'react'
import {
    ScrollView,
    View,
    Text,
} from 'react-native'
import PickerMixin from './PickerMixin.android'
import styles from './style/Picker.android'
import { IAndroidPickerProps } from './propsType'
import variables from '@src/style'

export interface IPickerProp {
    select: any
    doScrollingComplete: any
    currentType: any
}

class Picker extends React.Component<IPickerProp & IAndroidPickerProps, any> {
    public itemHeight: number = 0
    public itemWidth: number = 0
    public scrollBuffer: any
    public scrollerRef: any
    public contentRef: any
    public indicatorRef: any

    public onItemLayout = (e: any) => {
        
        const { height, width } = e.nativeEvent.layout
        if (this.itemWidth !== width) {
            this.itemWidth = width
            this.indicatorRef.setNativeProps({
                style: [
                    styles.indicator,
                    {
                        top: height * 2,
                        height,
                        width,
                    },
                ],
            })
        }
        if (this.itemHeight !== height) {
            this.itemHeight = height
            this.scrollerRef.setNativeProps({
                style: {
                    height: height * 5,
                },
            })
            this.contentRef.setNativeProps({
                style: {
                    paddingTop: height * 2,
                    paddingBottom: height * 2,
                },
            })
            // i do no know why!...
            setTimeout(() => {
                this.props.select(this.props.selectedValue, this.itemHeight, this.scrollTo)
            }, 0)
        }
    }

    public componentDidUpdate() {
        this.props.select(this.props.selectedValue, this.itemHeight, this.scrollTo)
    }

    public componentWillUnmount() {
        this.clearScrollBuffer()
    }

    public clearScrollBuffer() {
        if (this.scrollBuffer) {
            clearTimeout(this.scrollBuffer)
        }
    }

    public scrollTo = (y: any) => {
        this.scrollerRef.scrollTo({
            y,
            animated: false,
        })
    }

    public fireValueChange = (selectedValue: any) => {
        if (this.props.selectedValue !== selectedValue && this.props.onValueChange) {
            this.props.onValueChange(selectedValue)
        }
    }

    public onScroll = (e: any) => {
        const { y } = e.nativeEvent.contentOffset
        this.clearScrollBuffer()
        this.scrollBuffer = setTimeout(() => {
            this.clearScrollBuffer()
            this.props.doScrollingComplete(y, this.itemHeight, this.fireValueChange)
        }, 100)
    }

    public render() {
        const { children, selectedValue, itemStyle, style, currentType } = this.props
        const items = React.Children.map(children, (item: any, index) => {
            const totalStyle = [styles.itemText]
            if (selectedValue === item.props.value) {
                totalStyle.push(styles.selectedItemText)
            }
            totalStyle.push(itemStyle)
            return (
                <View
                    ref={(el) => this[`item${index}`] = el}
                    onLayout={index === 0 ? this.onItemLayout : () => {}}
                    key={item.key}>
                    <Text style={totalStyle} numberOfLines={1}>{item.props.label}</Text>
                </View>
            )
        })
        const bgRadius = currentType === 'first' ? {
            borderTopLeftRadius: variables.radius_picker_item,
            borderBottomLeftRadius: variables.radius_picker_item,
        } : currentType === 'last' ? {
            borderTopRightRadius: variables.radius_picker_item,
            borderBottomRightRadius: variables.radius_picker_item,
        } : currentType === 'center' ? {} : {
            borderRadius: variables.radius_picker_item
        }

        return (
            <View style={style}>
                <View ref={(el) => this.indicatorRef = el} style={[styles.indicator, bgRadius]} pointerEvents='box-none' />
                <ScrollView
                    style={styles.scrollView}
                    ref={(el) => this.scrollerRef = el}
                    onScroll={this.onScroll}
                    showsVerticalScrollIndicator={false}
                    overScrollMode='never'>
                    <View ref={(el) => this.contentRef = el}>
                        {items}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default PickerMixin(Picker)
