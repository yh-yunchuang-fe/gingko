import React, { Component } from 'react'
import {
    View,
    Text,
    Alert
} from 'react-native'
import {
    Button,
    WhiteSpace
} from '../../../components/index'


export default class ButtonDemo extends Component {
    render() {
        return (
            <View style={{marginVertical: 50, marginHorizontal: 20}}>
                <Button
                    icon="scan"
                    onClick={()=>{ Alert.alert('button') }}>
                    default button
                </Button>
                <WhiteSpace/>
                <Button disabled>
                    default button
                </Button>
                <WhiteSpace/>
                <Button
                    icon={{
                        name: 'search',
                        color: '#fff',
                        size: 'lg'
                    }}
                    type="primary">
                    primary button
                </Button>
                <WhiteSpace/>
                <Button type="primary" disabled>
                    primary button
                </Button>
                <WhiteSpace/>
                <Button type="warning">
                    warning button
                </Button>
                <WhiteSpace/>
                <Button type="warning" disabled>
                    warning button
                </Button>
                <WhiteSpace/>
                <Button size="large">
                    large button
                </Button>
                <WhiteSpace/>
                <Button size="small">
                    small button
                </Button>
                <WhiteSpace/>
                <Button loading>
                    loading button
                </Button>
                <WhiteSpace/>
                <Button type="primary" loading>
                    下一步
                </Button>
                <WhiteSpace/>
                <Button
                    type="primary"
                    style={{height: 60}} textStyle={{fontSize: 12, color: 'red'}}>
                    <View style={{flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={{color: '#fff', marginBottom: 5, fontSize: 18}}>早班考勤</Text>
                        <Text style={{color: '#fff', fontSize: 12}}>请在7：45前考勤</Text>
                    </View>
                </Button>
            </View>
        )
    }
}