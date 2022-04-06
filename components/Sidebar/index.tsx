/**
 * @author zhangyi
 * @date 2018/4/9
 */
import React from 'react'
import {
    View,
} from 'react-native'
import { ISidebarProps, ISideProps } from './propsType'
import DefaultSidebar from './DefaultSidebar'
import styles from './style'

export default class Tabs extends React.Component<ISidebarProps, any> {
    public static DefaultSidebar = DefaultSidebar

    public static defaultProps = {
        sidebarPosition: 'left',
        initialPage: 0,
        tabs: [],
        style: {}
    } as ISidebarProps

    public nextCurrentTab: number = 0
    public tabCache: { [index: number]: React.ReactNode } = {}
    // isTabVertical: boolean = true

    constructor(props: ISidebarProps) {
        super(props)
        console.log('this.props:', props)
        this.state = {
            currentTab: this.getTabIndex(props)
        }
        this.nextCurrentTab = this.state.currentTab
    }

    public getTabIndex(props: ISidebarProps) {
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

    public getSidebarBaseProps() {
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

    public renderSidebar(sidebarProps: any, renderSidebar: ((x?: any) => void) | undefined) {
        if (renderSidebar) {
            return renderSidebar(sidebarProps)
        } else {
            return <DefaultSidebar {...sidebarProps}/>
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
            style, renderSidebar
        } = this.props as ISidebarProps

        const sidebarProps = this.getSidebarBaseProps()

        return (
            <View style={{
                flexDirection: this.isTabVertical() ? 'row' : 'column',
                ...style
            }}>
                { this.renderSidebar(sidebarProps, renderSidebar) }
                <View style={{
                    ...styles.Side.content
                }}>
                    { this.renderContent() }
                </View>
            </View>
        )
    }
}
