/**
 * @author zhangyi
 * @date 2018/3/15
 */
import React from 'react';
import ISearchBarProps from './propsType';
declare function noop(): void;
export default class SearchBar extends React.Component<ISearchBarProps, any> {
    static defaultProps: {
        defaultValue: string;
        placeholder: string;
        showCancel: boolean;
        cancelText: string;
        cancelColor: any;
        autoFocus: boolean;
        onSubmit: typeof noop;
        onChange: typeof noop;
        onFocus: typeof noop;
        onBlur: typeof noop;
        onCancel: typeof noop;
        onClear: typeof noop;
    };
    searchInput: any;
    duration: number;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    clearInput: () => void;
    onChangeText: (value: any) => void;
    onFocus: () => void;
    onBlur: () => void;
    onCancel: () => void;
    onSubmit: (e: any) => void;
    render(): JSX.Element;
}
export {};
