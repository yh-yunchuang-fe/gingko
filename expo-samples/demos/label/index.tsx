/*
 * @Author: wudi
 * @Date: 2022-04-14 13:49:39
 * @LastEditTime: 2022-04-22 19:08:06
 * @LastEditors: Please set LastEditors
 * @Description: Label Demo
 * @FilePath: /gingko/expo-samples/demos/label/index.tsx
 */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { 
    Tag,
    Label, 
    Button,
    Divider, 
    WhiteSpace } from '../../../components'

export default () => {

    const renderValue = () => {
        return <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10
        }}>
            <Tag color='orange' font size='sm'>工作中</Tag>
            <Button line size='sm'>设为休息</Button>
        </View>
    }

    return <View>
        <Text style={styles.description}>只读只可预览不可编辑</Text>
        <Label label='标题文字' value='只读文字'/>
        <WhiteSpace />
        
        <Label label='标题文字' value='只读样式只可预览不可编辑，只读样式只可预览不可编辑。'/>
        <Divider />
        <Label label='标题文字' value='只读样式只可预览不可编辑。'/>

        <Text style={styles.description}>自定义样式</Text>
        <Label label='标题文字' value={renderValue()} />
    </View>
}
const styles = StyleSheet.create({
    description: {
        fontSize: 12,
        lineHeight: 18,
        textAlign: 'left',
        color: '#FF4E23',
        marginTop: 30,
        marginBottom: 16,
        marginLeft: 20
    }
})
