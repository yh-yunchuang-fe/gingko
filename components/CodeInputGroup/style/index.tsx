/**
 * @author zhangyi
 * @date 2018/5/5
 */
import { StyleSheet } from "react-native";
import variables from '../../../src/style/variables'

export default StyleSheet.create({
    wrap: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    input: {
        width: 45,
        height: 40,
        fontSize: 24,
        textAlign: 'center',
        borderBottomWidth: variables.border_width,
        borderColor: variables.color_link,
        backgroundColor: 'skyblue'
    }
})