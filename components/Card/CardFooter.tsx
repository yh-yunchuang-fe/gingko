import React from 'react'
import {
    View,
    Text
} from 'react-native'
import {CardFooterProps} from './propsType'
import styles from './style'

export default function CardFooter({
    style = {},
    children,
    ...restProps
}: CardFooterProps) {

    const node = typeof children === 'string' ? (
        <Text style={styles.footerContent}>{children}</Text>
    ) : (
        <View style={{ flex: 1 }}>{children}</View>
    )

    return (
        <View style={[styles.footer, style]} {...restProps}>
            { node }
        </View>
    )
}
