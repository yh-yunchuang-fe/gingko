/**
 * @author zhangyi
 * @date 2018/4/18
 */
import React from 'react';
import SearchInputProps from './propsType';
declare function noop(): void;
export default class SearchInput extends React.Component<SearchInputProps, any> {
    static defaultProps: {
        defaultValue: string;
        placeholder: string;
        autoFocus: boolean;
        onSubmit: typeof noop;
        onChange: typeof noop;
        onFocus: typeof noop;
        onBlur: typeof noop;
        onClear: typeof noop;
    };
    searchInput: any;
    constructor(props: any);
    isControlledComponent: () => boolean;
    componentWillReceiveProps(nextProps: any): void;
    clearInput: () => void;
    onChangeText: (value: any) => void;
    onFocus: () => void;
    onBlur: () => void;
    onSubmit: (e: any) => void;
    render(): JSX.Element;
}
export {};
