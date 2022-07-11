import { ViewStyle } from 'react-native'

export interface IBaseToastOptions {
    duration?: number
    position?: 'center' | 'top' | 'bottom'
    onClose?: () => void
    style?: ViewStyle
    mask?: boolean
}

export interface IShowToastOptions extends IBaseToastOptions {
    type?: 'success' | 'fail' | 'warn' | 'loading'
    icon?: any
}

export interface IPropsType extends IShowToastOptions {
    content: any
    animationEnd?: () => void
}
