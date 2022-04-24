/**
 * @author zhangyi
 * @date 2018/2/28
 */
import variables from '@src/style'
import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#F5F5F5',
        width,
        borderTopLeftRadius: variables.radius_popup_header_topLeft,
        borderTopRightRadius: variables.radius_popup_header_topRight,
        overflow: 'hidden',
        minHeight: variables.height_popup_min,
        maxHeight: variables.height_popup_max,
    },
    hintWrap: {
        backgroundColor: variables.color_popup_header_bg,
        paddingVertical: variables.spacing_popup_header_paddingTop,
        alignItems: 'center'
    },
    hintText: {
        lineHeight: variables.font_popup_description_lineheight,
        fontSize: variables.font_popup_description_size,
        fontWeight: '400',
        color: variables.color_popup_description_font,
        textAlign: 'center',
    },
    headerWrap: { 
        width,
        alignItems: 'flex-start',
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    closeHeaderWrap: {
        paddingRight: variables.spacing_popup_header_withIcon_paddingRight
    },
    cancelHeaderWrap: {
        paddingHorizontal: variables.spacing_popup_header_paddingBottom,
    },
    titleWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: variables.spacing_popup_header_withIcon_title_marginBottom,
        marginHorizontal: variables.spacing_popup_header_action_active_marginLeft
    },
    titleText: {
        color: variables.color_popup_title_font,
        fontSize: variables.font_popup_title_size,
        fontWeight: '600',
        lineHeight: variables.font_popup_title_lineheight,
    },
    cancelText: {
        color: variables.color_popup_action_cancel_font, 
        fontSize: variables.font_popup_action_cancel_size, 
        fontWeight: '600',
        lineHeight: variables.font_popup_action_cancel_lineheight,
    },
    finishText: {
        color: variables.color_popup_action_active_font, 
        fontSize: variables.font_popup_action_active_size, 
        fontWeight: '600',
        lineHeight: variables.font_popup_action_active_lineheight,
    }
})
