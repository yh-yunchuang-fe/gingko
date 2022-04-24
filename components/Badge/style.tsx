/**
 * Created by beilunyang on 2018/3/7
 */
import variables from '@src/style/'
import {
    StyleSheet,
    Platform
} from 'react-native'

export default StyleSheet.create({
    wrap: {
        flexDirection: 'row',
    },
    textDom: {
        paddingVertical: variables.spacing_badge_number_paddingTop,
        paddingHorizontal: variables.spacing_badge_number_paddingLeft, // (Platform.OS === 'ios' ? 1.5 : 2) * 4,
        backgroundColor: variables.color_badge_fill,
        borderRadius: 12,
        borderStyle: 'solid',
        position: 'absolute',
        top: Platform.OS === 'ios' ? -10 : 0,
        right: Platform.OS === 'ios' ? -10 : 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dot: {
        width: variables.width_badge_dot,
        height: variables.width_badge_dot,
        borderRadius: variables.width_badge_dot / 2,
        backgroundColor: variables.color_badge_fill,
        position: 'absolute',
        top: 0,
        right: -4,
    },
    text: {
        textAlign: 'center',
        color: variables.color_badge_number_font,
        fontSize: variables.font_badge_number_size,
    },
    imageTextDom: {
        paddingVertical: variables.spacing_badge_number_paddingTop,
        paddingHorizontal: variables.spacing_badge_number_paddingLeft,
        backgroundColor: 'transparent',
        borderRadius: 0
    },
    imageBadge: {
        width: '100%',
        height: '100%'
    },
    imageTextBadge: {
        position: 'absolute',
        zIndex: 2
    }
})
