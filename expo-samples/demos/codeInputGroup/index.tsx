/**
 * @author zhangyi
 * @date 2018/5/8
 */
import React from 'react'
import {
    Text,
} from 'react-native'
import {
    WhiteSpace,
    WingBlank,
    CodeInputGroup
} from '../../../components/index'

export default () => {
    const [value, setValue] = React.useState('')

    return <WingBlank>
        <WhiteSpace/>
        <CodeInputGroup
            onChange={(val)=> {
                setValue(val)
            }} />
        <WhiteSpace/>
        <Text>{ value }</Text>
    </WingBlank>
}
