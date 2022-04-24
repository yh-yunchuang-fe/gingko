import { StyleSheet } from 'react-native'
import { isIphoneX } from '@utils/screenUtils'
import variables from '@src/style'

export default StyleSheet.create({
    footerContainer: {
        width: '100%',
        flexDirection: 'row',
        minHeight: 50,
        backgroundColor: variables.color_tabBar_bg,
        paddingVertical: variables.spacing_tabBar_padiingBottom
    },
    footerTab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerImageWarp: {
        position: 'relative',
        marginTop: isIphoneX ? 3 : 0,
        marginVertical: variables.spacing_tabBar_padiingBottom
    },
    footerImage: {
        width: variables.width_tabBar_icon,
        height: variables.width_tabBar_icon,
    },
    unselectText: {
        color: variables.color_tabBar_text_unselect,
        fontSize: variables.font_tabBar_text_size_unselect,
        fontWeight: '400',
        lineHeight: variables.font_tabBar_text_lineheight_unselect,
    },
    selectedText: {
        color: variables.color_tabBar_text_selected,
        fontSize: variables.font_tabBar_text_size_selected,
        fontWeight: '600',
        lineHeight: variables.font_tabBar_text_lineheight_selected,
    }
})
