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
    textInput: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 40,
        fontSize: 24,
        textAlign: 'center',
        opacity: 0,
        borderBottomWidth: variables.border_width,
        borderColor: variables.color_link,
    },


    inputWrap: {
        width: 45,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: variables.border_width,
        borderColor: variables.color_link,
    },
    input: {
        fontSize: 24,
        textAlign: 'center',
    }
})