/**
 * @author zhangyi
 * @date 2018/3/25
 */
import { StyleSheet } from 'react-native'
import variables from '../../../src/style/variables'

export default StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        height: variables.nav_bar_height,
        backgroundColor: variables.nav_bar_fill,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: variables.font_size_caption,
        color: variables.color_base,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightWrap: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftWrap: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftIcon: {
        color: variables.color_base
    },
    leftText: {
        fontSize: variables.font_size_base,
        color: variables.color_base
    }
})
