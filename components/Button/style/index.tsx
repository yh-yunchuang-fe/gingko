import { StyleSheet } from "react-native";
import variables from '../../../src/style/variables'

export default StyleSheet.create({
    wrapperSty: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: variables.border_width,
        borderRadius: variables.radius
    },
    container: {
        flexDirection: 'row',
    },
    defaultSty: {
        backgroundColor: variables.btn_default_fill,
        borderColor: variables.border_color_primary
    },
    primarySty: {
        backgroundColor: variables.btn_primary_fill,
        borderColor: variables.border_color_primary
    },
    warningSty: {
        backgroundColor: variables.fill_base,
        borderColor: variables.color_warning
    },

    defaultTapSty: {
        backgroundColor: variables.btn_default_fill_tap,
        borderColor: variables.btn_primary_fill_tap
    },
    primaryTapSty: {
        backgroundColor: variables.btn_primary_fill_tap,
        borderColor: variables.btn_primary_fill_tap
    },
    warningTapSty: {
        backgroundColor: variables.btn_warning_fill_tap,
        borderColor: variables.btn_warning_tap_color,
    },

    largeSty: {
        height: variables.btn_height,
        paddingHorizontal: variables.h_spacing_md,
    },
    smallSty: {
        height: variables.btn_height_sm,
        paddingHorizontal: variables.h_spacing_sm
    },

    defaultDisabledSty: {
        opacity: .3
    },
    primaryDisabledSty: {
        backgroundColor: variables.btn_disabled_fill,
        borderColor: variables.btn_disabled_fill
    },
    warningDisabledSty: {
        opacity: .3
    },

    // text
    defaultText: {
        color: variables.color_link,
    },
    primaryText: {
        color: variables.color_white,
    },
    warningText: {
        color: variables.color_warning
    },
    defaultTapText: {
        color: variables.btn_primary_fill_tap,
    },
    primaryTapText: {
        color: variables.color_white,
    },
    warningTapText: {
        color: variables.btn_warning_tap_color
    },

    largeText: {
        fontSize: variables.btn_font_size,
    },
    smallText: {
        fontSize: variables.btn_font_size_sm,
    },
    indicator: {
        marginRight: variables.h_spacing_md
    }
})