/**
 * @author zhangyi
 * @date 2018/3/15
 */
import { StyleSheet } from 'react-native'
import variables from '../../../src/style/variables'

export default StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        borderRadius: variables.radius,
        backgroundColor: variables.search_bar_input_fill,
        height: variables.search_bar_input_height,
        paddingVertical: 0,
        // paddingHorizontal: variables.h_spacing_md + 2,
        alignItems: 'center'
    },
    input: {
        height: variables.search_bar_input_height,
        flex: 1,
        paddingVertical: 0,
        // marginHorizontal: variables.h_spacing_md - 1,
        color: variables.color_base,
        fontSize: variables.font_size_base - 1,
    },
    searchIcon: {
        fontSize: 14,
        color: '#aaa',
        marginLeft: variables.h_spacing_md + 2,
        marginRight: variables.h_spacing_md - 1,
    },

    deleteIcon: {
        color: '#C2C2C2',
        paddingLeft: variables.h_spacing_md - 1,
        paddingRight: variables.h_spacing_md + 2,
        // paddingHorizontal: variables.v_spacing_md,
    }
})
