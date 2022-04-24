/**
 * Created by beilunyang on 2018/2/28
 */
import variables from '@src/style'
import {
    StyleSheet
} from 'react-native'

export default StyleSheet.create({
    indicator: {
        position: 'absolute',
        left: 0,
        top: -99,
        backgroundColor: '#F5F5F5',
    } as any,

    scrollView: {
        height: 0,
    },

    selectedItemText: {
        color: variables.color_picker_action_cancel_font,
    } as any,

    itemText: {
        fontSize: variables.font_picker_item_size_selected,
        lineHeight: 48,
        color: variables.color_picker_item_font_selected,
        textAlign: 'center',
    } as any,
})
