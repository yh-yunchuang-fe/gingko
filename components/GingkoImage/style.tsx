/**
 * @author zhangyi
 * @date 2018/3/28
 */
import variables from '@src/style'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    result: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    img: {
        width: variables.width_empty_base,
        height: variables.width_empty_base,
    },
    title: {
        color: '#999999',
        fontSize: 16,
        marginTop: 16,
        lineHeight: 24,
    },
    message: {
        fontSize: 12,
        color: '#999999',
        marginTop: 6,
    }
})
