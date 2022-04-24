export interface ITabBarProps {
    filter?: number
    tabs?: any
    iconStyle?: any
    selectionColor?: string
    tabTextStyle?: object
    onClick?: (x?: any) => void,
}

export interface ITabBarItemProps {
    badge?: any
    title?: string
    hide?: boolean
    image?: string
    activeImage?: string
}
