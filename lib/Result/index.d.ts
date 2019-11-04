/**
 * @author zhangyi
 * @date 2018/3/28
 */
import React from 'react';
interface ResultProps {
    img?: React.ReactNode;
    title?: string | React.ReactNode;
    message?: string | React.ReactNode;
    style?: any;
}
export default class Result extends React.Component<ResultProps, any> {
    static defaultProps: {
        img: JSX.Element;
        message: string;
    };
    constructor(props: any);
    render(): JSX.Element;
}
export {};
