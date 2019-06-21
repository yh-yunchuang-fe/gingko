/**
 * @author zhangyi
 * @date 2018/2/28
 */
import { StyleSheet } from 'react-native';
import variables from '../../../src/style/variables';

export default StyleSheet.create({
    container: {
        borderRadius: variables.radius,
        backgroundColor: variables.fill_base,
        paddingHorizontal: variables.h_spacing_lg,
        paddingVertical: variables.h_spacing_sm * 2,
        width: variables.modal_main_width,
        zIndex: variables.modal_main_zIndex,
    },
    header: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: variables.font_size_caption,
        color: variables.color_base,
        marginTop: variables.h_spacing_lg,
    },
    body: {
        paddingTop: variables.v_spacing_md,
        paddingBottom: variables.v_spacing_lg,
        paddingHorizontal: variables.h_spacing_lg,
    },
    btnGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: variables.v_spacing_md,
    },
    singleBtn: {
        justifyContent: 'center',
    },
})