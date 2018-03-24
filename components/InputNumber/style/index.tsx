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
        backgroundColor: variables.input_numbser_fill,
        borderRadius: variables.radius,
    },
    activeWrap: {
        backgroundColor: variables.input_number_active_fill
    },
    action: {
        width: 30,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionText: {
        color: variables.color_base,
        fontSize: 10,
    },
    activeAction: {
        color: variables.color_link
    },
    actionDisabled: {
        color: variables.color_disabled
    },
    content: {
        flexDirection: 'row'
    },
    textInput: {
        fontSize: variables.font_size_base,
        color: variables.color_disabled
    },
    activeInput: {
        color: variables.color_link
    },
    unit: {
        fontSize: variables.font_size_tip,
        color: variables.color_disabled
    }
})