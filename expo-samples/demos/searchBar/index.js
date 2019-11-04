/**
 * @author zhangyi
 * @date 2018/3/15
 */
import React, { Component } from 'react'
import {
    View,
    Slider
} from 'react-native'
import {
    WingBlank,
    WhiteSpace,
    SearchBar
} from '../../../components/index'

export default class SearchBarDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            value2: 0
        }
    }

    changeValue = (value) => {
        this.setState({
            value2: value
        })
    }

    render() {
        console.log('this.state.value:', this.state.value);
        return (
            <View style={{backgroundColor: '#f8f8f8'}}>
                <SearchBar
                    placeholder="输入商品名称、条码或编号"
                    onSubmit={(value)=>{ console.log('onSubmit value:', value) }}
                    onChange={(value)=>{
                        this.setState({ value })
                    }}
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
                <WhiteSpace/>
                <Slider value={this.state.value2} onValueChange={this.changeValue}/>
                <SearchBar
                    value={this.state.value2.toString()}
                    placeholder="value props"
                />
            </View>
        )
    }
}