/**
 * @author zhangyi
 * @date 2018/3/15
 */
import variables from '@src/style'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    wrapper: {
        backgroundColor: variables.color_searchBar_bg,
        paddingVertical: variables.spacing_searchbar_paddingTop,
        paddingHorizontal: variables.spacing_searchbar_paddingLeft,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputWrapper: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: variables.radius_searchBar_field_bg,
        backgroundColor: variables.color_searchBar_field_bg,
        paddingVertical: variables.spacing_searchbar_paddingTop,
        alignItems: 'center',
    },
    input: {
        height: variables.height_searchBar_cursor,
        flex: 1,
        fontSize: variables.font_searchBar_size,
        color: variables.color_searchBar_font_input,
    },
    searchIcon: {
        marginLeft: variables.spacing_searchbar_field_paddingLeft,
        marginRight: variables.spacing_searchbar_icon_search_marginRight,
    },
    deleteIcon: {
        paddingHorizontal: variables.spacing_searchbar_icon_close_marginLeft,
    },
    searchBtn: {
        marginLeft: variables.spacing_searchbar_btn_solid_marginLeft,
    },
    cancelBtn: {
        paddingVertical: variables.spacing_searchbar_field_paddingTop,
        marginLeft: variables.spacing_searchbar_btn_text_marginLeft,
        marginRight: variables.spacing_searchbar_btn_text_marginRight,
    }
})
