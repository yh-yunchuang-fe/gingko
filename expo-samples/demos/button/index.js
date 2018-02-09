import React, { Component } from 'react'
import {
    View,
    Text,
    Alert
} from 'react-native'
import {
    Button,
    WhiteSpace
} from '../../../components'


export default class ButtonDemo extends Component {
    render() {
        return (
            <View style={{marginVertical: 50, marginHorizontal: 20}}>
                <Button onClick={()=>{ Alert.alert('button') }}>
                    default button
                </Button>
                <WhiteSpace/>
                <Button disabled>
                    default button
                </Button>
                <WhiteSpace/>
                <Button type="primary">
                    primary button
                </Button>
                <WhiteSpace/>
                <Button type="primary" disabled>
                    primary button
                </Button>
                <WhiteSpace/>
                <Button type="warning">
                    warning button
                </Button>
                <WhiteSpace/>
                <Button type="warning" disabled>
                    warning button
                </Button>
                <WhiteSpace/>
                <Button size="large">
                    large button
                </Button>
                <WhiteSpace/>
                <Button size="small">
                    small button
                </Button>
            </View>
        )
    }
}