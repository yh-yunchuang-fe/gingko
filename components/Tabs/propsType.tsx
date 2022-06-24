/**
 * @author wudi
 * @date 2022/04/02.
 */

export interface ITabsProps {
    routes?: any
    tabIndex?: any
    tabBarStyle?: any
    swipeEnabled?: boolean
    scrollEnabled?: boolean
    activeColor?: string
    inactiveColor?: string
    tabStyle?: any
    tabBarLabelStyle?: any
    tabBarIndicatorStyle?: any
    renderScene?: any
    onIndexChange?: (x?: any) => void
    renderLabel?: (x?: any) => void
}
