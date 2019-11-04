import React from 'react'
import {
    View
} from "react-native";
import {CardBodyProps} from "./propsType";
import styles from './style'

export default class CardBody extends React.Component<CardBodyProps, any> {
    static defaultProps = {
        style: {}
    };

    render() {
        const { style, ...restProps } = this.props;
        return (
            <View style={[styles.body, style]} {...restProps}/>
        )
    }
}