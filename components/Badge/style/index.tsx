/**
 * Created by beilunyang on 2018/3/7
 */
import {
    StyleSheet,
    Platform
} from 'react-native';
import variables from '../../../src/style/variables';

const grid = 3;

export default StyleSheet.create({
    wrap: {
        flexDirection: 'row',
    },
    // cornerWrap: {
    //     overflow: 'hidden',
    // },
    textDom: {
        paddingVertical: 0.5 * grid,
        paddingHorizontal: (Platform.OS === 'ios' ? 1.5 : 2) * grid,
        backgroundColor: variables.fill_badge,
        borderRadius: 4 * grid,
        borderStyle: 'solid',
        position: 'absolute',
        top: -10,
        right: -10,
    },
    dot: {
        width: 2 * grid,
        height: 2 * grid,
        borderRadius: grid,
        backgroundColor: variables.fill_badge,
        position: 'absolute',
        top: -1 * grid,
        right: -1 * grid,
    },
    text: {
        textAlign: 'center',
        color: variables.color_white,
        fontSize: variables.font_size_tip
    },




    // cornerContainer: {
    //     position: 'absolute',
    //     top: 8,
    //     right: -20,
    //     width: 72,
    //     backgroundColor: variables.fill_badge,
    //     transform: [{
    //         rotateZ: '45deg',
    //     }],
    // },
    // // contentContainer: {
    // //     overflow: 'hidden',
    // // },
    // cornerText: {
    //     textAlign: 'center',
    //     color: variables.color_white,
    // },
    // small: {
    //     fontSize: variables.font_size_base_xs,
    //     lineHeight: variables.font_size_base_xs,
    //     color: variables.color_white,
    //     paddingVertical: variables.v_spacing_xs,
    //     paddingHorizontal: variables.h_spacing_sm,
    // },
    // dotSizelarge: {
    //     width: 4 * grid,
    //     height: 4 * grid,
    //     borderRadius: 2 * grid,
    // },
});
