/**
 * Created by beilunyang on 2018/2/9
 */
import * as React from 'react';
import { IInputItemProps } from './propsType';
export default class InputItem extends React.Component<IInputItemProps, any> {
    static defaultProps: IInputItemProps;
    inputRef: any;
    clear: () => void;
    onChange: (text: any) => void;
    onInputBlur: () => void;
    onInputFocus: () => void;
    renderIcon: () => JSX.Element | null;
    render(): JSX.Element;
}
