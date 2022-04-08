import React from 'react'
import {
    Text,
    ScrollView
} from 'react-native'
import {
    Icon,
    Grid,
} from '../../../components/index'
import newIcons from '@assets/svgs'
import oldIcons from '../../../components/Icon/iconMap.json'

export default () => {
    console.log('Object.keys(svgs)===', Object.keys(oldIcons), Object.keys(newIcons))
    const newData = Object.keys(newIcons).map((item, index)=> {
        return {
            icon: (<Icon key={index} name={item} size='md'/>),
            text: item
        }
    })

    const oldData = Object.keys(oldIcons).map((item, index)=> {
        return {
            icon: (<Icon key={index} name={item} old size='md'/>),
            text: item
        }
    })
    
    const style = {
        fontSize: 24,
        paddingHorizontal: 12,
        paddingVertical: 12
    }

    return (
        <ScrollView style={{flex: 1}}>
            <Text style={style}>new icon</Text>
            <Grid
                data={newData}
                columnNum={3}
            />
            <Text style={style}>old icon</Text>
            <Grid
                data={oldData}
                columnNum={4}
            />
        </ScrollView>
    )
}
