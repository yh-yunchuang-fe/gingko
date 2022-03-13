/**
 * Created by beilunyang on 2018/2/28
 */
import {
    StyleSheet,
} from 'react-native'

export default StyleSheet.create({
    indicator: {
        position: 'absolute',
        left: 0,
        top: -99,
        borderColor: '#aaa',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
    } as any,

    scrollView: {
        height: 0,
    },

    selectedItemText: {
        color: '#333',
    } as any,

    itemText: {
        fontSize: 22,
        lineHeight: 30,
        color: '#999',
        textAlign: 'center',
    } as any,
})
