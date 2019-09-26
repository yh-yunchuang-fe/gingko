/**
 * @author zhangyi
 * @date 2018/4/9
 */
import React from 'react';
import { TabBarProps, TabProps } from './propsType';
export default class DefaultTabBar extends React.Component<TabBarProps, any> {
    static defaultProps: {
        tabs: any[];
        activeTab: number;
        tabBarBackgroundColor: string;
        tabBarActiveTextColor: string;
        tabBarInactiveTextColor: string;
        tabBarTextStyle: {};
    };
    _scrollView: any;
    isTabVertical: (tabBarPosition?: "left") => boolean;
    constructor(props: TabBarProps);
    onPress: (index: number) => void;
    renderTab(tab: TabProps, index: number): JSX.Element;
    render(): JSX.Element;
}
