/**
 * Created by beilunyang on 2018/2/9
 */
import { StyleSheet } from 'react-native';
import variables from '../../../src/style/variables';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontSize: variables.font_size_caption_sm,
        color: variables.color_label,
        lineHeight: variables.font_size_caption_sm + variables.line_height_plus_md,
    },
    input: {
        backgroundColor: variables.color_white,
        padding: variables.h_spacing_sm * 2,
        marginTop: variables.h_spacing_sm,
        borderRadius: variables.radius,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textInput: {
        fontSize: variables.font_size_base,
        color: variables.color_base,
        height: variables.font_size_base + variables.line_height_plus_md,
        flex: 1,
    },
    hintIcon: {
        marginHorizontal: variables.h_spacing_md,
    },
    hintText: {
        color: variables.color_warning,
        fontSize: variables.font_size_tip,
        margin: variables.h_spacing_sm,
        lineHeight: variables.font_size_tip + variables.line_height_plus_md,
    },
});