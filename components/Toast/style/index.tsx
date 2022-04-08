/**
 * Created by beilunyang on 2018/3/27
 */
import {
    StyleSheet,
    Platform,
} from 'react-native'

export default StyleSheet.create({
    container: {
        position: 'absolute',
        top: Platform.OS ? 64 : 54,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent',
        alignItems: 'center',
        zIndex: 1000,
    },
    innerContainer: {
        backgroundColor: 'rgba(33, 33, 33, 0.7)',
        borderRadius: 6,
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 90,
        maxWidth: 140
    },
    iconContainer: {
        paddingVertical: 6,
    },
    textContainer: {
        minHeight: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentText: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
    },
})
