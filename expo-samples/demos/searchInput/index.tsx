/**
 * @author zhangyi
 * @date 2018/4/18
 */
import React from 'react'
import {
    View,
    Slider
} from 'react-native'
import {
    WingBlank,
    WhiteSpace,
    SearchInput
} from '../../../components/index'

export default () => {
    const [value, setValue] = React.useState(0.1)

    const changeValue = (val: any) => {
        setValue(val)
    }

    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <WingBlank>
                <WhiteSpace/>
                <SearchInput
                    placeholder='输入商品名称、条码或编号'
                    onSubmit={(val: any) => {
                        console.log('onSubmit value:', val)
                    }}
                    onChange={(val: any) => {
                        console.log('onChange value:', val)
                    }}
                    onFocus={() => {
                        console.log('onFocus')
                    }}
                    onBlur={() => {
                        console.log('onBlur')
                    }}
                    onClear={() => {
                        console.log('onClear')
                    }}
                />
                <WhiteSpace/>
                <SearchInput
                    placeholder='输入商品名称、条码或编号'
                    defaultValue='autoFocus'
                    autoFocus={true}
                    onSubmit={(val) => {
                        console.log('onSubmit value:', val)
                    }}
                    onChange={(val) => {
                        console.log('onChange value:', val)
                    }}
                    onFocus={() => {
                        console.log('onFocus')
                    }}
                    onBlur={() => {
                        console.log('onBlur')
                    }}
                    onClear={() => {
                        console.log('onClear')
                    }}
                />
                <WhiteSpace/>
                <Slider value={value} onValueChange={changeValue}/>
                <SearchInput
                    value={value.toString()}
                    placeholder='value props'
                    onSubmit={(val) => {
                        console.log('onSubmit value:', val)
                    }}
                    onChange={(val) => {
                        console.log('onChange value:', val)
                    }}
                    onFocus={() => {
                        console.log('onFocus')
                    }}
                    onBlur={() => {
                        console.log('onBlur')
                    }}
                    onClear={() => {
                        console.log('onClear')
                    }}
                />
                <WhiteSpace/>
                <SearchInput
                    placeholder='value测试'
                    value='value值'
                />
            </WingBlank>
        </View>
    )
}
