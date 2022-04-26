/**
 * Created by beilunyang on 2018/3/27
 */
import {
    StyleSheet,
    Platform,
} from 'react-native'
import variables from '@src/style'

export default StyleSheet.create({
    container: {
        position: 'absolute',
        top: Platform.OS ? 64 : 54,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent',
        alignItems: 'center',
        zIndex: 1000,
    },
    innerContainer: {
        backgroundColor: variables.color_toast_bg,
        borderRadius: variables.radius_toast,
        paddingHorizontal: variables.spacing_toast_default_paddingLeft,
        paddingVertical: variables.spacing_toast_default_paddingTop,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: variables.width_toast_default_bg_min,
        maxWidth: variables.width_toast_default_bg_max
    },
    iconContainer: {
        paddingVertical: 6,
    },
    textContainer: {
        minHeight: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentText: {
        color: variables.color_toast_font,
        fontSize: variables.font_toast_default_size,
        // fontWeight: variables.font_toast_weight,
        lineHeight: variables.font_toast_default_lineheight,
        textAlign: 'center',
    },
    loadingImg: {
        width: variables.width_toast_withicon_icon, 
        height: variables.width_toast_withicon_icon
    }
})
