/*
 * @Author: wudi
 * @Date: 2022-03-25 10:27:38
 * @LastEditTime: 2022-04-22 18:50:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gingko/expo-samples/demos/divider/index.tsx
 */
import { View, Text, StyleSheet } from 'react-native'
import {
    Divider,
    WhiteSpace
} from '../../../components'

export default () => {
    return <View style={{paddingVertical: 12, paddingHorizontal: 12, flex: 1, backgroundColor: '#FFFFFF'}}>
        <Text style={styles.description}>分割线</Text>
        <Divider />
        <WhiteSpace/>
        <Divider />
        <WhiteSpace/>
        <Divider />
    </View>
}

const styles = StyleSheet.create({
    description: {
        fontSize: 12,
        lineHeight: 18,
        textAlign: 'left',
        color: '#FF4E23',
        marginTop: 30,
        marginBottom: 16
    }
})
