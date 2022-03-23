import React from 'react'
import { 
    View, 
    Text, 
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import * as Clipboard from 'expo-clipboard'

export default () => {
    const onCopy = (item: string) => {
        console.log('onCopy===', item)
        Clipboard.setString(item)
    }

    const renderItem = ({item, index}: any) => {
        return <View key={index} style={style.listItem}>
            <Text>{item.title}</Text>
            <View style={style.colorList}>
                {
                    item.colors.map((colors: string, idx: number) => {
                        return <TouchableOpacity 
                            key={idx} 
                            onPress={() => {onCopy(colors)}}
                            style={[style.colorItem, {backgroundColor: colors}]}></TouchableOpacity>
                    })
                }
            </View>
        </View>
    }

    const data = [
        {
            title: '永辉红',
            colors: ['#E50113'],
        },
        {
            title: '辉翔品牌橘色',
            colors: ['#FE8F1D', 'rgba(254, 143, 29, 0.5)', 'rgba(254, 143, 29, 0.1)'],
        },
        {
            title: '中性色',
            colors: ['#212121', '#757575', '#9E9E9E', '#C4C4C4', '#E0E0E0', '#F2F2F2'],
        },
        {
            title: '背景色',
            colors: ['#F5F5F5', '#FAFAFA'],
        },
        {
            title: '辅助色',
            colors: ['#FF4E23', '#6236FF', '#00BF7A', '#069DFF', '#FFEFD4', '#B97400'],
        },
        {
            title: '功能色',
            colors: ['#FF2E2E', '#07C160', '#2A6AE9', '#FFA300'],
        },
    ]

    return <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
    >
    </FlatList>
}

const style = StyleSheet.create({
    listItem: {
        paddingHorizontal: 12,
        paddingVertical: 12
    },
    colorList: {
        flexDirection: 'row',
        marginTop: 12
    },
    colorItem: {
        width: 44, 
        height: 44,
        borderRadius: 4,
        marginRight: 8
    }
})
