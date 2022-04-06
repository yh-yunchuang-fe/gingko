/**
 * @author zhangyi
 * @date 2018/3/25
 */
import * as RN from 'react-native'

export default {
    Side: {
        container: {
            flex: 1
        } as RN.ViewStyle,
        content: {
            flex: 1,
            backgroundColor: '#FFFFFF'
        } as RN.ViewStyle,
    },

    Sidebar: {
        container: {
            
        } as RN.ViewStyle,
        tabs: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#FFFFFF',
            justifyContent: 'space-around',
        } as RN.ViewStyle,
        tab: {
            width: 96,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 16,
            paddingHorizontal: 14,
            flexDirection: 'row'
        } as RN.ViewStyle,
        textStyle: {
            fontSize: 16,
            lineHeight: 24
        } as RN.ViewStyle,
        disabledColor: '#9E9E9E',
        activeTextColor: '#FE8F1D',
        inactiveTextColor: '#212121',
        activeFillColor: '#FFFFFF',
        fillColor: '#F5F5F5'
    }
}
