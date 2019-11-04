/**
 * @author zhangyi
 * @date 2018/4/9
 */
import React from 'react'
import {
    ScrollView,
    View,
    ViewStyle
} from "react-native";
import { TabsProps, TabProps } from './propsType'
import DefaultTabBar from './DefaultTabBar'
import styles from './style/index'

export default class Tabs extends React.Component<TabsProps, any> {
    static DefaultTabBar = DefaultTabBar;

    static defaultProps = {
        tabBarPosition: 'left',
        initialPage: 0,
        tabs: [],
        style: {}
    } as TabsProps;

    nextCurrentTab: number = 0;
    tabCache: { [index: number]: React.ReactNode } = {};
    // isTabVertical: boolean = true;

    constructor(props: TabsProps) {
        super(props);
        console.log('this.props:', props);
        this.state = {
            currentTab: this.getTabIndex(props)
        };
        this.nextCurrentTab = this.state.currentTab;
        const tabBarPosition = this.props.tabBarPosition;
        // this.isTabVertical = tabBarPosition === 'left'
    }

    getTabIndex(props: TabsProps) {
        const { page, initialPage, tabs } = props;
        const param = (page !== undefined ? page : initialPage) || 0;

        let index = 0;
        if (typeof (param as any) === 'string') {
            tabs.forEach((t, i) => {
                if (t.key === param) {
                    index = i
                }
            })
        } else {
            index = param as number || 0;
        }
        return index < 0 ? 0 : index;
    }

    isTabVertical = (tabBarPosition = (this.props.tabBarPosition)) => tabBarPosition === 'left';

    goToTab(index: number) {
        if (this.nextCurrentTab === index) {
            return false;
        }
        this.nextCurrentTab = index;
        const { onChange, tabs, page } = this.props;
        if (index > 0 && index < tabs.length) {
            onChange && onChange(tabs[index], index);
            if (page !== undefined) {
                return false;
            }
        }

        this.setState({
            currentTab: index,
        });
        return true;
    }

    getTabBarBaseProps() {
        const { currentTab } = this.state;
        const {
            tabs,
            onTabClick,
            tabBarFillColor,
            tabBarActionFillColor,
            tabBarActiveTextColor,
            tabBarInactiveTextColor,
            tabBarPosition,
            tabBarTextStyle,
        } = this.props;

        return {
            activeTab: currentTab,
            tabs,
            onTabClick,
            goToTab: this.goToTab.bind(this),
            tabBarFillColor,
            tabBarActionFillColor,
            tabBarActiveTextColor,
            tabBarInactiveTextColor,
            tabBarPosition,
            tabBarTextStyle,
        }
    }

    getSubElements = () => {
        const { children } = this.props;
        let subElements: { [key: string]: React.ReactNode } = {};

        return (defaultPrefix: string = '$i$-', allPrefix: string = '$ALL$') => {
            if (Array.isArray(children)) {
                children.forEach((child: any, index) => {
                    if (child.key) {
                        subElements[child.key] = child;
                    }
                    subElements[`${defaultPrefix}${index}`] = child;
                });
            } else if (children) {
                subElements[allPrefix] = children;
            }
            return subElements;
        };
    };

    getSubElement(
        tab: TabProps,
        index: number,
        subElements: (defaultPrefix: string, allPrefix: string) => { [key: string]: any },
        defaultPrefix: string = '$i$-',
        allPrefix: string = '$ALL$'
    ) {
        const key = tab.key || `${defaultPrefix}${index}`;
        const elements = subElements(defaultPrefix, allPrefix);
        let component = elements[key] || elements[allPrefix];
        if (component instanceof Function) {
            component = component(tab, index);
        }
        return component || null;
    }

    renderTabBar(tabBarProps: any, renderTabBar) {
        if (renderTabBar) {
            return renderTabBar(tabBarProps)
        } else {
            return <DefaultTabBar {...tabBarProps}/>
        }
    }

    renderContent(getSubElements = this.getSubElements()) {
        const { tabs, children } = this.props;
        const { currentTab = 0 } = this.state;
        const tab = tabs[currentTab];
        // const key = tab.key || `tab_${currentTab}`;
        let node = this.tabCache[currentTab] || this.getSubElement(tab, currentTab, getSubElements);

        return node;
        // return (
        //     <ScrollView
        //         style={{flex: 1, backgroundColor: 'skyblue'}}
        //         key="$content"
        //         horizontal={!this.isTabVertical()}
        //         showsHorizontalScrollIndicator={false}
        //         showsVerticalScrollIndicator={false}
        //         scrollsToTop={false}
        //     >
        //         { node }
        //         {/*{*/}
        //             {/*tabs.map((tab, index) => {*/}
        //                 {/*const key = tab.key || `tab_${index}`;*/}
        //                 {/*this.tabCache[index] = this.getSubElement(tab, index, getSubElements);*/}
        //
        //                 {/*return (*/}
        //                     {/*<View key={key}>*/}
        //                         {/*{this.tabCache[index]}*/}
        //                     {/*</View>*/}
        //                 {/*)*/}
        //             {/*})*/}
        //         {/*}*/}
        //     </ScrollView>
        // )
    }

    render() {
        const {
            style, renderTabBar
        } = this.props as TabsProps;

        const tabBarProps = this.getTabBarBaseProps();

        return (
            <View style={{
                flexDirection: this.isTabVertical() ? 'row' : 'column',
                ...style
            }}>
                { this.renderTabBar(tabBarProps, renderTabBar) }
                <View style={{
                    ...styles.Tabs.content
                }}>
                    { this.renderContent() }
                </View>
            </View>
        )
    }
}