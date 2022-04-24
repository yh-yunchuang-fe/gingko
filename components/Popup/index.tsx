/**
 * @author zhangyi
 * @date 2018/2/28
 */
import React from 'react'
import Dialog from '../Dialog'
import IPopupProps from './propsType'
import styles from './style'
import {
    TouchableOpacity,
    ScrollView,
    View, Text } from 'react-native'
import { Icon } from '../'

export default function Popup(props: IPopupProps) {

    const {
        visible = false,
        animateAppear = true,
        animationDuration = 300,
        maskClosable = true,
        onClose = () => { },
        onChange = () => { },
        onAnimationEnd = () => { },
        style = {},
        numberOfLines = 2,
        children,
        type = 'none',
        title, // '主标题',
        hint, // '这是提供二行注释, 通过信息澄清的方式，这是提供一行或二行注释'
    } = props

    console.log
    return (
        <Dialog
            transparent
            visible={visible}
            animationType='slide-up'
            animateAppear={animateAppear}
            animationDuration={animationDuration}
            onClose={onClose}
            maskClosable={maskClosable}
            onAnimationEnd={onAnimationEnd}
            style={[style, styles.container]}>
            {(hint || title) && <View style={styles.hintWrap}>
                {title && type === 'close' && <View style={[styles.headerWrap, styles.closeHeaderWrap]}>
                    <View style={{width: 30}} />
                    <View style={styles.titleWrap}>
                        <Text style={styles.titleText}>{title}</Text>
                        {hint && <Text style={styles.hintText} numberOfLines={numberOfLines}>{hint}</Text>}
                    </View>
                    <TouchableOpacity style={{width: 30}} onPress={onClose}>
                        <Icon name='close' color='#9E9E9E' size={12} />
                    </TouchableOpacity> 
                </View>}
                {title && type === 'cancel' && <View style={[styles.headerWrap, styles.cancelHeaderWrap]}>
                    <TouchableOpacity onPress={onClose}>
                        <Text style={styles.cancelText}>取消</Text>
                    </TouchableOpacity>
                    <View style={styles.titleWrap}>
                        <Text style={styles.titleText}>{title}</Text>
                        {hint && <Text style={styles.hintText} numberOfLines={numberOfLines}>{hint}</Text>}
                    </View>
                    <TouchableOpacity onPress={onChange}>
                        <Text style={styles.finishText}>完成</Text>
                    </TouchableOpacity>
                </View>}
                
            </View>}
            <ScrollView>
                { children }
            </ScrollView>
        </Dialog>
    )
}
