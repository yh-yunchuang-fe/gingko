/**
 * @author zhangyi
 * @date 2018/3/25
 */
import React, { Component } from 'react'
import {
    View
} from 'react-native'
import {
    Icon,
    WhiteSpace,
    NavBar
} from '../../../components'

export default class NavBarDemo extends Component {
    render() {
        return (
            <View>
                <WhiteSpace/>
                <NavBar
                >
                    导航栏
                </NavBar>
            </View>
        )
    }
}

