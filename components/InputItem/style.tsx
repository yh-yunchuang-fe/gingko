/**
 * Created by beilunyang on 2018/2/9
 */
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontSize: 14,
        color: '#666666',
        lineHeight: 20,
    },
    input: {
        backgroundColor: '#FFFFFF',
        padding: 12,
        marginTop: 6,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textInput: {
        fontSize: 16,
        color: '#333333',
        height: 22,
        flex: 1,
        padding: 0,
    },
    hintIcon: {
        marginHorizontal: 9,
    },
    hintText: {
        color: '#FF0000',
        fontSize: 12,
        margin: 6,
        lineHeight: 18,
    }, 
})
