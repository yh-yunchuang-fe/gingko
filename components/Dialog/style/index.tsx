import { StyleSheet } from "react-native";
import variables from '../../../src/style/variables'

export default StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mask: {
        backgroundColor: variables.fill_mask,
        // opacity: .5
    },
    absolute: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
})