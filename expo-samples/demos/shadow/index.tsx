import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Shadow } from '../../../components/index'

export default () => {
    return <View style={style.container}>
        <Shadow type='small'>
            <View style={style.shadowItem}></View>
        </Shadow>
        <Shadow>
            <View style={style.shadowItem}></View>
        </Shadow>
        <Shadow type='large'>
            <View style={style.shadowItem}></View>
        </Shadow>
    </View>
}

const style = StyleSheet.create({
    container: {
        paddingVertical: 12, 
        paddingHorizontal: 12, 
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    shadowItem: {
        width: 100,
        height: 100,
        backgroundColor: '#FFFFFF',
        marginBottom: 30,
        flexDirection: 'row'
    }
})
