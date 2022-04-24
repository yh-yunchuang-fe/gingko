/**
 * @author zhangyi
 * @date 2018/4/9
 */
import React from 'react'
import {
    View,
} from 'react-native'
import { ISideBarProps, ISideProps } from './propsType'
import DefaultSideBar from './DefaultSideBar'
import styles from './style'

export default class SideBar extends React.Component<ISideBarProps, any> {
    public static DefaultSideBar = DefaultSideBar

    public static defaultProps = {
        sidebarPosition: 'left',
        initialPage: 0,
        tabs: [],
        style: {}
    } as ISideBarProps

    public nextCurrentTab: number = 0
    public tabCache: { [index: number]: React.ReactNode } = {}
    // isTabVertical: boolean = true

    constructor(props: ISideBarProps) {
        super(props)
        this.state = {
            currentTab: this.getTabIndex(props)
        }
        this.nextCurrentTab = this.state.currentTab
    }

    public getTabIndex(props: ISideBarProps) {
        const { page, initialPage, tabs } = props
        const param = (page !== undefined ? page : initialPage) || 0

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

    public isTabVertical = (sidebarPosition = (this.props.sidebarPosition)) => sidebarPosition === 'left'

    public goToTab(index: number) {
        if (this.nextCurrentTab === index) {
            return false
        }
        this.nextCurrentTab = index
        const { onChange, tabs, page } = this.props
        if (index > 0 && index < tabs.length) {
            onChange && onChange(tabs[index], index)
            if (page !== undefined) {
                return false
            }
        }

        this.setState({
            currentTab: index,
        })
        return true
    }

    public getSideBarBaseProps() {
        const { currentTab } = this.state
        const {
            tabs,
            onTabClick,
            sidebarFillColor,
            sidebarActionFillColor,
            sidebarActiveTextColor,
            sidebarInactiveTextColor,
            sidebarPosition,
            sidebarTextStyle,
            sidebarTabStyle
        } = this.props

        return {
            activeTab: currentTab,
            tabs,
            onTabClick,
            goToTab: this.goToTab.bind(this),
            sidebarFillColor,
            sidebarActionFillColor,
            sidebarActiveTextColor,
            sidebarInactiveTextColor,
            sidebarPosition,
            sidebarTextStyle,
            sidebarTabStyle
        }
    }

    public getSubElements = () => {
        const { children } = this.props
        const subElements: { [key: string]: React.ReactNode } = {}

        return (defaultPrefix: string = '$i$-', allPrefix: string = '$ALL$') => {
            if (Array.isArray(children)) {
                children.forEach((child: any, index) => {
                    if (child.key) {
                        subElements[child.key] = child
                    }
                    subElements[`${defaultPrefix}${index}`] = child
                })
            } else if (children) {
                subElements[allPrefix] = children
            }
            return subElements
        }
    }

    public getSubElement(
        tab: ISideProps,
        index: number,
        subElements: (defaultPrefix: string, allPrefix: string) => { [key: string]: any },
        defaultPrefix: string = '$i$-',
        allPrefix: string = '$ALL$'
    ) {
        const key = tab.key || `${defaultPrefix}${index}`
        const elements = subElements(defaultPrefix, allPrefix)
        let component = elements[key] || elements[allPrefix]
        if (component instanceof Function) {
            component = component(tab, index)
        }
        return component || null
    }

    public renderSideBar(sidebarProps: any, renderSideBar: ((x?: any) => void) | undefined) {
        if (renderSideBar) {
            return renderSideBar(sidebarProps)
        } else {
            return <DefaultSideBar {...sidebarProps}/>
        }
    }

    public renderContent(getSubElements = this.getSubElements()) {
        const { tabs } = this.props
        const { currentTab = 0 } = this.state
        const tab = tabs[currentTab]
        const node = this.tabCache[currentTab] || this.getSubElement(tab, currentTab, getSubElements)

        return node
    }

    public render() {
        const {
            style, renderSideBar
        } = this.props as ISideBarProps

        const sidebarProps = this.getSideBarBaseProps()

        return (
            <View style={{
                flexDirection: this.isTabVertical() ? 'row' : 'column',
                ...style
            }}>
                { this.renderSideBar(sidebarProps, renderSideBar) }
                <View style={{
                    ...styles.Side.content
                }}>
                    { this.renderContent() }
                </View>
            </View>
        )
    }
}
