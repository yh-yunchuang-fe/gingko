/**
 * @author zhangyi
 * @date 2018/3/19
 */
import React from 'react'
import {
    View,
    Text
} from 'react-native'
import {
    WhiteSpace,
    NoticeBar,
} from '../../../components/index'

export default (props: any) => {

    return (
        <View>
            <NoticeBar
                mode="link"
                color="#FD7622"
                action={<Text style={{fontSize: 14, color: '#333'}}>去设置</Text>}
                onClick={()=>{ props.navigation.goBack() }}
            >
                请允许“永辉管家”使用手机定位
            </NoticeBar>
            <WhiteSpace/>
            <NoticeBar
                icon="alert"
                mode="closeable"
                onClick={()=>{ console.log('close') }}
            >
                请扫描订单小票的二维码，可快速操作
            </NoticeBar>
            <WhiteSpace/>
            <NoticeBar
                mode="link"
                icon="alert"
                onClick={()=>{ props.navigation.goBack() }}
            >
                请扫描订单小票的二维码，可快速操作
            </NoticeBar>
            <WhiteSpace/>
            <NoticeBar
                icon="alert"
            >
                <View style={{flexDirection: 'column'}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 8}}>
                        此单共3架无人机，3架待接航
                    </Text>
                    <Text style={{fontSize: 14, color: '#666', marginBottom: 8}}>扫码无人机上的二维码即可接航</Text>
                    <Text style={{fontSize: 14, color: '#666'}}>扫码无人机上的二维码即可接航</Text>
                </View>
            </NoticeBar>
        </View>
    )
}