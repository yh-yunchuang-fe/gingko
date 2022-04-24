/**
 * @author zhangyi
 * @date 2018/3/25
 */
import variables from '@src/style'
import * as RN from 'react-native'

export default {
    Side: {
        container: {
            flex: 1
        } as RN.ViewStyle,
        content: {
            flex: 1,
            backgroundColor: variables.color_sideBar_tab_selected_bg
        } as RN.ViewStyle,
    },

    SideBar: {
        container: {
            
        } as RN.ViewStyle,
        tabs: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: variables.color_sideBar_tab_selected_bg,
            justifyContent: 'space-around',
        } as RN.ViewStyle,
        tab: {
            width: variables.width_side_bar,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: variables.spacing_sideBar_tab_paddingTop,
            paddingHorizontal: variables.spacing_sideBar_tab_paddingLeft,
            flexDirection: 'row'
        } as RN.ViewStyle,
        textStyle: {
            fontSize: variables.font_sideBar_tab_size_default,
            lineHeight: variables.font_sideBar_tab_lineheight_default
        } as RN.ViewStyle,
        disabledColor: variables.color_sideBar_tab_font_disable,
        activeTextColor: variables.color_sideBar_tab_font_selected,
        inactiveTextColor: variables.color_sideBa_tab_font_default,
        activeFillColor: variables.color_sideBar_tab_selected_bg,
        fillColor: variables.color_sideBar_bg
    }
}
