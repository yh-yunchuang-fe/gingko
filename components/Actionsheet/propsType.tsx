/*
 * @Author: wudi
 * @Date: 2022-03-04 13:56:33
 * @LastEditTime: 2022-04-06 15:03:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gingko/components/Popup/propsType.tsx
 */
export default interface IActionsheetProps {
    style?: any
    wrapStyle?: any
    maskStyle?: any
    animationType?: 'none' | 'fade' | 'slide-up' | 'slide-down' | string
    animationDuration?: number
    animateAppear?: boolean
    visible: boolean
    transparent?: boolean
    maskClosable?: boolean
    onClose?: (x?: any) => void
    onChange?: (x?: any, y?: any) => void
    onAnimationEnd?: (x?: any) => void
    maskCloseable?: boolean
    options?: any
    children?: any
    hint?: string
    title?: string
    close?: string
    numberOfLines?: number
}
