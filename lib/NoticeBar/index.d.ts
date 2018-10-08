/**
 * @author zhangyi
 * @date 2018/3/19
 */
import React from 'react';
import NoticeBarProps from './propsType';
export default class NoticeBar extends React.Component<NoticeBarProps, any> {
    static defaultProps: {
        color: any;
        mode: string;
        icon: string;
        action: string;
        bgColor: any;
    };
    constructor(props: any);
    onClick: () => void;
    render(): JSX.Element | null;
}
