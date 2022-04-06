import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    tabBarStyle: {
        height: 56,
        backgroundColor: '#FFFFFF',
        shadowOpacity: 1,
        justifyContent: 'center',
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: { width: 0, height: 0 },
        elevation: 0,
    },
    tabBarIndicatorStyle: {
        bottom: 4,
        backgroundColor: '#FE8F1D',
        borderRadius: 2,
        height: 4,
        width: 24,
    },
    tabBarLabelStyle: {
        color: '#333333'
    },
    labelText: {
        paddingHorizontal: 4, 
        fontSize: 16,
        lineHeight: 20,
    }
})
