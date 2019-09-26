/**
 * Created by beilunyang on 2018/2/9
 */
import * as React from 'react';
import { IItemProps, IPickerProps } from './propsType';
export default class extends React.Component<IPickerProps, any> {
    static Item: typeof import("react-native").PickerItem;
    static defaultProps: IPickerProps;
    state: {
        value: number | string[];
    };
    componentWillReceiveProps(nextProps: any): void;
    renderHeader: () => JSX.Element;
    renderItems: (group: IItemProps[]) => JSX.Element[];
    renderCols: () => JSX.Element[];
    onChange: (values: any, idx: any) => void;
    renderPicker: () => JSX.Element;
    render(): JSX.Element;
}
