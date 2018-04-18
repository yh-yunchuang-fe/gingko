/**
 * @author zhangyi
 * @date 2018/4/18
 */
import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import {
    WingBlank,
    WhiteSpace,
    SearchInput
} from '../../../components/index'

export default class SearchInputDemo extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <WingBlank>
                <WhiteSpace/>
                <SearchInput
                    placeholder="输入商品名称、条码或编号"
                    onSubmit={(value)=>{ console.log('onSubmit value:', value) }}
                    onChange={(value)=>{ console.log('onChange value:', value) }}
                    onFocus={()=>{ console.log('onFocus') }}
                    onBlur={()=>{ console.log('onBlur') }}
                    onClear={()=>{ console.log('onClear') }}
                />
                <WhiteSpace/>
                <SearchInput
                    placeholder="输入商品名称、条码或编号"
                    defaultValue="autoFocus"
                    autoFocus={true}
                    onSubmit={(value)=>{ console.log('onSubmit value:', value) }}
                    onChange={(value)=>{ console.log('onChange value:', value) }}
                    onFocus={()=>{ console.log('onFocus') }}
                    onBlur={()=>{ console.log('onBlur') }}
                    onClear={()=>{ console.log('onClear') }}
                />
                </WingBlank>
            </View>
        )
    }
}