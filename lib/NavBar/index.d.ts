/**
 * @author zhangyi
 * @date 2018/3/25
 * TODO 暂时不用使用navBar,而应该直接使用react-navigation
 */
/// <reference types="react" />
import NavBarProps from './propsType';
export default function NarBar({ style, leftIcon, // 'home'
leftContent, rightContent, onLeftClick, children, ...restProps }: NavBarProps): JSX.Element;
