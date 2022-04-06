/**
 * @author zhangyi
 * @date 2018/2/28
 */
import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#F5F5F5',
        width,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        overflow: 'hidden',
        minHeight: height * 0.2,
        maxHeight: height * 0.8,
    },
    hintWrap: {
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#F2F2F2',
        paddingHorizontal: 16,
        paddingVertical: 16,
        alignItems: 'center'
    },
    hintText: {
        lineHeight: 20,
        fontSize: 14,
        color: '#757575',
        textAlign: 'center',
    },
    titleWrap: { 
        width,
        marginBottom: 8,
        alignItems: 'center',
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    titleText: {
        fontSize: 18,
        lineHeight: 26,
        color: '#212121',
        fontWeight: '500'
    },
    cancelText: {
        color: '#9E9E9E', 
        fontSize: 16, 
        lineHeight: 26,
        paddingLeft: 16
    },
    finishText: {
        color: '#FE8F1D', 
        fontSize: 16, 
        lineHeight: 26,
        paddingRight: 16
    },
    cancelArea: {
        width,
        height: 56,
        marginTop: 12,
        backgroundColor: '#FFFFFF',
        bottom: 0,
    }
})
