import React from 'react'
import { ScrollView } from 'react-native'
import { Svg } from '../../../components'
import svgs from '../../../src/assets/svgs'

export default () => {
    return <ScrollView style={{backgroundColor: '#FFFFFF', paddingHorizontal: 12, paddingVertical: 12}}>
        {
            Object.keys(svgs).map((icon, index) =>
                <Svg key={`key-${index}`} icon={icon} size='40' />
            )
        }
    </ScrollView>
}
