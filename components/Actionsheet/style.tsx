import variables from '@src/style/'
import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: variables.color_actionSheet_bg,
        width,
        borderTopLeftRadius: variables.radius_actionSheet_header_topLeft,
        borderTopRightRadius: variables.radius_actionSheet_header_topRight,
        overflow: 'hidden'
    },
    subTitleWrap: {
        backgroundColor: variables.color_actionSheet_header_bg,
        borderBottomWidth: variables.width_acticonSheet_border_bottom,
        borderBottomColor: variables.color_acticonSheet_border_bottom,
        paddingHorizontal: variables.spacing_actionSheet_header_paddingLeft,
        paddingVertical: variables.spacing_actionSheet_header_paddingBottom,
        alignItems: 'center'
    },
    subTitleText: {
        lineHeight: variables.font_actionSheet_description_lineheight,
        fontSize: variables.font_actionSheet_description_size,
        color: variables.color_actionSheet_description_font,
        textAlign: 'center',
    },
    titleText: {
        fontSize: variables.font_actionSheet_title_size,
        lineHeight: variables.font_actionSheet_title_lineheight,
        color: variables.color_actionSheet_title_font,
        marginBottom: variables.spacing_actionSheet_title_marginBottom,
        fontWeight: '600'
    },
    cancelArea: {
        width,
        height: variables.height_actionSheet_item_bg,
        marginTop: variables.spacing_actionSheet_actionBottom_marginTop,
        backgroundColor: variables.color_actionSheet_item_bg,
        bottom: 0,
    },
    radioGroupSty: {
        flexDirection: 'column',
    },
    radioGroupItemSty: {
        height: variables.height_actionSheet_item_bg,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: variables.color_acticonSheet_border_bottom,
        backgroundColor: variables.color_actionSheet_item_bg,
    },
    radioGroupItemTextSty: {
        color: variables.color_actionSheet_action_font,
        textAlign: 'center',
        fontSize: variables.font_actionSheet_action_size,
        lineHeight: variables.font_actionSheet_action_lineheight,
    }
})
