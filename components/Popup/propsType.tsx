/*
 * @Author: wudi
 * @Date: 2022-03-04 13:56:33
 * @LastEditTime: 2022-04-06 16:54:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gingko/components/Popup/propsType.tsx
 */
export default interface IDividerProps {
    style?: any
    wrapStyle?: any
    maskStyle?: any
    type?: 'none' | 'close' | 'cancel'
    animationType?: 'none' | 'fade' | 'slide-up' | 'slide-down' | string
    animationDuration?: number
    animateAppear?: boolean
    visible: boolean
    transparent?: boolean
    maskClosable?: boolean
    onChange?: (x?: any) => void
    onClose?: (x?: any) => void
    onAnimationEnd?: (x?: any) => void
    maskCloseable?: boolean
    children?: any
    hint?: string
    title?: string
    close?: string
    numberOfLines?: number
}
