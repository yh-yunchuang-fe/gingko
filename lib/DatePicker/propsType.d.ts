/**
 * Created by beilunyang on 2018/4/12
 */
export declare enum Mode {
    Date = "date",
    Time = "time",
    DateTime = "datetime",
    Year = "year",
    Month = "month"
}
export interface IDatePickerProps {
    mode: Mode;
    minDate: Date;
    maxDate: Date;
    onDateChange: (val?: Date) => any;
    onValueChange: (val?: any[], idx?: any) => any;
    defaultDate: Date;
    date: Date;
    title: string;
    onOk: (date?: any, val?: any[]) => void;
    onDismiss: () => any;
}
