/**
 * Created by wudi on 2022/04/02.
 */
import React from 'react';
import { ITabsProps } from './propsType';
export default class Tabs extends React.Component<ITabsProps, any> {
    static defaultProps: {
        tabStyle: {};
        tabBarStyle: {};
        tabBarLabelStyle: {};
        tabBarIndicatorStyle: {};
        onIndexChange: () => void;
        renderScene: null;
        renderTabBar: null;
        renderLabel: null;
        swipeEnabled: boolean;
        scrollEnabled: boolean;
        activeColor: any;
        inactiveColor: any;
        tabIndex: number;
        routes: {
            key: string;
            title: string;
        }[];
    };
    state: {
        tabIndex: any;
    };
    onIndexChange: (value?: any) => void;
    renderLabel: ({ route, focused, color }: any) => JSX.Element;
    renderTabBar: (props: any) => JSX.Element;
    render(): JSX.Element;
}
