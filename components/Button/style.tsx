import { StyleSheet } from 'react-native'
import variables from '@src/style'

export default StyleSheet.create({
    wrapperSty: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: variables.border_btn_thickness,
    },
    container: {
        flexDirection: 'row',
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    indicator: {
        marginRight: 8
    },
    iconSty: {
        marginRight: 8
    }
})
