/*
 * @Author: wudi
 * @Date: 2022-03-25 10:27:38
 * @LastEditTime: 2022-03-25 10:41:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gingko/expo-samples/demos/divider/index.tsx
 */
import { View } from 'react-native'
import {
    Divider,
    WhiteSpace
} from '../../../components'

export default () => {
    return <View style={{paddingVertical: 12, paddingHorizontal: 12, flex: 1, backgroundColor: '#FFFFFF'}}>
        <Divider />
        <WhiteSpace/>
        <Divider />
        <WhiteSpace/>
        <Divider />
    </View>
}
