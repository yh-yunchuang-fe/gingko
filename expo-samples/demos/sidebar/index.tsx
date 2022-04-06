/**
 * @author zhangyi
 * @date 2018/4/9
 */
import React from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native'
import {
    WhiteSpace,
    Sidebar
} from '../../../components'

const DefaultSidebar = Sidebar.DefaultSidebar

export default () => {
    const tabs = [
        { title: '选中样式' },
        { title: '侧边导航' },
        { title: '禁用选项', disabled: true},
        { title: '默认样式文字较多' },
    ]

    const renderDefaultSidebar = (tab: any, isTabActive: boolean) => {
        return (
            <View style={{height: 20, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                {
                    isTabActive &&
                    <View style={styles.defaultSidebarActive}/>
                }
                <Text style={isTabActive ? styles.activeText : styles.text}>
                    { tab.title }
                </Text>
            </View>
        )
    }

    return (
        <View>
            <WhiteSpace/>
            <Sidebar style={styles.sidebar} tabs={tabs} >
                {
                    tabs.map((tab, index)=> (
                        <View key={index} style={styles.sidebarItemContent}>
                            <Text>The content is {tab.title}</Text>
                        </View>
                    ))
                }
            </Sidebar>
            <WhiteSpace/>
            <Sidebar
                style={styles.sidebar}
                sidebarFillColor='#ddd'
                tabs={[{ title: '全部分类' },{ title: '食品部' },{ title: '加工部' }]}
                renderSidebar={(props: any) =>
                    <DefaultSidebar
                        {...props}
                        sidebarTabStyle={{paddingHorizontal: 0}}
                        renderTab={renderDefaultSidebar} />
                }
            >
                <View style={{
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                }}>
                    {
                        Array(7).fill(1111111111).map((item, index) => <Text key={index}>{item}</Text>)
                    }
                </View>
                <ScrollView style={styles.defaultSidebar}>
                    {
                        Array(20).fill(222222222222).map((item, index) => <Text key={index}>{item}</Text>)
                    }
                </ScrollView>
                <View style={styles.defaultSidebar}>
                    {
                        Array(5).fill(333333333333).map((item, index) => <Text key={index}>{item}</Text>)
                    }
                </View>
            </Sidebar>
        </View>
    )
}

const styles = StyleSheet.create({
    sidebar: {
        width: '100%',
        height: 260,
    },
    sidebarItemContent: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    defaultSidebar: {
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    defaultSidebarActive: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 4,
        height: '100%',
        backgroundColor: '#FE8F1D'
    },
    activeText: {
        color: '#FE8F1D',
        fontWeight: 'bold',
    },
    text: {
        color: '#666',
        fontWeight: 'normal'
    }
})
