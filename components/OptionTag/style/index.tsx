/**
 * @author zhangyi
 * @date 2018/4/20
 */
import { StyleSheet } from 'react-native'
import variables from '../../../src/style/variables'

const borderDisabled = variables.border_color
const textDisabled = '#ccc'

export default StyleSheet.create({
    wrap: {
        borderRadius: variables.radius_sm,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        overflow: 'visible',
    },
    content: {
        backgroundColor: variables.fill_base,
        borderWidth: variables.border_width,
        borderColor: variables.border_color,
        borderRadius: variables.radius_sm,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        width: 102,
        height: 40,
        flexDirection: 'row',
    },
    text: {
        fontSize: variables.font_size_base_sm,
        color: variables.color_label
    },
    active: {
        backgroundColor: '#E7F7FF',
        borderColor: '#E7F7FF'
    },
    activeText: {
        color: variables.color_link
    },

    disabled: {
        borderColor: borderDisabled,
        backgroundColor: variables.fill_base
    },
    disabledText: {
        color: textDisabled
    },

    multiple: {
        backgroundColor: variables.color_link,
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
        top: 1,
        left: 8,
        transform: [{
            rotate: '35deg',
        }],
    }
})
