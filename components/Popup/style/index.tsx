/**
 * @author zhangyi
 * @date 2018/2/28
 */
import { StyleSheet, Dimensions } from 'react-native';
import variables from '../../../src/style/variables';

const screen = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: variables.fill_base,
        width: screen.width
    }
})