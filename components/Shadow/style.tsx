import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    shoadowSty: {
        shadowColor: '#000000',
    },
    largeShoadowSty: {
        elevation: 2,
        shadowOffset: { width: 0, height: 8 },
        shadowRadius: 40,
        shadowOpacity: 0.06
    },
    defaultShoadowSty: {
        elevation: 2,
        shadowOffset: { width: 0, height: 8 },
        shadowRadius: 20,
        shadowOpacity: 0.04
    },
    smallShoadowSty: {
        elevation: 2,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
        shadowOpacity: 0.02
    }
})
