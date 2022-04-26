import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    gridContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    gridRow: {
        flexDirection: 'row',
        borderColor: '#F2F2F2',
    },
    gridItem: {
        borderColor: '#F2F2F2',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 22,
        height: 22,
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
        color: '#212121',
        marginTop: 4
    }
})
