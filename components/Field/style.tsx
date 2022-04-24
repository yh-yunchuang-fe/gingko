import variables from '@src/style'
import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: variables.color_field_bg,
        flexDirection: 'row',
        paddingHorizontal: variables.spacing_field_basic_paddingLeft,
        alignItems: 'center'
    },
    textInputWrap: {
        flex: 1,
        paddingVertical: variables.spacing_field_basic_paddingTop,
    },
    textInput: {
        fontSize: variables.font_field_basic_text_size,
        alignItems: 'center'
    },
    labelStyle: {
        minWidth: 72,
        fontSize: variables.font_field_basic_title_size,
        lineHeight: variables.font_field_basic_title_lineheight,
        color: variables.color_field_basic_title_font,
        marginRight: variables.spacing_field_basic_iconRequire_marginRight,
    },
    valueStyle: {
        fontSize: variables.font_field_basic_text_size,
        lineHeight: variables.font_field_basic_text_lineheight,
        alignItems: 'center',
        color: variables.color_field_basic_text_font,
    },

    textAreaContainer: {
        backgroundColor: variables.color_field_bg,
        paddingHorizontal: variables.spacing_field_area_paddingLeft,
        paddingVertical: variables.spacing_field_area_paddingTop,
    },
    textAreaMaxLength: {
        paddingTop: variables.spacing_field_area_paddingBottom,
        textAlign: 'right',
        color: variables.color_field_area_showCount_font
    },
    textAreaStyle: { 
        height: variables.height_field_area_textView_max,
        fontSize: variables.font_field_area_text_size,
        fontWeight: variables.font_field_area_text_weight,
        lineHeight: variables.font_field_area_text_lineheight,
        color: variables.color_field_area_text_font,
        textAlignVertical: 'top',
    },

    verifyContainer: {
        paddingRight: variables.spacing_field_verify_paddingRight,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: variables.color_field_bg,
    },
    verifyTextWrapper: {
    },
    verifySendWrap: {
        width: variables.width_field_verify_btnText,
        alignItems: 'center'
    },
    verifyNotSendWrap: {
        width: variables.width_field_verify_btnText
    },
    verifyTextWord: {
        color: variables.color_field_verify_btnText_dsiplay,
        textAlign: 'left',
        lineHeight: variables.font_field_verify_helptext_lineheight,
        fontSize: variables.font_field_verify_helptext_size,
    },
})
