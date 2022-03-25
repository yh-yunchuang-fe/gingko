/**
 * @author zhangyi
 * @date 2018/4/9
 */
import React from 'react'
import {
    View,
    Text,
    ScrollView
} from 'react-native'
import {
    WhiteSpace,
    Tabs
} from '../../../components'

const DefaultTabBar = Tabs.DefaultTabBar

export default () => {
    const tabs = [
        { title: 't1' },
        { title: 't2' },
        { title: 't3' },
        { title: 't4' },
        { title: 't5' },
    ]

    return (
        <View>
            <WhiteSpace/>
            <Tabs
                style={{
                    width: '100%',
                    height: 200,
                }}
                tabs={tabs}
            >
                {
                    tabs.map((tab, index)=> {
                        return (
                            <View key={index} style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#999',
                                flex: 1,
                            }}>
                                <Text>The content is {tab.title}</Text>
                            </View>
                        )
                    })
                }
            </Tabs>
            <WhiteSpace/>
            <Tabs
                style={{
                    height: 250,
                }}
                tabBarFillColor='#ddd'
                tabs={[{ title: '全部分类' },{ title: '食品部' },{ title: '加工部' }]}
                renderTabBar={(props: any) =>
                    <DefaultTabBar
                        {...props}
                        renderTab={(tab, isTabActive) => {
                            return (
                                <View style={{height: 20, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    {
                                        isTabActive &&
                                        <View style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: 4,
                                            height: '100%',
                                            backgroundColor: '#24A8E8'
                                        }}/>
                                    }
                                    <Text style={isTabActive ? {
                                            color: '#24A8E8',
                                            fontWeight: 'bold',
                                        } : {
                                            color: '#666',
                                            fontWeight: 'normal'
                                        }}>
                                        { tab.title }
                                    </Text>
                                </View>
                            )
                        }}
                    >
                    </DefaultTabBar>
                }
            >
                <View style={{
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                }}>
                    <Text>111111</Text>
                    <Text>111111</Text>
                    <Text>111111</Text>
                    <Text>111111</Text>
                    <Text>111111</Text>
                </View>
                <ScrollView style={{
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                }}>
                    <Text>222222</Text>
                    <Text>222222</Text>
                    <Text>222222</Text>
                    <Text>222222</Text>
                    <Text>222222</Text>
                    <Text>222222</Text>
                    <Text>222222</Text>
                    <Text>222222</Text>
                    <Text>222222</Text>
                    <Text>222222</Text>
                </ScrollView>
                <View style={{
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                }}>
                    <Text>111111</Text>
                    <Text>111111</Text>
                    <Text>111111</Text>
                    <Text>111111</Text>
                    <Text>111111</Text>
                </View>
            </Tabs>
        </View>
    )
}
