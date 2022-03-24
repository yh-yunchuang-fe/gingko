/**
 * @author zhangyi
 * @date 2018/3/9
 */
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    wrap: {
        borderRadius: 2,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        overflow: 'visible',
    },
    content: {
        borderColor: '#9E9E9E',
        borderRadius: 2,
        borderWidth: 1,
        paddingHorizontal: 4,
        flexDirection: 'row',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textlargeSty: {
        fontSize: 18,
        lineHeight: 28
    },
    text: {
        fontSize: 16,
        lineHeight: 24
    },
    textsmallSty: {
        fontSize: 14,
        lineHeight: 20
    }
})
