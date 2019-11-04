import React, { Component } from 'react'
import {
    View,
    Text,
} from 'react-native'
import {
    Card,
    Button,
    Indicator,
    WingBlank,
    WhiteSpace,
} from '../../../components/index'

export default class IndicatorDemo extends Component {

    render() {
        return (
            <WingBlank>
                <WhiteSpace/>
                <Indicator size="sm"/>
                <WhiteSpace/>
                <Indicator/>
                <WhiteSpace/>
                <Indicator size="lg"/>
                <WhiteSpace/>
                <Indicator size="xl"/>
                <WhiteSpace/>
                <Indicator text="Loading..."/>
                <WhiteSpace/>
                <WhiteSpace/>
                <View style={{
                    width: 60,
                    height: 60,
                    backgroundColor: '#000',
                    opacity: 0.8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4
                }}>
                    <Indicator size="lg" color="white" text="加载中"
                               style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
                               textStyle={{fontSize: 14, color: '#fff', marginTop: 8, marginLeft: 0}}
                    />
                </View>

            </WingBlank>
        )
    }
}