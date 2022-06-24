/**
 * @author zhangyi
 * @date 2018/4/9
 */
// import variables from '@src/style'
import React from 'react'
import {
    TouchableOpacity,
    View,
    Text, 
    ScrollView,
} from 'react-native'
import { IDefaultSideBarProps, ISideProps } from './propsType'
import styles from './style'

function DefaultSideBar(props: IDefaultSideBarProps) {
    const {
        tabs = [],
        // activeTab = 0,
        sidebarFillColor,
        // sidebarBackgroundColor = variables.color_sideBar_bg,
        // sidebarActiveTextColor = '',
        // sidebarInactiveTextColor = '',
        // sidebarTextStyle = {},
    }  = props

    const isTabVertical = (sidebarPosition = (props.sidebarPosition)) => sidebarPosition === 'left'

    const onPress = (index: number) => {
        const { onTabClick, tabs, goToTab } = props
        onTabClick && onTabClick(tabs[index], index)
        goToTab && goToTab(index)
    }

    const renderTab = (tab: ISideProps, index: number) => {
        const {
            sidebarActiveTextColor: activeTextColor,
            sidebarInactiveTextColor: inactiveTextColor,
            sidebarTextStyle: textStyle,
            sidebarFillColor: fillColor,
            sidebarActionFillColor: activeFillColor,
            sidebarTabStyle: tabStyle,
            activeTab,
            renderTab,
        } = props

        const isTabActive = activeTab === index
        const textColor = isTabActive ?
            (activeTextColor || styles.SideBar.activeTextColor) :
            (inactiveTextColor || styles.SideBar.inactiveTextColor)
        const bgColor = isTabActive ?
            (activeFillColor || styles.SideBar.activeFillColor) :
            (fillColor || styles.SideBar.fillColor)
        const disabled = tab?.disabled

        return (
            <TouchableOpacity
                key={`${tab.title}_${index}`}
                activeOpacity={disabled ? 1 : 0.5}
                onPress={disabled ? () => {} : () => onPress(index)} >
                <View style={{
                    ...styles.SideBar.tab,
                    backgroundColor: bgColor,
                    ...tabStyle
                }}>
                    {
                        renderTab ? renderTab(tab, isTabActive) :
                        <Text numberOfLines={2} style={{
                            color: disabled ? styles.SideBar.disabledColor : textColor,
                            ...styles.SideBar.textStyle,
                            ...textStyle
                        }}>
                            { tab.title }
                        </Text>
                    }
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{
            ...styles.SideBar.container,
            backgroundColor: sidebarFillColor || styles.SideBar.fillColor
        }}>
            <ScrollView
                horizontal={!isTabVertical()}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                scrollsToTop={false}
            >
                <View style={{
                    ...styles.SideBar.tabs,
                    backgroundColor: sidebarFillColor || styles.SideBar.fillColor
                }}>
                    {
                        tabs.map((name, index) => {
                            let tab: ISideProps = { title: name }
                            if (tabs.length - 1 >= index) {
                                tab = tabs[index]
                            }
                            return renderTab(tab, index)
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default DefaultSideBar
