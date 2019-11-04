/**
 * Created by beilunyang on 2018/3/14
 */
import {
    StyleSheet,
} from 'react-native';
import variables from '../../../src/style/variables';

export default StyleSheet.create({
    container: { 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    icon: {
        marginRight: variables.h_spacing_sm * 2,
    },
});
