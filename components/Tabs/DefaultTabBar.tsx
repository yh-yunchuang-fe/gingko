/**
 * @author zhangyi
 * @date 2018/4/9
 */
import React from 'react'
import {
    TouchableOpacity,
    View,
    Text, ScrollView,
} from "react-native";
import { TabBarProps, TabProps } from './propsType'
import styles from './style/index'


export default class DefaultTabBar extends React.Component<TabBarProps, any> {
    static defaultProps = {
        tabs: [],
        activeTab: 0,
        tabBarBackgroundColor: '#fff',
        tabBarActiveTextColor: '',
        tabBarInactiveTextColor: '',
        tabBarTextStyle: {},
    };

    _scrollView = null;

    isTabVertical = (tabBarPosition = (this.props.tabBarPosition)) => tabBarPosition === 'left';

    constructor(props: TabBarProps) {
        super(props)
    }

    onPress = (index: number) => {
        const { onTabClick, tabs, goToTab } = this.props;
        onTabClick && onTabClick(tabs[index], index);
        goToTab && goToTab(index)
    };

    renderTab(tab: TabProps, index: number) {
        const {
            tabBarActiveTextColor: activeTextColor,
            tabBarInactiveTextColor: inactiveTextColor,
            tabBarTextStyle: textStyle,
            tabBarFillColor: fillColor,
            tabBarActionFillColor: activeFillColor,
            activeTab,
            renderTab,
        } = this.props;

        const isTabActive = activeTab === index;
        const textColor = isTabActive ?
            (activeTextColor || styles.TabBar.activeTextColor) :
            (inactiveTextColor || styles.TabBar.inactiveTextColor);
        const bgColor = isTabActive ?
            (activeFillColor || styles.TabBar.activeFillColor) :
            (fillColor || styles.TabBar.fillColor);

        return (
            <TouchableOpacity
                key={`${tab.title}_${index}`}
                onPress={() => this.onPress(index)}
            >
                <View style={{
                    ...styles.TabBar.tab,
                    backgroundColor: bgColor
                }}>
                    {
                        renderTab ? renderTab(tab, isTabActive) :
                            <Text style={{
                                color: textColor,
                                ...styles.TabBar.textStyle,
                                ...textStyle
                            }}>
                                { tab.title }
                            </Text>
                    }
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        const {
            tabs,
            tabBarFillColor,
        } = this.props;

        return (
            <View style={{
                ...styles.TabBar.container,
            }}>
                <ScrollView
                    ref={(scrollView: any) => { this._scrollView = scrollView; }}
                    horizontal={!this.isTabVertical()}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    scrollsToTop={false}
                >
                    <View style={{
                        ...styles.TabBar.tabs,
                        backgroundColor: tabBarFillColor || styles.TabBar.fillColor
                    }}>
                        {
                            tabs.map((name, index) => {
                                let tab = { title: name } as TabProps;
                                if (tabs.length - 1 >= index) {
                                    tab = tabs[index];
                                }
                                return this.renderTab(tab, index);
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}