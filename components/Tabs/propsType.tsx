/**
 * @author wudi
 * @date 2022/04/02.
 */
import { SceneRendererProps } from 'react-native-tab-view/lib/typescript/types'

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
    renderScene?: (props: SceneRendererProps) => React.ReactNode
    onIndexChange?: (x?: any) => void
    renderLabel?: (x?: any) => void
}
