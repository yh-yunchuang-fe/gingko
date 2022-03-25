/**
 * @author zhangyi
 * @date 2018/3/20
 */
import { StyleSheet } from 'react-native'

const hairlineWidth = StyleSheet.hairlineWidth
export default StyleSheet.create({
    radioGroup: {
        flexDirection: 'row',
    },
    radioBtn: {
        paddingHorizontal: 15,
        height: 28,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#FE8F1D',
        borderTopWidth: hairlineWidth,
        borderBottomWidth: hairlineWidth,
    },
    radioBtnText: {
        fontSize: 14,
        color: '#FE8F1D',
    },
    firstRadioBtn: {
        borderTopLeftRadius: 2,
        borderBottomLeftRadius: 2,
        borderLeftWidth: hairlineWidth
    },
    lastRadioBtn: {
        borderTopRightRadius: 2,
        borderBottomRightRadius: 2,
        borderRightWidth: hairlineWidth
    },
    activeRadioBtn: {
        backgroundColor: '#FE8F1D',
    },
    activeRadioBtnText: {
        color: '#FFFFFF'
    },
    cutLineSty: {
        borderRightWidth: hairlineWidth,
        borderColor: '#FE8F1D',
    }
})
