/**
 * @author zhangyi
 * @date 2018/3/25
 * TODO 暂时不用使用navBar,而应该直接使用react-navigation
 */
import React from 'react';
import NavBarProps from './propsType';
export default class NarBar extends React.Component<NavBarProps, any> {
    static defaultProps: {
        style: any;
        leftIcon: string;
        leftContent: any;
        rightContent: any;
        onLeftClick: () => void;
    };
    constructor(props: any);
    render(): JSX.Element;
}
