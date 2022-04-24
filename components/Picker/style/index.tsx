/**
 * Created by beilunyang on 2018/2/9
 */
import variables from '@src/style'
import {
    StyleSheet,
} from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: variables.color_picker_body_bg,
    },
    header: {
        height: 58,
        backgroundColor: variables.color_picker_header_bg,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
    },
    dismiss: {
        color: variables.color_picker_action_cancel_font,
        fontSize: variables.font_picker_action_cancel_size,
        fontWeight: '600',
    },
    ok: {
        color: variables.color_picker_action_active_font,
        fontSize: variables.font_picker_action_active_size,
        fontWeight: '600',
    },
    title: {
        color: variables.color_picker_title_font,
        fontSize: variables.font_picker_title_size,
        fontWeight: '600',
    },
})
