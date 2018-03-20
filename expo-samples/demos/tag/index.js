/**
 * @author zhangyi
 * @date 2018/3/12
 */
import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { Tag, WhiteSpace, WingBlank } from '../../../components';

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <WingBlank>
                <WhiteSpace/>
                <View style={{flexDirection: 'row'}}>
                    <Tag>zhangyi</Tag>
                    <Text style={{marginLeft: 10}}>default</Text>
                </View>
                <WhiteSpace/>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Tag color="#24A8E8">外卖</Tag>
                    <Tag color="#FD7622">堂食</Tag>
                    <Tag color="#24A8E8" fill>配送</Tag>
                </View>
                <WhiteSpace/>
                <Tag color="#FD7622" fill>扫码购</Tag>
                <WhiteSpace/>
                <Tag color="#589C3E" fill>门店</Tag>
                <WhiteSpace/>
                <View style={{flexDirection: 'row'}}>
                    <Tag
                        color="#666"
                        activeColor="#24A8E8"
                        size="large"
                        readonly={false}
                    >
                        今天处理
                    </Tag>
                    <Text style={{marginLeft: 10}}>可点击</Text>
                </View>
                <WhiteSpace/>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Tag
                        color="#666"
                        activeColor="#24A8E8"
                        size="large"
                        readonly={false}
                        style={{
                            paddingHorizontal: 24,
                            paddingVertical: 8,
                        }}
                    >
                        模版一
                    </Tag>
                    <Tag
                        color="#666"
                        activeColor="#24A8E8"
                        size="large"
                        readonly={false}
                        style={{
                            paddingHorizontal: 24,
                            paddingVertical: 8,
                        }}
                    >
                        模版二
                    </Tag>
                    <Tag
                        color="#666"
                        activeColor="#24A8E8"
                        size="large"
                        readonly={false}
                        style={{
                            paddingHorizontal: 24,
                            paddingVertical: 8,
                        }}
                    >
                        模版三
                    </Tag>
                </View>
                <WhiteSpace/>
                <Tag
                    fill
                    color="#FFF3EC"
                    textColor="#FD7622"
                >
                    请更换电池
                </Tag>
                <WhiteSpace/>
                <Tag
                    fill
                    color="#E7F7FF"
                    textColor="#24A8E8"
                >
                    已报障，等待维修
                </Tag>
            </WingBlank>
        )
    }
}