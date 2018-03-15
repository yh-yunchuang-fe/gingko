/**
 * @author zhangyi
 * @date 2018/3/15
 */
import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import {
    WingBlank,
    WhiteSpace,
    SearchBar
} from '../../../components/index'

export default class SearchBarDemo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{backgroundColor: '#f8f8f8'}}>
                <SearchBar
                    placeholder="输入商品名称、条码或编号"
                    onSubmit={(value)=>{ console.log('onSubmit value:', value) }}
                    onChange={(value)=>{ console.log('onChange value:', value) }}
                    onFocus={()=>{ console.log('onFocus') }}
                    onBlur={()=>{ console.log('onBlur') }}
                    onCancel={()=>{ console.log('onCancel') }}
                    onClear={()=>{ console.log('onClear') }}
                />
                <WhiteSpace/>
                <SearchBar
                    placeholder="输入商品名称、条码或编号"
                    defaultValue="autoFocus"
                    autoFocus={true}
                    onSubmit={(value)=>{ console.log('onSubmit value:', value) }}
                    onChange={(value)=>{ console.log('onChange value:', value) }}
                    onFocus={()=>{ console.log('onFocus') }}
                    onBlur={()=>{ console.log('onBlur') }}
                    onCancel={()=>{ console.log('onCancel') }}
                    onClear={()=>{ console.log('onClear') }}
                />
            </View>
        )
    }
}