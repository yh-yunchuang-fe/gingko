import { StyleSheet } from 'react-native'
// import business from '../../../src/style/business'

export default StyleSheet.create({
    wrapperSty: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 4
    },
    container: {
        flexDirection: 'row',
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    defaultSty: {
        backgroundColor: '#FFFFFF',
        borderColor: '#FE8F1D',
    },
    defaultTapSty: {
        backgroundColor: '#FE8F1D',
        borderColor: '#FE8F1D'
    },
    defaultText: {
        color: '#FE8F1D'
    },
    defaultTapText: {
        color: '#FFFFFF',
    },
    defaultDisabledSty: {
        backgroundColor: '#C4C4C4',
        borderColor: '#C4C4C4'
    },
    defaultDisabledText: {
        color: '#FFFFFF'
    },
    defaultSecondSty: {
        backgroundColor: '#FFFFFF',
        borderColor: '#757575',
    },
    defaultSecondText: {
        color: '#212121'
    },

    primarySty: {
        backgroundColor: '#FE8F1D',
        borderColor: '#FE8F1D'
    },
    primaryTapSty: {
        backgroundColor: '#FE8F1D',
        borderColor: '#FE8F1D'
    },
    primaryDisabledSty: {
        backgroundColor: '#FFFFFF',
        borderColor: '#C4C4C4'
    },
    primaryText: {
        color: '#FFFFFF',
    },
    primaryTapText: {
        
    },
    primarySecondSty: {
        backgroundColor: 'rgba(254, 143, 29, 0.1)',
        borderColor: 'rgba(254, 143, 29, 0.1)',
    },
    primarySecondText: {
        color: '#FE8F1D'
    },
    primaryDisabledText: {
        color: '#FFFFFF'
    },

    warningSty: {
        backgroundColor: 'transparent',
        borderColor: '#FF0000',
    },
    warningTapSty: {
        backgroundColor: 'rgba(234,0,0,0.05)',
        borderColor: '#EA0000',
    },
    warningSecondSty: {
        
    },
    warningDisabledSty: {
        opacity: .3
    },
    warningText: {
        color: '#FF0000',
    },
    warningTapText: {
        color: '#EA0000',
    },
    
    largeSty: {
        height: 40,
        paddingHorizontal: 12,
    },
    smallSty: {
        height: 30,
        paddingHorizontal: 10
    },

    largeText: {
        fontSize: 18,
    },
    smallText: {
        fontSize: 14,
    },
    indicator: {
        marginRight: 8
    },
    iconSty: {
        marginRight: 8
    }
})
