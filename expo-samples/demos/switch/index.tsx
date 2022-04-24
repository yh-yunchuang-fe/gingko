/*
 * @Author: wudi
 * @Date: 2022-03-31 17:45:27
 * @LastEditTime: 2022-04-21 14:53:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gingko/expo-samples/demos/switch/index.tsx
 */
import React from 'react'
import { View, Text } from 'react-native'
import { 
    Switch, 
    WhiteSpace,
    WingBlank } from '../../../components'

export default () => {
    const [toggleOn, setToggleOn] = React.useState(true)
    const [toggleOff, setToggleOff] = React.useState(false)

    return <WingBlank>
        <WhiteSpace style={{marginTop: 74}}/>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Switch 
                value={toggleOn}
                onValueChange={(switchValue) => setToggleOn(switchValue)}/>
            <Text> 开关组件-开 </Text>
        </View>
        
        <WhiteSpace style={{marginTop: 20}}/>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Switch 
                value={toggleOff}
                onValueChange={(switchValue) => setToggleOff(switchValue)}/>
            <Text> 开关组件-关 </Text>
        </View>
    </WingBlank>
}
