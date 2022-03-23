import React from 'react'
import {
    View,
    Text,
    Alert,
    ScrollView
} from 'react-native'
import {
    Button,
    WhiteSpace,
    WingBlank
} from '../../../components/index'

export default () => {
    return <ScrollView style={{ paddingHorizontal: 12}}>
        <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
                <Button type='primary' primary size={'large'}>面性强调</Button>
                <WhiteSpace/>
                <Button type='primary' primary >面性强调</Button>
                <WhiteSpace/>
                <Button type='primary' primary size={'small'}>面性强调</Button>
            </View>
            <WingBlank/>
            <View style={{flex: 1}}>
                <Button primary size={'large'}>面性次要</Button>
                <WhiteSpace/>
                <Button primary>面性次要</Button>
                <WhiteSpace/>
                <Button primary size={'small'}>面性次要</Button>
            </View>
        </View>
        <WhiteSpace/>

        <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
                <Button type={'primary'} size={'large'}>线性强调</Button>
                <WhiteSpace/>
                <Button type={'primary'}>线性强调</Button>
                <WhiteSpace/>
                <Button type={'primary'} size={'small'} >线性强调</Button>
            </View>
            <WingBlank/>
            <View style={{flex: 1}}>
                <Button size={'large'}>线性次要</Button>
                <WhiteSpace/>
                <Button>线性次要</Button>
                <WhiteSpace/>
                <Button size={'small'}>线性次要</Button>
            </View>
        </View>
        <WhiteSpace/>

        <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
                <Button disabled type={'primary'} size={'large'}>面性禁用</Button>
                <WhiteSpace/>
                <Button disabled type={'primary'}>面性禁用</Button>
                <WhiteSpace/>
                <Button disabled type={'primary'} size={'small'} >面性禁用</Button>
            </View>
            <WingBlank/>
            <View style={{flex: 1}}>
                <Button disabled size={'large'}>线性禁用</Button>
                <WhiteSpace/>
                <Button disabled>线性禁用</Button>
                <WhiteSpace/>
                <Button disabled size={'small'}>线性禁用</Button>
            </View>
        </View>
        <WhiteSpace/>

        <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
                <Button link type={'primary'} size={'large'}>文字强调</Button>
                <WhiteSpace/>
                <Button link type={'primary'}>文字强调</Button>
                <WhiteSpace/>
                <Button link type={'primary'} size={'small'} >文字强调</Button>
            </View>
            <WingBlank/>
            <View style={{flex: 1}}>
                <Button link size={'large'}>文字次要</Button>
                <WhiteSpace/>
                <Button link>文字次要</Button>
                <WhiteSpace/>
                <Button link size={'small'}>文字次要</Button>
            </View>
            <WingBlank/>
            <View style={{flex: 1}}>
                <Button link disabled type={'second'} size={'large'}>文字禁用</Button>
                <WhiteSpace/>
                <Button link disabled type={'second'}>文字禁用</Button>
                <WhiteSpace/>
                <Button link disabled type={'second'} size={'small'}>文字禁用</Button>
            </View>
        </View>
        <WhiteSpace/>

        <Button icon='scan' onClick={()=>{ Alert.alert('button') }}>
            default button
        </Button>
        <WhiteSpace/>
        <Button
            icon={{
                name: 'search',
                color: '#fff',
                size: 'lg'
            }}
            type='primary'>
            primary button
        </Button>

        <Button loading>loading button</Button>
        <WhiteSpace/>
        <Button type='primary' loading>下一步</Button>
        <WhiteSpace/>
        <Button
            type='primary'
            style={{height: 60}} textStyle={{fontSize: 12, color: 'red'}}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Text style={{color: '#fff', marginBottom: 5, fontSize: 18}}>早班考勤</Text>
                <Text style={{color: '#fff', fontSize: 12}}>请在7：45前考勤</Text>
            </View>
        </Button>
    </ScrollView>
}
