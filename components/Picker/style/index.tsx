/**
 * Created by beilunyang on 2018/2/9
 */
import {
    StyleSheet,
} from 'react-native';
import variables from '../../../src/style/variables'

export default StyleSheet.create({
    container: {
        backgroundColor: variables.color_white,
    },
    dismiss: {
        color: "#666",
        fontSize: variables.btn_font_size_sm,
    },
    header: {
        alignItems: "center",
        backgroundColor: "#f4f5f6",
        flexDirection: "row",
        height: 42,
        justifyContent: "space-between",
        paddingHorizontal: variables.h_spacing_lg,
    },
    ok: {
        color: variables.color_link,
        fontSize: variables.btn_font_size_sm,
    },
    title: {
        color: variables.color_base,
        fontSize: variables.btn_font_size_sm,
    },
});

