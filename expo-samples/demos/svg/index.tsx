import React from 'react'
import { ScrollView, View } from 'react-native'
import Svg from '@/Svg/index'
import svgs from '@assets/svgs'

export default (props: any) => {
    return <View style={{
        paddingVertical: 12,
        paddingHorizontal: 12,
        backgroundColor:'#FFFFFF'}}>
        <ScrollView style={{backgroundColor: '#FFFFFF', paddingHorizontal: 12, paddingVertical: 12}}>
            {
                Object.keys(svgs).map((icon, index) =>
                    <Svg key={`key-${index}`} icon={icon} size='24' />
                )
            }
        </ScrollView>
    </View>
}
