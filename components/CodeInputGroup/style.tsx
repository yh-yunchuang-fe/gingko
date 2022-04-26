/**
 * @author zhangyi
 * @date 2018/5/5
 */
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    wrap: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    textInput: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 40,
        fontSize: 24,
        textAlign: 'center',
        opacity: 0,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#FE8F1D',
    },
    inputWrap: {
        width: 45,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#FE8F1D',
    },
    input: {
        fontSize: 24,
        textAlign: 'center',
    }
})
