/**
 * @author zhangyi
 * @date 2018/3/29
 */
import React from 'react'
import {
    View,
    ScrollView
} from 'react-native'
import {
    Grid,
    WhiteSpace,
    Badge
} from '../../../components'

export default () => {
    const iconData = [];
    for(let i = 0; i < 6; i++) {
        iconData.push({
            icon: (
                <Badge text={i}>
                    <View style={{width: 50, height: 50, backgroundColor: '#888'}}/>
                </Badge>
            ),
            text: `入口${i}`,
            key: i
        })
    }

    return (
        <ScrollView style={{flex: 1}}>
            <Grid
                data={iconData}
            />
            <WhiteSpace/>
            <Grid
                data={iconData}
                columnNum={4}
                hasLine={false}
            />
        </ScrollView>
    )
}
