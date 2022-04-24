/**
 * @author zhangyi
 * @date 2018/3/25
 */

export default interface NavBarProps {
    leftIcon?: string
    leftContent?: any
    rightContent?: any
    onLeftClick?: (x?: any)=> void
    style?: any
    children?: any
}
