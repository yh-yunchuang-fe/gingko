/**
 * Created by suki on 2018/12/13.
 */
import * as React from 'react';
import BodyProps from './propdType'
import { View, Text } from 'react-native'
import styles from './style'

export default class Body extends React.Component<BodyProps, any> {
    static defaultProps = {
        style: null
    }

    render() {
        const { style, children } = this.props

        return (
            <View style={[styles.container, style]}>
                { children }
            </View>
        )
    }
}
