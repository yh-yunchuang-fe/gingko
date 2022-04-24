/**
 * Created by beilunyang on 2018/3/14
 */
import variables from '@src/style/'
import {
    StyleSheet,
} from 'react-native'

export default StyleSheet.create({
    container: { 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    checkboxText: {
        fontSize: variables.font_checkbox_size,
        lineHeight: variables.font_checkbox_lineheight,
        color: variables.color_checkbox_font
    },
    icon: {
        marginRight: variables.spacing_checkbox_gap,
    },
})
