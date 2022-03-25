/**
 * @author zhangyi
 * @date 2018/3/15
 */
import React from 'react'
import {
    View,
    Slider
} from 'react-native'
import {
    WhiteSpace,
    SearchBar
} from '../../../components/index'

export default () => {
    const [state, setState] = React.useState({
        value: '',
        value2: 0
    })

    const changeValue = (value) => {
        setState({
            ...state,
            value2: value
        })
    }

    return (
        <View style={{backgroundColor: '#f8f8f8'}}>
            <SearchBar
                placeholder='输入商品名称、条码或编号'
                onSubmit={(value)=> { console.log('onSubmit value:', value) }}
                onChange={(value)=> {
                    setState({ ...state, value })
                }}
                onFocus={()=> { console.log('onFocus') }}
                onBlur={()=> { console.log('onBlur') }}
                onCancel={()=> { console.log('onCancel') }}
                onClear={()=> { console.log('onClear') }}
            />
            <WhiteSpace/>
            <SearchBar
                placeholder='输入商品名称、条码或编号'
                defaultValue='autoFocus'
                autoFocus={true}
                onSubmit={(value)=> { console.log('onSubmit value:', value) }}
                onChange={(value)=> { console.log('onChange value:', value) }}
                onFocus={()=> { console.log('onFocus') }}
                onBlur={()=> { console.log('onBlur') }}
                onCancel={()=> { console.log('onCancel') }}
                onClear={()=> { console.log('onClear') }}
            />
            <WhiteSpace/>
            <Slider value={state.value2} onValueChange={changeValue}/>
            <SearchBar
                value={state.value2.toString()}
                placeholder='value props'
            />
        </View>
    )
}
