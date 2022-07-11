import React from 'react'
import {
    View,
    Text
} from 'react-native'
import {CardHeaderProps} from './propsType'
import styles from './style'

export default function CardHeader({
    style = {},
    children,
    ...restProps
}: CardHeaderProps) {
    const node = typeof children === 'string' ? (
        <Text style={styles.headerContent}>{children}</Text>
    ) : (
        <View style={{ flex: 1 }}>{children}</View>
    )

    return (
        <View style={[styles.headerTitle, style]} {...restProps}>
            { node }
        </View>
    )
}
