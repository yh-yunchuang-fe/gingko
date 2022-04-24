import variables from '@src/style/'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    emptyContainer: {
        alignItems: 'center',
    },
    message: {
        color: variables.color_empty_text,
        fontSize: variables.font_empty_text_size,
        fontWeight: variables.font_empty_text_weight,
        lineHeight: variables.font_empty_text_lineheight,
        marginTop: variables.spacing_empty_image_marginbottom,
        marginBottom: variables.spacing_empty_text_marginbottom
    },
    emptyImage: {
        width: variables.width_empty_image_base,
        height: variables.width_empty_image_base,
    },
    btn: {
        paddingLeft: 38,
        paddingRight: 38,
    }
})
