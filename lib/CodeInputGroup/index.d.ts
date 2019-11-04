/**
 * @author zhangyi
 * @date 2018/5/5
 */
import React from 'react';
import IProps from './propsType';
declare function noop(): void;
export default class CodeInputGroup extends React.Component<IProps, any> {
    static defaultProps: {
        defaultValue: string;
        size: number;
        autoFocus: boolean;
        onChange: typeof noop;
        onFocus: typeof noop;
        onBlur: typeof noop;
    };
    constructor(props: any);
    onChangeText: (values: any) => void;
    onFocus: () => void;
    onBlur: () => void;
    render(): JSX.Element;
}
export {};
