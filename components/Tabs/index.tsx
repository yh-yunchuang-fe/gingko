/**
 * Created by wudi on 2022/04/02.
 */
import React from 'react'
import styles from './style'
import { Text, Dimensions, Platform } from 'react-native'
import { ITabsProps } from './propsType'
import { TabView, TabBar } from 'react-native-tab-view'
import variables from '@src/style'

const { width } = Dimensions.get('screen')

export default class Tabs extends React.Component<ITabsProps, any> {
    public static defaultProps = {
        tabStyle: {},
        tabBarStyle: {},
        tabBarLabelStyle: {},
        tabBarIndicatorStyle: {},
        onIndexChange: ()=> {},
        renderScene: null,
        renderTabBar: null,
        renderLabel: null,
        swipeEnabled: false,
        scrollEnabled: false,
        activeColor: variables.color_tabItem_font_selected, 
        inactiveColor: variables.color_tabItem_font_unselect,
        tabIndex: 0,
        routes: [
            { key: '1', title: `未选` },
            { key: '2', title: `已选` },
            { key: '3', title: `未选` },
        ]
    }

    public state = {
        tabIndex: this.props.hasOwnProperty('tabIndex') ? this.props.tabIndex : 0
    }

    public onIndexChange = (value?: any) => {
        const { onIndexChange } = this.props
        
        this.setState({
            tabIndex: value
        })
        onIndexChange && onIndexChange(value)
    }

    public renderLabel = ({ route, focused, color }: any) => {
        const fw = Platform.OS === 'ios' && focused

        return <Text style={[styles.labelText, fw && { 
            fontWeight: variables.font_tabItem_font_weight_selected
            }, { color }]}>
            {route.title}
        </Text>
    }

    public renderTabBar = (props: any) => {
        const { tabBarIndicatorStyle, tabBarStyle, tabBarLabelStyle, tabStyle, 
            scrollEnabled, activeColor, inactiveColor, routes } = this.props
        
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
            renderLabel={this.renderLabel}
        />
    }

    public render() {
        const { routes, swipeEnabled, renderScene } = this.props
        const { tabIndex } = this.state

        return (
            <TabView
                navigationState={{
                    index: tabIndex,
                    routes
                }}
                swipeEnabled={swipeEnabled} // 手势滑动切换
                renderScene={renderScene}
                onIndexChange={this.onIndexChange}
                renderTabBar={this.renderTabBar}
            />
        )
    }
}
