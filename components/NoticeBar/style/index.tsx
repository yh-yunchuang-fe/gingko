/**
 * @author zhangyi
 * @date 2018/3/19
 */
import { StyleSheet } from "react-native";
import variables from '../../../src/style/variables';

export default StyleSheet.create({
    noticeBar: {
        overflow: 'hidden',
        flexDirection: 'row',
        paddingVertical: 11,
        paddingLeft: 15
    },
    icon: {
        marginRight: 5,
    },
    container: {
        flex: 1,
        overflow: 'hidden',
        marginRight: variables.h_spacing_lg
    },
    content: {
        fontSize: variables.font_size_base_sm,
    },
    actionWrap: {
        marginRight: variables.h_spacing_lg
    },
    actionIcon: {

    },
    action: {
        fontSize: variables.font_size_base_sm,
    }
})