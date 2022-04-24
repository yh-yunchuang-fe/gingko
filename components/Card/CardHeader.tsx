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
    const node = React.isValidElement(children) ? (
        <View style={{ flex: 1 }}>{children}</View>
    ) : (
        <Text style={styles.headerContent}>{children}</Text>
    )

    return (
        <View style={[styles.headerTitle, style]} {...restProps}>
            { node }
        </View>
    )
}
