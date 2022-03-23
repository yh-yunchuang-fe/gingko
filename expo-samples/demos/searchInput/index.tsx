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

    const changeValue = (value) => {
        setValue(value)
    }

    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <WingBlank>
                <WhiteSpace/>
                <SearchInput
                    placeholder="输入商品名称、条码或编号"
                    onSubmit={(value) => {
                        console.log('onSubmit value:', value)
                    }}
                    onChange={(value) => {
                        console.log('onChange value:', value)
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
                    placeholder="输入商品名称、条码或编号"
                    defaultValue="autoFocus"
                    autoFocus={true}
                    onSubmit={(value) => {
                        console.log('onSubmit value:', value)
                    }}
                    onChange={(value) => {
                        console.log('onChange value:', value)
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
                    placeholder="value props"
                    onSubmit={(value) => {
                        console.log('onSubmit value:', value)
                    }}
                    onChange={(value) => {
                        console.log('onChange value:', value)
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
                    placeholder="value测试"
                    value="value值"
                />
            </WingBlank>
        </View>
    )
}