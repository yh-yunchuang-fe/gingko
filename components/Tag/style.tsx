/**
 * @author zhangyi
 * @date 2018/3/9
 */
import variables from '@src/style'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    wrap: {
        borderRadius: variables.radius_tag,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        overflow: 'visible',
    },
    content: {
        borderRadius: variables.radius_tag,
        borderWidth: variables.border_tag_thickness,
        flexDirection: 'row',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
