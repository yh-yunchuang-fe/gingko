/**
 * Created by beilunyang on 2018/4/12
 */
import * as React from 'react';
import { Mode, IDatePickerProps } from './propsType';
export default class DatePicker extends React.Component<IDatePickerProps, any> {
    static defaultProps: {
        mode: Mode;
        minDate: Date;
        maxDate: Date;
    };
    state: {
        date: Date;
    };
    componentWillReceiveProps(nextProps: any): void;
    getDateInMonth: (date: Date) => number;
    cloneDate: (date: Date) => Date;
    clipDate: (date: Date) => Date;
    getDate: () => Date;
    getDateData: () => any[];
    getTimeData: (date: any) => {
        cols: any[];
        minute: any;
    };
    getValueCols: () => {
        value: any;
        cols: any;
    };
    setMonth: (date: any, month: any) => void;
    getNewDate: (values: any, idx: any) => Date;
    onChange: (values: any, idx: any) => void;
    onOk: (values: any) => void;
    render(): JSX.Element;
}
