import {
    StyleSheet
} from "react-native";

let externalConfig = {}

const brandPrimary = externalConfig && externalConfig.brandPrimary || '#24A8E8';

const config = {
    // 颜色
    // --
    color_base: '#333',
    color_text_caption: '#888888',               // 辅助描述
    color_link: brandPrimary,
    color_link_tap: '#0D8DCB',
    color_white: '#fff',
    color_disabled: '#999',
    color_warning: '#FF0000',
    color_warning_tap: '#EA0000',
    border_color: '#ddd',
    color_text_disable: '#999',
    color_label: '#666',

    // 背景色
    // ---
    fill_base: '#fff',
    fill_tap: '#bbb',
    fill_mask: 'rgba(0, 0, 0, .75)',              // 遮罩背景
    fill_badge: '#ff0000',  // 用于小红点背景色
    fill_notice: '#FFF5CC',

    // 边框色
    // ---
    border_color_base: '#ddd',
    border_color_primary: brandPrimary,

    // 圆角
    // ---
    radius: 4,
    radius_sm: 2,

    // 边框尺寸
    // ---
    border_width: StyleSheet.hairlineWidth,

    // 按钮
    // ---
    btn_height: 40,
    btn_font_size: 18,

    btn_height_sm: 30,
    btn_h_spacing_md: 12,
    btn_h_spacing_sm: 10,
    // btn_height_lg: 60,

    btn_font_size_sm: 14,
    // btn_font_size_lg: 20,

    btn_default_fill: 'transparent',
    btn_default_fill_tap: 'rgba(13,141,203,0.05)',
    btn_default_disabled: '#ddd',

    btn_primary_fill: brandPrimary,
    btn_primary_fill_tap: '#0D8DCB',
    btn_primary_disabled: '#aaa',

    btn_warning_fill: 'transparent',
    btn_warning_fill_tap: 'rgba(234,0,0,0.05)',
    btn_warning_disabled: 'rgba(255, 0, 0, 0.3)',

    // btn_disabled_fill: '#aaa',

    // 间距
    // ---
    // 水平间距
    h_spacing_xs: 3,
    h_spacing_sm: 6,
    h_spacing_md: 9,
    h_spacing_lg: 12,

    // 垂直间距
    // ---
    v_spacing_xs: 3,
    v_spacing_sm: 6,
    v_spacing_md: 9,
    v_spacing_lg: 12,
    v_spacing_xl: 16,

    // 字体尺寸
    // ---
    font_size_caption_sm: 14,
    font_size_caption: 18,
    font_size_heading: 20,
    font_size_base: 16,
    font_size_base_sm: 14,
    font_size_base_xs: 10,
    font_size_tip: 12,      //错误提示等
    font_size_alert: 15,

    // 行高lineHeight
    // ---
    line_height_plus_md: 6,

    // 指示器尺寸 Indicator TODO 大小待定
    // ---
    indicator_sm: 14,
    indicator_md: 18,
    indicator_lg: 24,
    indicator_xl: 30,

    // modal
    // ---
    modal_mask_color: 'rgba(0, 0, 0, .3)',
    modal_main_zIndex: 999,
    modal_main_width: 300,
    modal_single_btn_width: 180,
    modal_group_btn_width: 127,

    // searchbar
    // ---
    search_bar_fill: '#fff',
    search_bar_height: 52,
    search_bar_input_height: 32,
    search_bar_input_fill: '#F2F2F2',
    // search_bar_input_color: '#999',
    
    // inputNumber
    input_number_height: 40,
    input_number_fill: '#F9F9F9',
    input_number_active_fill: 'rgba(36, 168, 232, 0.05)',

    // navbar
    nav_bar_fill: '#f9f9f9',
    nav_bar_height: 45,
    nav_bar_icon_size: 20,

    // toast
    // ---
    toast_zIndex: 1000,
}

export default Object.assign({}, config, externalConfig || {})