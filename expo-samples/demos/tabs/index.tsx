/**
 * @author wudi
 * @date 2022/04/02
 */
import React from 'react'
import { View, Text } from 'react-native'
import { Tabs } from '../../../components'

export default () => {
    const [listIndex, setlistIndex] = React.useState(1)
    const [scrollListIndex, setScrollListIndex] = React.useState(3)

    const onIndexChange = (index: number) => {
        setlistIndex(index)
    }

    const onIndexChangeScroll = (index: number) => {
        setScrollListIndex(index)
    }

    const renderScene = ({ route, jumpTo }: any) => {
        return <Text key={route.key} style={{
            textAlign: 'center', 
            color: '#999999',
            marginTop: 30}}>{route.title}</Text>
    }

    return <View style={{flex: 1}}>
        <Tabs
            tabIndex={0}
            routes={[ { key: '1', title: `已选` } ]}
            onIndexChange={onIndexChange}
            renderScene={renderScene}
        />

        <Tabs
            tabIndex={listIndex}
            routes={[
                { key: '1', title: `未选` },
                { key: '2', title: `已选` },
            ]}
            onIndexChange={onIndexChange}
            renderScene={renderScene}
        />

        <Tabs
            tabIndex={listIndex}
            onIndexChange={onIndexChange}
            renderScene={renderScene}
        />

        <Tabs
            tabIndex={scrollListIndex}
            routes={[
                { key: '1', title: `未选选项` },
                { key: '2', title: `已选选项` },
                { key: '3', title: `未选选项` },
                { key: '4', title: `未选选项` },
                { key: '5', title: `未选选项` },
            ]}
            onIndexChange={onIndexChangeScroll}
            renderScene={renderScene}
            tabStyle={{ width: 100 }}
            scrollEnabled={true}
        />
    </View>
}
