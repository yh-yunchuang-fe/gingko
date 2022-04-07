/**
 * @author wudi
 * @date 2022/04/06
 */
import React from 'react'
import Dialog from '../Dialog'
import IActionsheetProps from './propsType'
import styles from './style'
import { View, Text } from 'react-native'
import { Button, RadioGroup } from '..'

export default function Actionsheet(props: IActionsheetProps) {

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
        options = [],
        children,
        close, // '取消',
        title, // '主标题',
        hint, // '这是提供二行注释, 通过信息澄清的方式，这是提供一行或二行注释'
    } = props

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
                {title && <Text style={styles.titleText}>{title}</Text>}
                {hint && <Text style={styles.hintText} numberOfLines={numberOfLines}>{hint}</Text>}
            </View>}
            { children }

            {options && <RadioGroup 
                options={options}
                style={styles.radioGroupSty}
                itemStyle={styles.radioGroupItemSty}
                itemTextStyle={styles.radioGroupItemTextSty} 
                onChange={onChange}/>}

            {close && <Button link 
                size='large' 
                style={styles.cancelArea}
                onClick={onClose}>{close}</Button>}
        </Dialog>
    )
}