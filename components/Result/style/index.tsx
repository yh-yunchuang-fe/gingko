/**
 * @author zhangyi
 * @date 2018/3/28
 */
import { StyleSheet } from "react-native";
import variables from '../../../src/style/variables';

export default StyleSheet.create({
    result: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        marginTop: 12,
        fontSize: variables.font_size_base,
        color: variables.color_base
    },
    message: {
        fontSize: variables.font_size_tip,
        color: variables.color_disabled,
        marginTop: 12,
    }
})