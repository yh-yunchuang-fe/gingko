import variables from '@src/style'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        borderRadius: variables.radius_alert_bg,
        backgroundColor: variables.color_alert_bg,
        paddingHorizontal: variables.spacing_alert_paddingLeft,
        paddingTop: variables.spacing_alert_paddingTop,
        paddingBottom: variables.spacing_alert_paddingBottom,
        width: variables.width_alert_bg_max,
        zIndex: 999,
    },
    header: {
        fontWeight: '600',
        textAlign: 'center',
        fontSize: variables.font_alert_title_size,
        lineHeight: variables.font_alert_title_lineheight,
        color: variables.color_alert_font,
        marginBottom: variables.spacing_alert_Title_marginBottom
    },
    btnGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: variables.spacing_alert_btnGroup_marginTop,
        marginHorizontal: variables.spacing_alert_btnGroup_marginLeft
    },
    singleBtn: {
        justifyContent: 'center',
    },
    modalText: {
        fontSize: variables.font_alert_description_size, 
        color: variables.color_alert_font, 
        textAlign: 'center',
        lineHeight: variables.font_alert_description_lineheight,
    },
})
