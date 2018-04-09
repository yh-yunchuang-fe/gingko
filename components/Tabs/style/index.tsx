/**
 * @author zhangyi
 * @date 2018/3/25
 */
import * as RN from 'react-native';
import variables from '../../../src/style/variables';

export default {
    Tabs: {
        container: {
            flex: 1
        } as RN.ViewStyle,
        content: {
            flex: 1,
            backgroundColor: variables.fill_base
        } as RN.ViewStyle,
    },

    TabBar: {
        container: {
            // height: 43.5,
            // width: 100,
            // flex: 1,
        } as RN.ViewStyle,
        tabs: {
            flex: 1,
            flexDirection: 'column',
            // width: 100,
            backgroundColor: '#fff',
            justifyContent: 'space-around',
        } as RN.ViewStyle,
        tab: {
            width: 100,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 0,
            paddingBottom: 0,
            height: 53,
            flexDirection: 'row'
        } as RN.ViewStyle,
        textStyle: {
            fontSize: 14,
        } as RN.ViewStyle,
        activeTextColor: variables.color_base,
        inactiveTextColor: variables.color_label,
        activeFillColor: '#fff',
        fillColor: '#f9f9f9'
    }
}
