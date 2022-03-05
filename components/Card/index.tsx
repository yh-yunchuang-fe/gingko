import React from 'react'
import {
    View
} from 'react-native'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import { CardProps } from './propsType'
import styles from './style'

export default class Card extends React.Component<CardProps, any> {
    static defaultProps = {
        full: false,
        style: {},
    }

    static Header = CardHeader
    static Body = CardBody
    static Footer = CardFooter

    render() {
        const { full, style, children, ...restProps } = this.props
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
}