import { StyleSheet } from "react-native";
import variables from '../../../src/style/variables';

export default StyleSheet.create({
    indicator: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    spinner: {

    },
    tip: {
        fontSize: variables.font_size_base,
        color: variables.color_text_caption,
        marginLeft: variables.h_spacing_md
    }
})