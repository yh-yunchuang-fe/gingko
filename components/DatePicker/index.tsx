/**
 * Created by beilunyang on 2018/4/12
 */
import * as React from 'react';
import Picker from '../Picker';
import {
    Mode,
    IDatePickerProps,
} from './propsType';

const ONE_DAY = 24 * 60 * 60 * 1000;

export default class DatePicker extends React.Component<IDatePickerProps, any> {
    public static defaultProps = {
        mode: Mode.Date,
        minDate: new Date(2000, 0, 1, 0, 0),
        maxDate: new Date(2050, 0, 1, 23, 59),
    };

    public state = {
        date: this.props.date || this.props.defaultDate,
    };

    public componentWillReceiveProps(nextProps) {
        if ('date' in nextProps) {
            this.setState({
                date: nextProps.date || nextProps.defaultDate,
            });
        }
    }

    public getDateInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    }

    public cloneDate = (date: Date) => {
        return new Date(+date);
    }

    public clipDate = (date: Date) => {
        const {
            mode,
            minDate,
            maxDate,
        } = this.props;
        if (mode === Mode.DateTime) {
           if (date < minDate) {
               return this.cloneDate(minDate);
           }
           if (date > maxDate) {
               return this.cloneDate(maxDate);
           }
        } else if (mode === Mode.Date) {
            if (+date + ONE_DAY <= +minDate) {
                return this.cloneDate(minDate);
            }

            if (+date >= +maxDate + ONE_DAY) {
                return this.cloneDate(maxDate);
            }
        } else {
            const maxHours = maxDate.getHours();
            const maxMinutes = maxDate.getMinutes();
            const minHours = minDate.getHours();
            const minMinutes = minDate.getMinutes();
            const hour = date.getHours();
            const minutes = date.getMinutes();
            if (hour < minHours || hour === minHours && minutes < minMinutes) {
                return this.cloneDate(minDate);
            }
            if (hour > maxHours || hour === maxHours && minutes > maxMinutes) {
                return this.cloneDate(maxDate);
            }
        }
        return date;
    }

    public getDate = () => {
        return this.clipDate(this.state.date || this.props.minDate);
    }

    public getDateData = () => {
        const {
            mode,
            minDate,
            maxDate,
        } = this.props;
        const date = this.getDate();
        const year = date.getFullYear();
        const month = date.getMonth();
        const minYear = minDate.getFullYear();
        const minMonth = minDate.getMonth();
        const minDay = minDate.getDate();
        const maxYear = maxDate.getFullYear();
        const maxMonth = maxDate.getMonth();
        const maxDay = maxDate.getDate();
        const years: any = [];
        for (let i = minYear; i <= maxYear; i++) {
            years.push({
                label: i + '年',
                value: i,
            });
        }
        const yearCol = years;
        if (mode === Mode.Year) {
            return [yearCol];
        }
        const months: any = [];
        let minMonthNum = 0;
        let maxMonthNum = 11;
        if (minYear === year) {
            minMonthNum = minMonth;
        }
        if (maxYear === year) {
            maxMonthNum = maxMonth;
        }
        for (let i = minMonthNum; i <= maxMonthNum; i++) {
            months.push({
                label: i + 1 + '月',
                value: i,
            });
        }
        const monthCol = months;
        if (mode === Mode.Month) {
            return [yearCol, monthCol];
        }
        const days: any = [];
        let minDayNum = 1;
        let maxDayNum = this.getDateInMonth(date);
        if (minYear === year && minMonth === month) {
            minDayNum = minDay;
        }
        if (maxYear === year && maxMonth === month) {
            maxDayNum = maxDay;
        }
        for (let i = minDayNum; i <= maxDayNum; i++) {
            days.push({
                label: i + '日',
                value: i,
            });
        }
        const dateCol = days;
        return [
            yearCol,
            monthCol,
            dateCol,
        ];
    }

    public getTimeData = (date: any) => {
        let minHourNum = 0;
        let maxHourNum = 23;
        let minMinutesNum = 0;
        let maxMinutesNum = 59;
        const {
            mode,
            minDate,
            maxDate,
        } = this.props;
        const minMinutes = minDate.getMinutes();
        const maxMinutes = maxDate.getMinutes();
        const minHour = minDate.getHours();
        const maxHour = maxDate.getHours();
        const hour = date.getHours();
        if (mode === Mode.DateTime) {
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const maxYear = maxDate.getFullYear();
            const minYear = minDate.getFullYear();
            const maxMonth = maxDate.getMonth();
            const minMonth = minDate.getMonth();
            const maxDay = maxDate.getDate();
            const minDay = minDate.getDate();
            if (year === minYear && month === minMonth && day === minDay) {
                minHourNum = minHour;
                if (minHour === hour) {
                    minMinutesNum = minMinutes;
                }
            }
            if (year === maxYear && month === maxMonth && day === maxDay) {
                maxHourNum = maxHour;
                if (maxHour === hour) {
                    maxMinutesNum = maxMinutes;
                }
            }
        } else {
           minHourNum = minHour;
           if (minHour === hour) {
               minMinutesNum = minMinutes;
           }
           maxHourNum = maxHour;
           if (maxHour === hour) {
               maxMinutesNum = maxMinutes;
           }
        }
        const hours: any = [];
        for (let i = minHourNum; i <= maxHourNum; i++) {
            hours.push({
                label: i + '时',
                value: i,
            });
        }
        const minutes: any = [];
        const minute = date.getMinutes();
        for (let i = minMinutesNum; i <= maxMinutesNum; i++) {
            minutes.push({
                label: i + '分',
                value: i,
            });
        }
        const cols = [
            hours,
            minutes,
        ];
        return {
            cols,
            minute,
        };
    }

    public getValueCols = () => {
        const { mode } = this.props;
        const date = this.getDate();
        let cols: any = [];
        let value: any = [];

        if (mode === Mode.Year) {
            return {
                cols: this.getDateData(),
                value: [date.getFullYear()],
            };
        }
        if (mode === Mode.Month) {
            return {
                cols: this.getDateData(),
                value: [date.getFullYear(), date.getMonth()],
            };
        }
        if (mode === Mode.DateTime || mode === Mode.Date) {
            cols = this.getDateData();
            value = [date.getFullYear(), date.getMonth(), date.getDate()];
        }
        if (mode === Mode.DateTime || mode === Mode.Time) {
            const time = this.getTimeData(date);
            cols = cols.concat(time.cols);
            const hour = date.getHours();
            const dtValue = [hour, time.minute];
            value = value.concat(dtValue);
        }
        return {
            value,
            cols,
        };
    }

    public setMonth = (date: any, month: any) => {
        date.setDate(Math.min(date.getDate(), this.getDateInMonth(new Date(date.getFullYear(), month))));
        date.setMonth(month);
    }

    public getNewDate = (values, idx) => {
        const value = parseInt(values[idx], 10);
        const { mode } = this.props;
        const newDate = this.cloneDate(this.getDate());
        if (mode === Mode.DateTime || mode === Mode.Date || mode === Mode.Year || mode === Mode.Month) {
            switch (idx) {
                case 0:
                    newDate.setFullYear(value);
                    break;
                case 1:
                    this.setMonth(newDate, value);
                    break;
                case 2:
                    newDate.setDate(value);
                    break;
                case 3:
                    newDate.setHours(value);
                    break;
                case 4:
                    newDate.setMinutes(value);
                    break;
            }
        } else {
            switch (idx) {
                case 0:
                    newDate.setHours(value);
                    break
                case 1:
                    newDate.setMinutes(value);
                    break;
            }
        }
        return this.clipDate(newDate);
    }

    public onChange = (values: any, idx: any) => {
        const {
            onDateChange,
            onValueChange,
        } = this.props;
        const date = this.getNewDate(values, idx);
        if (!('date' in this.props)) {
            this.setState({
                date,
            });
        }
        onValueChange && onValueChange(values, idx);
        onDateChange && onDateChange(date);
    };

    public onOk = (values: any[] | undefined) => {
        const { onOk } = this.props;
        if (onOk) {
            const date = {} // new (Date.bind(null, ...values));
            onOk(date, values);
        }
    };

    public render() {
        const { value, cols } = this.getValueCols();
        const {
            mode,
            date,
            onDateChange,
            onValueChange,
            defaultDate,
            minDate,
            maxDate,
            title,
            onOk,
            onDismiss,
            ...rest
        } = this.props;
        return (
            <Picker
                {...rest}
                title={title}
                onDismiss={onDismiss}
                onOk={this.onOk}
                data={cols}
                value={value}
                onChange={this.onChange}
            />
        );
    }
}
