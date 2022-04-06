/**
 * @author zhangyi
 * @date 2018/4/9
 */
import React from 'react'
import {
    TouchableOpacity,
    View,
    Text, ScrollView,
} from 'react-native'
import { IDefaultSidebarProps, ISideProps } from './propsType'
import styles from './style'

export default class DefaultSidebar extends React.Component<IDefaultSidebarProps, any> {
    public static defaultProps = {
        tabs: [],
        activeTab: 0,
        sidebarBackgroundColor: '#fff',
        sidebarActiveTextColor: '',
        sidebarInactiveTextColor: '',
        sidebarTextStyle: {},
    }

    public scrollView = null

    public isTabVertical = (sidebarPosition = (this.props.sidebarPosition)) => sidebarPosition === 'left'

    public onPress = (index: number) => {
        const { onTabClick, tabs, goToTab } = this.props
        onTabClick && onTabClick(tabs[index], index)
        goToTab && goToTab(index)
    }

    public renderTab(tab: ISideProps, index: number) {
        const {
            sidebarActiveTextColor: activeTextColor,
            sidebarInactiveTextColor: inactiveTextColor,
            sidebarTextStyle: textStyle,
            sidebarFillColor: fillColor,
            sidebarActionFillColor: activeFillColor,
            sidebarTabStyle: tabStyle,
            activeTab,
            renderTab,
        } = this.props

        const isTabActive = activeTab === index
        const textColor = isTabActive ?
            (activeTextColor || styles.Sidebar.activeTextColor) :
            (inactiveTextColor || styles.Sidebar.inactiveTextColor)
        const bgColor = isTabActive ?
            (activeFillColor || styles.Sidebar.activeFillColor) :
            (fillColor || styles.Sidebar.fillColor)
        const disabled = tab?.disabled

        return (
            <TouchableOpacity
                key={`${tab.title}_${index}`}
                activeOpacity={disabled ? 1 : 0.5}
                onPress={disabled ? () => {} : () => this.onPress(index)}
            >
                <View style={{
                    ...styles.Sidebar.tab,
                    backgroundColor: bgColor,
                    ...tabStyle
                }}>
                    {
                        renderTab ? renderTab(tab, isTabActive) :
                            <Text numberOfLines={2} style={{
                                color: disabled ? styles.Sidebar.disabledColor : textColor,
                                ...styles.Sidebar.textStyle,
                                ...textStyle
                            }}>
                                { tab.title }
                            </Text>
                    }
                </View>
            </TouchableOpacity>
        )
    }

    public render() {
        const {
            tabs,
            sidebarFillColor,
        } = this.props

        return (
            <View style={{
                ...styles.Sidebar.container,
                backgroundColor: sidebarFillColor || styles.Sidebar.fillColor
            }}>
                <ScrollView
                    ref={(scrollView: any) => { this.scrollView = scrollView }}
                    horizontal={!this.isTabVertical()}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    scrollsToTop={false}
                >
                    <View style={{
                        ...styles.Sidebar.tabs,
                        backgroundColor: sidebarFillColor || styles.Sidebar.fillColor
                    }}>
                        {
                            tabs.map((name, index) => {
                                let tab = { title: name } as ISideProps
                                if (tabs.length - 1 >= index) {
                                    tab = tabs[index]
                                }
                                return this.renderTab(tab, index)
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}
