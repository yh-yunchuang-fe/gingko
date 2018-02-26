/**
 * Created by beilunyang on 2018/2/23
 */
import { StyleSheet } from 'react-native';
import variables from '../../../src/style/variables';

export default StyleSheet.create({
    frameLayout: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    singleBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: variables.v_spacing_lg * 2,
    },
    btnGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: variables.v_spacing_lg * 2,
    },
    modalWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: variables.modal_mask_color,
    },
    modalMain: {
        borderRadius: variables.radius,
        backgroundColor: variables.color_white,
        paddingHorizontal: variables.h_spacing_lg,
        paddingVertical: variables.h_spacing_sm * 2,
        width: variables.modal_main_width,
        zIndex: variables.modal_main_zIndex,
    },
    modalHeader: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: variables.font_size_caption,
        color: variables.color_base,
        marginVertical: variables.h_spacing_sm * 2,
        lineHeight: variables.font_size_caption + variables.line_height_plus_md,
    },
    modalBody: {
        alignItems: 'center',
    },
});