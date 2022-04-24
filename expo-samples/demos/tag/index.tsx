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
            <View style={styles.tagWrap}>
                <View style={styles.tagList}>
                    <Tag color='orange' fill>标签</Tag>
                    <Tag color='orange'>标签</Tag>
                    <Tag color='orange' font>标签</Tag>
                </View>

                <View style={styles.tagList}>
                    <Tag color='blue' fill>标签</Tag>
                    <Tag color='blue'>标签</Tag>
                    <Tag color='blue' font>标签</Tag>
                </View>

                <View style={styles.tagList}>
                    <Tag color='green' fill>标签</Tag>
                    <Tag color='green'>标签</Tag>
                    <Tag color='green' font>标签</Tag>
                </View>

                <View style={styles.tagList}>
                    <Tag color='red' fill>标签</Tag>
                    <Tag color='red'>标签</Tag>
                    <Tag color='red' font>标签</Tag>
                </View>

                <View style={styles.tagList}>
                    <Tag fill>标签</Tag>
                    <Tag>标签</Tag>
                    <Tag color='gray' font>标签</Tag>
                </View>
            </View>
            <WhiteSpace/>

            <Text style={styles.tagText}>标签大小'sm'|'md'|'lg'</Text>
            <View style={styles.tagListWrap}>
                <Tag color='#FE8F1D' fill size='sm'>标签</Tag>
                <Tag color='#FE8F1D' fill>标签</Tag>
                <Tag color='#FE8F1D' fill size='lg'>标签</Tag>
            </View>
            <WhiteSpace/>
            
            <Text style={styles.tagText}>可点击</Text>
            <View style={styles.tagListWrap}>
                <Tag size='lg'
                    readonly={false}
                    style={styles.tagItem} >
                    模版一
                </Tag>
                <Tag size='lg'
                    readonly={false}
                    style={styles.tagItem} >
                    模版二
                </Tag>
                <Tag
                    size='lg'
                    readonly={false}
                    style={styles.tagItem} >
                    模版三
                </Tag>
            </View>
            <WhiteSpace/>

            <Text style={styles.tagText}>自定义</Text>
            <Tag
                fill
                color='#E7F7FF'
                textColor='#24A8E8' >
                已报障，等待维修
            </Tag>
            <WhiteSpace/>
            <Tag
                color='#666666'
                activeColor='#FE8F1D'
                textStyle={{fontSize: 10, lineHeight: 16}}
                readonly={false} >
                fontSize: 10，行高就是容器的高度
            </Tag>
            <WhiteSpace/>
        </WingBlank>
    )
}

const styles = StyleSheet.create({
    tagText: {
        color: '#FF4E23',
        fontSize: 12, 
        marginVertical: 18,
        marginHorizontal: 12
    },
    tagWrap: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    tagList: {
        height: 180,
        flexDirection: 'column', 
        justifyContent: 'space-around'
    },
    tagListWrap: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    tagItem: {
        paddingHorizontal: 24,
        paddingVertical: 8,
    },
})
