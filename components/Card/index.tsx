import React from 'react'
import {
    View
} from 'react-native'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import { CardProps } from './propsType'
import styles from './style'

function Card(props: CardProps) {
    const {
        full = false,
        style = {},
        children, 
        ...restProps
    } = props

    const fullSty = full ? styles!.full : {}

    const childDom = React.Children.map(children, (child) => React.cloneElement(
        child as React.ReactElement<any>,
        ),
    )

    return (
        <View style={[styles.card, style, fullSty]} {...restProps}>
            { childDom }
        </View>
    )
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter

export default Card