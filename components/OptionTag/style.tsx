/**
 * @author zhangyi
 * @date 2018/4/20
 */
import { StyleSheet } from 'react-native'

const borderDisabled = '#DDDDDD'
const textDisabled = '#CCCCCC'

export default StyleSheet.create({
    wrap: {
        borderRadius: 2,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        overflow: 'visible',
    },
    content: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#DDDDDD',
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        width: 102,
        height: 40,
        flexDirection: 'row',
    },
    text: {
        fontSize: 14,
        color: '#666666'
    },
    active: {
        backgroundColor: 'rgba(254, 143, 29, 0.1)',
        borderWidth: 0
    },
    activeText: {
        color: '#FE8F1D'
    },

    disabled: {
        borderColor: borderDisabled,
        backgroundColor: '#FFFFFF'
    },
    disabledText: {
        color: textDisabled
    },

    multiple: {
        backgroundColor: '#FE8F1D',
        width: 26,
        height: 17,
        transform: [{
            rotate: '-45deg',
        }],
        position: 'absolute',
        bottom: -5,
        right: -10
    },
    multipleIcon: {
        position: 'absolute',
        top: -2,
        left: 6,
        transform: [{
            rotate: '35deg',
        }],
    }
})
