/**
 * Created by wudi on 2022/04/02.
 */
import React from 'react'
import styles from './style'
import { Text, Dimensions, Platform } from 'react-native'
import { ITabsProps } from './propsType'
import { TabView, TabBar } from 'react-native-tab-view'

const width = Dimensions.get('screen').width

export default class Tabs extends React.Component<ITabsProps, any> {
    public static defaultProps = {
        tabStyle: null,
        tabBarStyle: {},
        tabBarLabelStyle: {},
        tabBarIndicatorStyle: {},
        onIndexChange: null,
        renderScene: null,
        renderTabBar: null,
        renderLabel: null,
        swipeEnabled: false,
        scrollEnabled: false,
        activeColor: '#212121', 
        inactiveColor: '#212121',
        tabIndex: 0,
        routes: [
            { key: 'index1', title: `未选` },
            { key: 'index2', title: `已选` },
            { key: 'index3', title: `未选` },
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

        return <Text style={[styles.labelText, fw && { fontWeight: '600' }, { color }]}>
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
        console.log('this.state.tabIndex===', tabIndex, this.state.tabIndex)

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
