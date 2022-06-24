/**
 * Created by wudi on 2022/04/02.
 */
import React, { useState } from 'react'
import styles from './style'
import { Text, Dimensions, Platform } from 'react-native'
import { ITabsProps } from './propsType'
import { TabView, TabBar } from 'react-native-tab-view'
import variables from '@src/style'

const { width } = Dimensions.get('screen')

export default function Tabs(props: ITabsProps) {
    const {
        tabStyle = {},
        tabBarStyle = {},
        tabBarLabelStyle = {},
        tabBarIndicatorStyle = {},
        renderScene = null,
        // renderTabBar = null,
        // renderLabel = null,
        swipeEnabled = false,
        scrollEnabled = false,
        activeColor = variables.color_tabItem_font_selected, 
        inactiveColor = variables.color_tabItem_font_unselect,
        routes = [
            { key: '1', title: `未选` },
            { key: '2', title: `已选` },
            { key: '3', title: `未选` },
        ]
    } = props

    const [tabIndex, setTabIndex] = useState(props.hasOwnProperty('tabIndex') ? props.tabIndex : 0)

    const onIndexChange = (value?: any) => {
        setTabIndex(value)
        
        props.onIndexChange && props.onIndexChange(value)
    }

    const renderLabel = ({ route, focused, color }: any) => {
        const fontW: any = !!(Platform.OS === 'ios' && focused) ? { fontWeight: '600' } : {}

        return <Text style={[styles.labelText, fontW, { color }]}>
            {route.title}
        </Text>
    }

    const renderTabBar = (props: any) => {
        
        // 设置indicator 宽度 居中
        const tabWidth = tabStyle?.width || (width / routes.length)
        const left = (tabWidth - 24) / 2

        return <TabBar
            {...props}
            scrollEnabled={scrollEnabled}
            tabStyle={tabStyle}
            style={[styles.tabBarStyle, tabBarStyle]}
            labelStyle={[styles.tabBarLabelStyle, tabBarLabelStyle]}
            activeColor={activeColor}
            inactiveColor={inactiveColor}
            indicatorStyle={[styles.tabBarIndicatorStyle, {left}, tabBarIndicatorStyle]}
            renderLabel={renderLabel}
        />
    }

    return (
        <TabView
            navigationState={{
                index: tabIndex,
                routes
            }}
            swipeEnabled={swipeEnabled} // 手势滑动切换
            renderScene={renderScene}
            onIndexChange={onIndexChange}
            renderTabBar={renderTabBar}
        />
    )
}
