/**
 * Created by suki on 2018/12/13.
 */
import { StyleSheet } from 'react-native'
import { isIphoneX } from '@utils/screenUtils'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: isIphoneX ? 20 : 0,
        backgroundColor: '#FFFFFF',
    },
    children: {
        flex: 1,
    }
})
