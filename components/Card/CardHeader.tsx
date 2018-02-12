import React from 'react'
import {
    View,
    Text
} from "react-native";
import {CardHeaderProps} from "./propsType";
import styles from './style'

export default class CardHeader extends React.Component<CardHeaderProps, any> {
    static defaultProps = {
        style: {}
    };

    render() {
        const {
            children, style, ...restProps
        } = this.props;

        const node = React.isValidElement(children) ? (
            <View style={{ flex: 1 }}>{children}</View>
        ) : (
            <Text style={styles.headerContent}>{children}</Text>
        );

        return (
            <View style={[styles.headerTitle, style]} {...restProps}>
                { node }
            </View>
        )
    }
}