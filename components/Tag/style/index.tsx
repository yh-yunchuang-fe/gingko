/**
 * @author zhangyi
 * @date 2018/3/9
 */
import { StyleSheet } from 'react-native'
import variables from '../../../src/style/variables'

export default StyleSheet.create({
    wrap: {
        borderRadius: variables.radius_sm,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        overflow: 'visible',
    },
    content: {
        borderColor: variables.color_base,
        borderRadius: variables.radius_sm,
        borderWidth: variables.border_width,
        paddingHorizontal: variables.h_spacing_sm,
        paddingVertical: variables.v_spacing_xs,
        flexDirection: 'row',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: variables.font_size_base_xs,
    },
    textlargeSty: {
        fontSize: variables.font_size_caption_sm
    }
})
