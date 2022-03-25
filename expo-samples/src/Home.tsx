import React, { useEffect } from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import * as Font from 'expo-font'
import { Icon } from '../../components/index'
import routes from './routes'

const Home = (props: any) => {
    const [fontsLoaded, setFontsLoaded] = React.useState(false)

    useEffect(() => {
        Font.loadAsync({
            gingkoIcon: require('../../src/assets/fonts/gingkoIcon.ttf')
        })
        setTimeout(() => {
            setFontsLoaded(true)
        }, 500)
    })

    const toItem = (item: any) => {
        props.navigation.navigate(item.title)
    }

    const renderItem = ({item, index}) => {
        return (
            <TouchableOpacity onPress={() => {toItem(item)}}>
                <View style={styles.item}>
                    <Text>{item.title} &nbsp; {item.description}</Text>
                    <Icon name='chevron-right' size={12} color='#666'/>
                </View>
            </TouchableOpacity>
        )
    }

    if (!fontsLoaded) {
        return null
    }
    
    return <View style={styles.container}>
        <FlatList
            data={routes}
            ListHeaderComponent={()=> {
                return <View style={styles.listHeader}/>
            }}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
        />
    </View>
}

const hairlineWidth = StyleSheet.hairlineWidth;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    listHeader: {
        height: hairlineWidth,
        backgroundColor: '#ddd'
    },
    item: {
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderBottomWidth: hairlineWidth,
        borderColor: '#ddd',
        flexDirection: 'row',
    }
})

export default Home
