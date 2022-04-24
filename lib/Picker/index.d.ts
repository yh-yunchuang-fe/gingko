/**
 * Created by beilunyang on 2018/2/9
 */
import * as React from 'react';
import { IItemProps, IPickerProps } from './propsType';
export default class extends React.Component<IPickerProps, any> {
    static Item: React.ComponentType<import("@react-native-picker/picker").PickerItemProps<T>>;
    static defaultProps: IPickerProps;
    state: {
        value: any;
    };
    componentWillReceiveProps(nextProps: any): void;
    renderHeader: () => JSX.Element;
    renderItems: (group: IItemProps[]) => JSX.Element[];
    renderCols: () => JSX.Element[] | null;
    onChange: (values: any, idx: any) => void;
    renderPicker: () => JSX.Element;
    render(): JSX.Element;
}
