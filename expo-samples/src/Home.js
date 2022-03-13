import React, { Component } from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Font } from 'expo'
import { Icon } from '../../components/index'
import routes from './routes'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontIsLoaded: false
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'gingkoIcon': require('../../src/assets/fonts/gingkoIcon.ttf')
        });
        this.setState({
            fontIsLoaded: true
        })
    }

    toItem = (item) => {
        this.props.navigation.navigate(item.title)
    };

    renderItem = ({item, index}) => {
        return (
            <TouchableOpacity onPress={this.toItem.bind(this, item)}>
                <View style={styles.item}>
                    <Text>{item.title} &nbsp; {item.description}</Text>
                    <Icon name="chevron-right" size={12} color="#666"/>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        if (!this.state.fontIsLoaded) {
            return null
        }
        return (
            <View style={styles.container}>
                <FlatList
                    data={routes}
                    ListHeaderComponent={()=>{
                        return <View style={styles.listHeader}/>
                    }}
                    renderItem={this.renderItem.bind(this)}
                    keyExtractor={(item, index) => {return item.title}}
                />
            </View>
        )
    }
}

const hairlineWidth = StyleSheet.hairlineWidth;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
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

    },

});