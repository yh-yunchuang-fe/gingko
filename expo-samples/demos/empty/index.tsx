/**
 * @author zhangyi
 * @date 2018/3/28
 */
import React from 'react'
import {
    ScrollView,
    StyleSheet,
    Text
} from 'react-native'
import {
    Empty
} from '../../../components'

export default () => {
    return (
        <ScrollView>
            <Text style={styles.description}>【样式1】图片+文字</Text>
            <Empty message='文字描述' source={require('@assets/imgs/empty-scheduling.png')} />
            <Text style={styles.description}>【样式2】图片+文字+按钮</Text>
            <Empty 
                source={require('@assets/imgs/empty-overtime.png')}
                message='文字描述'
                btn='按钮'/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    description: {
        fontSize: 12,
        lineHeight: 18,
        color: '#FF4E23',
        marginHorizontal: 20,
        marginTop: 30,
        marginBottom: 16
    }
})
