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

    const node = React.isValidElement(children) ? (
        <View style={{ flex: 1 }}>{children}</View>
    ) : (
        <Text style={styles.footerContent}>{children}</Text>
    )

    return (
        <View style={[styles.footer, style]} {...restProps}>
            { node }
        </View>
    )
}
