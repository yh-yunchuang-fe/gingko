/**
 * @author zhangyi
 * @date 2018/5/8
 */
import React, { Component } from 'react'
import {
    View,
    Text,
    Alert
} from 'react-native'
import {
    Button,
    WhiteSpace,
    WingBlank,
    CodeInputGroup
} from '../../../components/index'


export default class CodeInputGroupDemo extends Component {
    render() {
        return (
            <WingBlank>
                <WhiteSpace/>
                <CodeInputGroup/>
            </WingBlank>
        )
    }
}