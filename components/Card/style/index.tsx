import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    card: {
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column'
    },
    full: {
        borderRadius: 0
    },
    body: {
        flexGrow: 1,
        paddingVertical: 12,
        paddingHorizontal: 12,
        overflow: 'hidden',
    },
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 9,
        paddingHorizontal: 12
    },
    headerContent: {
        color: '#333333',
        fontSize: 18,
    },
    footer: {
        flexDirection: 'row',
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    footerContent: {
        fontSize: 16,
        color: '#888888',
    }
})
