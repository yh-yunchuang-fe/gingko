import React from 'react'

/**
 * @author zhangyi
 * @date 2018/3/19
 */
export default interface NoticeBarProps {
    mode?: '' | 'link' | 'closeable'
    color?: string
    bgColor?: string
    style?: any
    icon?: string
    action?: string | React.ReactElement<any>
    onClick?: () => void
}
