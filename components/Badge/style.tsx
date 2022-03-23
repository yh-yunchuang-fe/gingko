/**
 * Created by beilunyang on 2018/3/7
 */
import {
    StyleSheet,
    Platform
} from 'react-native'
import variables from '../../src/style/variables'

const grid = 4

export default StyleSheet.create({
    wrap: {
        flexDirection: 'row',
    },
    textDom: {
        paddingVertical: 0.5 * grid,
        paddingHorizontal: (Platform.OS === 'ios' ? 1.5 : 2) * grid,
        backgroundColor: '#FF2E2E',
        borderRadius: 4 * (variables.radius_sm + 1),
        borderStyle: 'solid',
        position: 'absolute',
        top: Platform.OS === 'ios' ? -10 : 0,
        right: Platform.OS === 'ios' ? -10 : 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dot: {
        width: 2 * grid,
        height: 2 * grid,
        borderRadius: grid,
        backgroundColor: '#FF2E2E',
        position: 'absolute',
        top: -1 * grid,
        right: -1 * grid,
    },
    text: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 12,
    },
    imageTextDom: {
        paddingVertical: 0,
        paddingHorizontal: 0,
        backgroundColor: 'transparent',
        borderRadius: 0
    },
    imageBadge: {
        width: '100%',
        height: '100%'
    },
    imageTextBadge: {
        position: 'absolute',
        zIndex: 2
    }
})
