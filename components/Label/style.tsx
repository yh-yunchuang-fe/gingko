/*
 * @Author: wudi
 * @Date: 2022-04-14 11:35:07
 * @LastEditTime: 2022-04-22 19:09:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gingko/components/Field/style.tsx
 */

import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        paddingHorizontal: 12,
    },
    labelStyle: {
        minWidth: 72,
        fontSize: 16,
        lineHeight: 24,
        color: '#212121',
        marginRight: 12,
        paddingVertical: 15
    },
    valueStyle: {
        fontSize: 16,
        lineHeight: 22,
        marginLeft: 12,
        alignItems: 'center',
        color: '#212121',
        paddingVertical: 15
    },
})
