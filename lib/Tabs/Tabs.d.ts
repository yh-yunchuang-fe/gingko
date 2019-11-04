/**
 * @author zhangyi
 * @date 2018/4/9
 */
import React from 'react';
import { TabsProps, TabProps } from './propsType';
import DefaultTabBar from './DefaultTabBar';
export default class Tabs extends React.Component<TabsProps, any> {
    static DefaultTabBar: typeof DefaultTabBar;
    static defaultProps: TabsProps;
    nextCurrentTab: number;
    tabCache: {
        [index: number]: React.ReactNode;
    };
    constructor(props: TabsProps);
    getTabIndex(props: TabsProps): number;
    isTabVertical: (tabBarPosition?: "left" | undefined) => boolean;
    goToTab(index: number): boolean;
    getTabBarBaseProps(): {
        activeTab: any;
        tabs: TabProps[];
        onTabClick: ((tab: TabProps, index: number) => void) | undefined;
        goToTab: any;
        tabBarFillColor: string | undefined;
        tabBarActionFillColor: string | undefined;
        tabBarActiveTextColor: string | undefined;
        tabBarInactiveTextColor: string | undefined;
        tabBarPosition: "left" | undefined;
        tabBarTextStyle: any;
    };
    getSubElements: () => (defaultPrefix?: string, allPrefix?: string) => {
        [key: string]: React.ReactNode;
    };
    getSubElement(tab: TabProps, index: number, subElements: (defaultPrefix: string, allPrefix: string) => {
        [key: string]: any;
    }, defaultPrefix?: string, allPrefix?: string): any;
    renderTabBar(tabBarProps: any, renderTabBar: any): any;
    renderContent(getSubElements?: (defaultPrefix?: string, allPrefix?: string) => {
        [key: string]: React.ReactNode;
    }): any;
    render(): JSX.Element;
}
