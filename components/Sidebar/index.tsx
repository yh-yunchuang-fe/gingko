/**
 * @author zhangyi
 * @date 2018/4/9
 */
import React, { useState } from 'react'
import { View } from 'react-native'
import { ISideBarProps, ISideProps } from './propsType'
import DefaultSideBar from './DefaultSidebar'
import styles from './style'

function SideBar(props: ISideBarProps) {
    
    const {
        sidebarPosition = 'left',
        initialPage = 0,
        tabs = [],
        style = {},
    }: ISideBarProps = props

    let nextCurrentTab: number = 0
    const tabCache: { [index: number]: React.ReactNode } = {}

    const getTabIndex = () => {
        const param = (props.page !== undefined ? props.page : initialPage) || 0
        let index = 0
        if (typeof (param as any) === 'string') {
            tabs.forEach((t, i) => {
                if (t.key === param) {
                    index = i
                }
            })
        } else {
            index = param as number || 0
        }

        return index < 0 ? 0 : index
    }

    const [currentTab, setCurrentTab] = useState(getTabIndex())

    nextCurrentTab = currentTab

    const isTabVertical = (position = (sidebarPosition)) => position === 'left'

    const goToTab = (index: number) => {
        if (nextCurrentTab === index) {
            return false
        }
        nextCurrentTab = index
        const { onChange, page } = props
        if (index > 0 && index < tabs.length) {
            onChange && onChange(tabs[index], index)
            if (page !== undefined) {
                return false
            }
        }

        setCurrentTab(index)
        return true
    }

    const getSideBarBaseProps = () => {
        const {
            onTabClick,
            sidebarFillColor,
            sidebarActionFillColor,
            sidebarActiveTextColor,
            sidebarInactiveTextColor,
            sidebarTextStyle,
            sidebarTabStyle
        } = props

        return {
            activeTab: currentTab,
            tabs,
            onTabClick,
            goToTab,
            sidebarFillColor,
            sidebarActionFillColor,
            sidebarActiveTextColor,
            sidebarInactiveTextColor,
            sidebarPosition,
            sidebarTextStyle,
            sidebarTabStyle
        }
    }

    const getSubElements = () => {
        const { children } = props
        const elements: any = {}

        return (defaultPrefix: string = '$i$-', allPrefix: string = '$ALL$') => {
            if (Array.isArray(children)) {
                children.forEach((child: any, index) => {
                    if (child.key) {
                        elements[child.key] = child
                    }
                    elements[`${defaultPrefix}${index}`] = child
                })
            } else if (children) {
                elements[allPrefix] = children
            }

            return elements
        }
    }

    const getSubElement = (
        tab: ISideProps,
        index: number,
        subElements: (defaultPrefix: string, allPrefix: string) => { [key: string]: any },
        defaultPrefix: string = '$i$-',
        allPrefix: string = '$ALL$'
    ) => {
        const key = tab.key || `${defaultPrefix}${index}`
        const elements = subElements(defaultPrefix, allPrefix)
        let component = elements[key] || elements[allPrefix]
        if (component instanceof Function) {
            component = component(tab, index)
        }
        return component || null
    }

    const renderSideBar = (sidebarData: any, renderSide: any) => {
        if (renderSide) {
            return renderSide(sidebarData)
        } else {
            return <DefaultSideBar {...sidebarData}/>
        }
    }

    const renderContent = (elements = getSubElements()) => {
        const tab = props?.tabs[currentTab]
        const node = tabCache[currentTab] || getSubElement(tab, currentTab, elements)

        return node
    }

    const sidebarProps = getSideBarBaseProps()

    return (
        <View style={{ flexDirection: isTabVertical() ? 'row' : 'column', ...style }}>
            { renderSideBar(sidebarProps, renderSideBar) }
            <View style={{ ...styles.Side.content }}>
                { renderContent() }
            </View>
        </View>
    )
}

SideBar.DefaultSideBar = DefaultSideBar

export default SideBar
