/**
 * @author zhangyi
 * @date 2018/3/19
 */
import variables from '@src/style'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    noticeBar: {
        overflow: 'hidden',
        flexDirection: 'row',
        paddingVertical: variables.spacing_noticeBar_paddingTop,
        paddingLeft: variables.spacing_noticeBar_paddingLeft
    },
    icon: {
        marginRight: variables.spacing_noticeBar_icon_left_marginRight,
        marginTop: 2
    },
    container: {
        flex: 1,
        overflow: 'hidden',
        marginRight: variables.spacing_noticeBar_paddingRight
    },
    content: {
        fontSize: variables.font_noticeBar_size,
        lineHeight: variables.font_noticeBar_lineheight
    },
    actionWrap: {
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: variables.spacing_noticeBar_paddingRight
    },
    actionIcon: {

    },
    action: {
        fontSize: variables.font_noticeBar_size,
    }
})
