/**
 * @author zhangyi
 * @date 2018/3/25
 */
import React from 'react'
import * as RN from 'react-native'

export interface ISideProps {
    disabled?: boolean
    key?: string
    title: React.ReactNode

}

export interface IDefaultSideBarProps {
    tabs: ISideProps[]
    activeTab: number
    sidebarPosition?: 'left'
    renderTab?: (tab: ISideProps, isTabActive: boolean) => React.ReactNode
    onTabClick?: (tab: ISideProps, index: number) => void
    goToTab: (index: number) => void

    sidebarFillColor?: string
    sidebarActionFillColor?: string
    sidebarActiveTextColor?: string
    sidebarInactiveTextColor?: string
    sidebarTextStyle?: React.CSSProperties | any
    sidebarTabStyle?: React.CSSProperties | any
}

export interface ISideBarProps {
    tabs: ISideProps[]
    sidebarPosition?: 'left'
    renderSideBar?: (x?: any) => void
    initialPage?: number | string
    page?: number | string
    onChange?: (tab: ISideProps, index: number) => void
    onTabClick?: (tab: ISideProps, index: number) => void
    style?: RN.ViewStyle
    children?: any

    sidebarFillColor?: string
    sidebarActionFillColor?: string
    sidebarActiveTextColor?: string
    sidebarInactiveTextColor?: string
    sidebarTextStyle?: React.CSSProperties | any
    sidebarTabStyle?: React.CSSProperties | any
}
