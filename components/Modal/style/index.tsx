/**
 * @author zhangyi
 * @date 2018/2/28
 */
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 28,
        paddingTop: 32,
        paddingBottom: 28,
        width: 300,
        zIndex: 999,
    },
    header: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 26,
        color: '#212121',
        marginBottom: 8
    },
    btnGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 28,
        marginHorizontal: 4
    },
    singleBtn: {
        justifyContent: 'center',
    },
    modalText: {
        fontSize: 16, 
        color: '#212121', 
        textAlign: 'center',
        lineHeight: 24,
    },
})
