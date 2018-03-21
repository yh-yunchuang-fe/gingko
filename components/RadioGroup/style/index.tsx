/**
 * @author zhangyi
 * @date 2018/3/20
 */
import { StyleSheet } from "react-native";
import variables from '../../../src/style/variables';

const hairlineWidth = StyleSheet.hairlineWidth;
export default StyleSheet.create({
    radioGroup: {
        flexDirection: 'row',
    },
    radioBtn: {
        paddingHorizontal: variables.h_spacing_lg,
        // paddingVertical: variables.v_spacing_sm,
        height: 28,
        justifyContent: 'center',
        backgroundColor: variables.fill_base,
        borderColor: variables.color_link,
        borderTopWidth: hairlineWidth,
        borderBottomWidth: hairlineWidth,
    },
    radioBtnText: {
        fontSize: variables.font_size_base_sm,
        color: variables.color_link,
        // lineHeight: 20,
    },
    firstRadioBtn: {
        borderTopLeftRadius: variables.radius_sm,
        borderBottomLeftRadius: variables.radius_sm,
        borderLeftWidth: hairlineWidth
    },
    lastRadioBtn: {
        borderTopRightRadius: variables.radius_sm,
        borderBottomRightRadius: variables.radius_sm,
        borderRightWidth: hairlineWidth
    },
    activeRadioBtn: {
        backgroundColor: variables.color_link,
    },
    activeRadioBtnText: {
        color: variables.color_white,
    },
    cutLineSty: {
        borderRightWidth: hairlineWidth,
        borderColor: variables.color_link,
    }
})