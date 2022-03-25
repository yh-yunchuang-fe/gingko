/**
 * @author zhangyi
 * @date 2018/3/28
 */
import React, { Component } from 'react'
import {
    View
} from 'react-native'
import {
    WhiteSpace,
    Icon,
    Result
} from '../../../components'

export default () => {
    return (
        <View>
            <WhiteSpace/>
            <Result/>
            <WhiteSpace/>
            <Result
                img={<Icon name='checkmark' size={40}/>}
                message='还没有订单记录哦'
            />
            <Result
                img={<Icon name='checkmark' size={30}/>}
                title='搜索结果'
                message='还没有订单记录哦'
            />
        </View>
    )
}
