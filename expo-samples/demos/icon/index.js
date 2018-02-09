import React, { Component } from 'react'
import {
    View,
    Alert
} from 'react-native'
import {
    Icon,
    WhiteSpace
} from '../../../components'

export default class IconDemo extends Component {
    render() {
        return (
            <View style={{marginVertical: 50, marginHorizontal: 20}}>
                <Icon name="search"/>
                <WhiteSpace/>
                <Icon name="warning"/>
            </View>
        )
    }
}