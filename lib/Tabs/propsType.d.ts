/**
 * @author zhangyi
 * @date 2018/3/25
 */
import React from 'react';
import * as RN from 'react-native';
export interface TabProps {
    key?: string;
    title: React.ReactNode;
}
export interface TabBarProps {
    tabs: TabProps[];
    renderTab?: (tab: TabProps, isTabActive: boolean) => React.ReactNode;
    activeTab: number;
    tabBarPosition?: 'left';
    onTabClick?: (tab: TabProps, index: number) => void;
    goToTab: (index: number) => void;
    tabBarFillColor?: string;
    tabBarActionFillColor?: string;
    tabBarActiveTextColor?: string;
    tabBarInactiveTextColor?: string;
    tabBarTextStyle?: React.CSSProperties | any;
}
export interface TabsProps {
    tabs: TabProps[];
    tabBarPosition?: 'left';
    renderTabBar?: (() => React.ReactNode) | false;
    initialPage?: number | string;
    page?: number | string;
    onChange?: (tab: TabProps, index: number) => void;
    onTabClick?: (tab: TabProps, index: number) => void;
    style?: RN.ViewStyle;
    tabBarFillColor?: string;
    tabBarActionFillColor?: string;
    tabBarActiveTextColor?: string;
    tabBarInactiveTextColor?: string;
    tabBarTextStyle?: React.CSSProperties | any;
}
