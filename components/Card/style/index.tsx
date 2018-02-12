import { StyleSheet } from "react-native";
import variables from "../../../src/style/variables";

export default StyleSheet.create({
    card: {
        borderRadius: variables.radius,
        backgroundColor: variables.fill_base,
        flexDirection: 'column'
    },
    full: {
        borderRadius: 0
    },
    body: {
        flexGrow: 1,
        paddingVertical: variables.v_spacing_md,
        paddingHorizontal: variables.h_spacing_lg,
        borderTopWidth: variables.border_width,
        borderColor: variables.border_color_base,
    },
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: variables.v_spacing_md,
        paddingHorizontal: variables.h_spacing_lg
    },
    headerContent: {
        color: variables.color_base,
        fontSize: variables.font_size_caption,
    },
    footer: {
        flexDirection: 'row',
        paddingVertical: variables.v_spacing_sm,
        paddingHorizontal: variables.h_spacing_lg,
    },
    footerContent: {
        fontSize: variables.font_size_base,
        color: variables.color_text_caption,
    },
})