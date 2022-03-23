/**
 * Created by beilunyang on 2018/3/7
 */
import React from 'react'
import {
    Text,
    View,
} from 'react-native'
import { Badge, WhiteSpace } from '../../../components'

export default () => {
    return <View style={{padding: 20}}>
        <Badge dot>
            <Text>有图片</Text>
        </Badge>
        <WhiteSpace />
        <Badge text={5}>
            <View style={{width: 50, height: 50, backgroundColor: '#666'}}/>
        </Badge>
        <WhiteSpace />
        <Badge text={26}>
            <View style={{width: 50, height: 50, backgroundColor: '#666'}}/>
        </Badge>
        <Badge text={33} overflowCount={10} style={{marginTop: 20}}>
            <View style={{width: 50, height: 50, backgroundColor: '#666'}}/>
        </Badge>
        <Badge text={200} style={{marginTop: 20}}>
            <View style={{width: 50, height: 50, backgroundColor: '#666'}}/>
        </Badge>
        <WhiteSpace />
        <Badge
            style={{marginTop: 20}}
            cornerContent={
                <View style={{
                    width: 15,
                    height: 15,
                    backgroundColor: 'red',
                    borderTopLeftRadius: 2,
                    borderBottomRightRadius: 5,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{color: '#fff', fontSize: 10}}>促</Text>
                </View>
            }
        >
            <View style={{width: 50, height: 50, backgroundColor: '#666', borderRadius: 2}}/>
        </Badge>
        <WhiteSpace />
        <Badge text={3} badgeStyle={{width: 30, height: 30, backgroundColor: 'green'}}>
            <View style={{width: 50, height: 50, backgroundColor: '#666'}}/>
        </Badge>
        <WhiteSpace />
        <Badge text={3000} top={10} badgeStyle={{height: 30, backgroundColor: 'green'}}>
            <View style={{width: 50, height: 50, backgroundColor: '#666'}}/>
        </Badge>
        <WhiteSpace />
        <Badge 
            text={3} 
            image={true}
            source={require('../../../src/assets/imgs/loading-blue.png')}
            imageBadgeStyle={{width: 30, height: 30}}>
            <View style={{width: 50, height: 50, backgroundColor: '#666'}}/>
        </Badge>
    </View>
}
