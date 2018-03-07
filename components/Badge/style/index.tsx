/**
 * Created by beilunyang on 2018/3/7
 */
import {
    StyleSheet,
} from 'react-native';
import variables from '../../../src/style/variables';

export default StyleSheet.create({
    container: {
        overflow: 'hidden',
        flexDirection: 'row',
    },
    cornerContainer: {
        position: 'absolute',
        top: 8,
        right: -20,
        width: 72,
        backgroundColor: 'red',
        transform: [{
            rotateZ: '45deg',
        }],
    },
    contentContainer: {
        overflow: 'hidden',
    },
    cornerText: {
        textAlign: 'center',
        color: '#fff',
    },
    small: {
        fontSize: variables.font_size_base_xs,
        lineHeight: variables.font_size_base_xs,
        color: variables.color_white,
        paddingVertical: variables.v_spacing_xs,
        paddingHorizontal: variables.h_spacing_sm,
    },
});
