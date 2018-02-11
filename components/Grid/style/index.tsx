import { StyleSheet } from "react-native";
import variables from '../../../src/style/variables';

export default StyleSheet.create({
    gridContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    gridRow: {
        flexDirection: 'row',
        borderColor: variables.border_color_base,
    },
    gridItem: {
        borderColor: variables.border_color_base,
        backgroundColor: variables.fill_base,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 22,
        height: 22,
    },
    text: {
        fontSize: variables.font_size_caption_sm,
        color: variables.color_base,
        marginTop: variables.v_spacing_md,
    }
})