import variables from '@src/style'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    tabBarStyle: {
        height: 56,
        backgroundColor: variables.color_tabBar_bg,
        shadowOpacity: 1,
        justifyContent: 'center',
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: { width: 0, height: 0 },
        elevation: 0,
    },
    tabBarIndicatorStyle: {
        bottom: 4,
        backgroundColor: variables.color_tabItem_indicator_selected,
        borderRadius: variables.height_tabItem_indicator / 2,
        height: variables.height_tabItem_indicator,
        width: variables.width_tabItem_indicator,
    },
    tabBarLabelStyle: {
        color: '#333333'
    },
    labelText: {
        paddingHorizontal: 4, 
        fontSize: variables.font_tabItem_font_size_selected,
        lineHeight: variables.font_tabItem_font_lineheight_selected,
    }
})
