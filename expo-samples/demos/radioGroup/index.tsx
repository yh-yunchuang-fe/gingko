/**
 * @author zhangyi
 * @date 2018/3/21
 */
import React from 'react'
import {
    WingBlank,
    WhiteSpace,
    RadioGroup
} from '../../../components/index'

export default () => {
    return (
        <WingBlank>
            <WhiteSpace/>
            <RadioGroup
                mode="button"
                radios={['飞行中', '已落地', '已落地', '已落地']}
            />
            <WhiteSpace/>
            <WhiteSpace/>
            <RadioGroup
                mode="button"
                radios={['飞行中(12)', '已落地(0)']}
            />
            <WhiteSpace/>
            <WhiteSpace/>
            <RadioGroup
                mode="button"
                radios={['飞行中(12)', '已落地']}
            />
        </WingBlank>
    )
}