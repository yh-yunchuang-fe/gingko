/**
 * Created by beilunyang on 2018/4/12
 */
export enum Mode {
    Date = 'date',
    Time ='time',
    DateTime = 'datetime',
    Year = 'year',
    Month = 'month',
}

export interface IDatePickerProps {
    visible?: boolean
    mode?: any;
    minDate?: any;
    maxDate?: any;
    onDateChange?: (val?: Date) => any;
    onValueChange?: (val?: any[], idx?: any) => any;
    defaultDate?: any;
    date?: any;
    title?: string;
    onOk?: (date?: any, val?: any[]) => void;
    onDismiss?: () => any;
}
