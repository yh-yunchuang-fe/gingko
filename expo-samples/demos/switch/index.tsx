/*
 * @Author: wudi
 * @Date: 2022-03-31 17:45:27
 * @LastEditTime: 2022-04-02 11:19:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gingko/expo-samples/demos/switch/index.tsx
 */
import React from 'react'
import { View } from 'react-native'
import { Switch, WhiteSpace } from '../../../components'

export default () => {
    const [toggleOn, setToggleOn] = React.useState(true)
    const [toggleOff, setToggleOff] = React.useState(false)

    return <View style={{paddingVertical: 12, paddingHorizontal: 12}}>
        <Switch 
            value={toggleOn}
            onValueChange={(switchValue) => setToggleOn(switchValue)}/>

        <WhiteSpace/>
        <Switch 
            value={toggleOff}
            onValueChange={(switchValue) => setToggleOff(switchValue)}/>
    </View>
}
