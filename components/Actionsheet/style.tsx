/*
 * @Author: your name
 * @Date: 2022-04-06 14:14:28
 * @LastEditTime: 2022-04-06 14:51:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gingko/components/Actionsheet/style.tsx
 */
/**
 * @author zhangyi
 * @date 2018/2/28
 */
import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#F5F5F5',
        width,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        overflow: 'hidden'
    },
    hintWrap: {
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#F2F2F2',
        paddingHorizontal: 16,
        paddingVertical: 16,
        alignItems: 'center'
    },
    hintText: {
        lineHeight: 20,
        fontSize: 14,
        color: '#757575',
        textAlign: 'center',
    },
    titleText: {
        fontSize: 18,
        lineHeight: 26,
        color: '#212121',
        marginBottom: 8,
        fontWeight: '500'
    },
    cancelArea: {
        width,
        height: 56,
        marginTop: 12,
        backgroundColor: '#FFFFFF',
        bottom: 0,
    },
    radioGroupSty: {
        flexDirection: 'column',
    },
    radioGroupItemSty: {
        height: 56,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: '#F2F2F2',
        backgroundColor: '#FFFFFF',
    },
    radioGroupItemTextSty: {
        color: '#212121',
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 26,
    }
})
