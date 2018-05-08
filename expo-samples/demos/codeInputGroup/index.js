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
    state = {
        value: ''
    };

    render() {
        console.log('this.state.value:', this.state.value);
        return (
            <WingBlank>
                <WhiteSpace/>
                <CodeInputGroup
                    onChange={(value)=>{
                        console.log('value:', value);
                        this.setState({ value })
                    }}
                />
                <WhiteSpace/>
                <Text>{ this.state.value }</Text>
            </WingBlank>
        )
    }
}