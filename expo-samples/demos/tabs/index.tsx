/**
 * @author wudi
 * @date 2022/04/02
 */
import React from 'react'
import { View, Text } from 'react-native'
import { Tabs } from '../../../components'

export default () => {
    const [listIndex, setlistIndex] = React.useState(1)

    const onIndexChange = (index: number) => {
        setlistIndex(index)
    }

    const renderScene = ({ route, jumpTo }: any) => {
        return <Text key={route.key} style={{
            textAlign: 'center', 
            marginTop: 30}}>{route.title}</Text>
    }

    return <View style={{flex: 1}}>
        <Tabs
            tabIndex={listIndex}
            onIndexChange={onIndexChange}
            renderScene={renderScene}
        />

        <Tabs
            tabIndex={listIndex}
            routes={[
                { key: 'index1', title: `未选` },
                { key: 'index2', title: `已选` },
            ]}
            onIndexChange={onIndexChange}
            renderScene={renderScene}
        />

        <Tabs
            tabIndex={listIndex}
            routes={[
                { key: 'index1', title: `未选选项` },
                { key: 'index2', title: `已选选项` },
                { key: 'index3', title: `未选选项` },
                { key: 'index3', title: `未选选项` },
                { key: 'index3', title: `未选选项` },
            ]}
            onIndexChange={onIndexChange}
            renderScene={renderScene}
            tabStyle={{ width: 100 }}
            scrollEnabled={true}
        />
    </View>

}
