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
    text: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    defaultSty: {
        backgroundColor: variables.btn_default_fill,
        borderColor: variables.color_link
    },
    defaultTapSty: {
        backgroundColor: variables.btn_default_fill_tap,
        borderColor: variables.color_link_tap
    },
    defaultDisabledSty: {
        // backgroundColor: variables.btn_default_disabled,
        borderColor: variables.btn_default_disabled
    },
    defaultText: {
        color: variables.color_link,
    },
    defaultTapText: {
        color: variables.color_link_tap,
    },
    defaultDisabledText: {
        color: variables.btn_default_disabled
    },


    primarySty: {
        backgroundColor: variables.btn_primary_fill,
        borderColor: variables.color_link
    },
    primaryTapSty: {
        backgroundColor: variables.btn_primary_fill_tap,
        borderColor: variables.color_link_tap
    },
    primaryDisabledSty: {
        backgroundColor: variables.btn_primary_disabled,
        borderColor: variables.btn_primary_disabled
    },
    primaryText: {
        color: variables.color_white,
    },
    primaryTapText: {
        // color: variables.color_white,
    },
    primaryDisabledText: {
        // color: variables.color_white,
    },


    warningSty: {
        backgroundColor: variables.btn_warning_fill,
        borderColor: variables.color_warning
    },
    warningTapSty: {
        backgroundColor: variables.btn_warning_fill_tap,
        borderColor: variables.color_warning_tap,
    },
    warningDisabledSty: {
        opacity: .3
    },
    warningText: {
        color: variables.color_warning
    },
    warningTapText: {
        color: variables.color_warning_tap
    },


    largeSty: {
        height: variables.btn_height,
        paddingHorizontal: variables.btn_h_spacing_md,
    },
    smallSty: {
        height: variables.btn_height_sm,
        paddingHorizontal: variables.btn_h_spacing_sm
    },

    largeText: {
        fontSize: variables.btn_font_size,
    },
    smallText: {
        fontSize: variables.btn_font_size_sm,
    },
    indicator: {
        marginRight: variables.h_spacing_md
    },
    iconSty: {
        marginRight: variables.h_spacing_md
    }
})