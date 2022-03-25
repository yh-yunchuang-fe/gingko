/**
 * @author zhangyi
 * @date 2018/3/12
 */
import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'
import { Tag, WhiteSpace, WingBlank } from '../../../components'

export default () => {
    return ( 
        <WingBlank>
            <Text style={style.tagText}>标签类型</Text>
            <View style={style.tagList}>
                <Tag color='#FE8F1D' fill>标签</Tag>
                <Tag color='orange'>标签</Tag>
                <Tag color='orange' fill>标签</Tag>
            </View>
            <WhiteSpace/>

            <View style={style.tagList}>
                <Tag color='#069DFF' fill>标签</Tag>
                <Tag color='blue'>标签</Tag>
                <Tag color='blue' fill >标签</Tag>
            </View>
            <WhiteSpace/>

            <View style={style.tagList}>
                <Tag color='#00BF7A' fill>标签</Tag>
                <Tag color='green'>标签</Tag>
                <Tag color='green' fill >标签</Tag>
            </View>
            <WhiteSpace/>

            <View style={style.tagList}>
                <Tag color='#FF2E2E' fill>标签</Tag>
                <Tag color='red'>标签</Tag>
                <Tag color='red' fill >标签</Tag>
            </View>
            <WhiteSpace/>

            <View style={style.tagList}>
                <Tag fill>标签</Tag>
                <Tag>标签</Tag>
                <Tag color='gray' fill >标签</Tag>
            </View>
            <WhiteSpace/>

            <Text style={style.tagText}>大小</Text>
            <View style={style.tagList}>
                <Tag color='#FE8F1D' fill size='small'>标签</Tag>
                <Tag color='#FE8F1D' fill>标签</Tag>
                <Tag color='#FE8F1D' fill size='large'>标签</Tag>
            </View>
            <WhiteSpace/>
            
            <Text style={style.tagText}>可点击</Text>
            <View style={style.tagList}>
                <Tag size='large'
                    readonly={false}
                    style={style.tagItem} >
                    模版一
                </Tag>
                <Tag size='large'
                    readonly={false}
                    style={style.tagItem} >
                    模版二
                </Tag>
                <Tag
                    size='large'
                    readonly={false}
                    style={style.tagItem} >
                    模版三
                </Tag>
            </View>
            <WhiteSpace/>

            <Text style={style.tagText}>自定义</Text>
            <Tag
                fill
                color='#E7F7FF'
                textColor='#24A8E8' >
                已报障，等待维修
            </Tag>
            <WhiteSpace/>
            <Tag
                color='#666'
                activeColor='#24A8E8'
                textStyle={{fontSize: 10, lineHeight: 16}}
                readonly={false} >
                fontSize: 10，行高就是容器的高度
            </Tag>
            <WhiteSpace/>
        </WingBlank>
    )
}

const style = StyleSheet.create({
    tagText: {
        fontSize: 20, 
        marginVertical: 12
    },
    tagList: {
        flexDirection: 'row', 
        justifyContent: 'space-around'
    },
    tagItem: {
        paddingHorizontal: 24,
        paddingVertical: 8,
    },
})
