/**
 * @author zhangyi
 * @date 2018/3/24
 */
import { StyleSheet } from "react-native";
import variables from '../../../src/style/variables';


export default StyleSheet.create({
    wrap: {
        height: variables.input_number_height,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: variables.input_number_fill,
        borderRadius: variables.radius,
        overflow: 'hidden'
    },
    activeWrap: {
        backgroundColor: variables.input_number_active_fill
    },
    action: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%"
    },
    actionText: {
        color: variables.color_base,
        fontSize: 22,
        lineHeight: 22
    },
    activeAction: {
        color: variables.color_link
    },
    actionDisabled: {
        color: variables.color_disabled
    },
    content: {
        flexDirection: 'row',
        flex: 1,
    },
    textInput: {
        fontSize: variables.font_size_base,
        color: variables.color_disabled,
        flex: 1,
        textAlign: 'right'
    },
    activeInput: {
        color: variables.color_link
    },
    unit: {
        fontSize: variables.font_size_tip,
        color: variables.color_disabled,
        marginLeft: variables.h_spacing_xs
    }
})