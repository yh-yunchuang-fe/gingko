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
    static defaultProps = {
        mode: Mode.Date,
        minDate: new Date(2000, 0, 1, 0, 0),
        maxDate: new Date(2050, 0, 1, 23, 59),
    };

    state = {
        date: this.props.date || this.props.defaultDate,
    };

    componentWillReceiveProps(nextProps) {
        if ('date' in nextProps) {
            this.setState({
                date: nextProps.date || nextProps.defaultDate,
            });
        }
    }

    getDateInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    }

    cloneDate = (date: Date) => {
        return new Date(+date);
    }

    clipDate = (date: Date) => {
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

    getDate = () => {
        return this.clipDate(this.state.date || this.props.minDate);
    }

    getDateData = () => {
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
        let min_month = 0;
        let max_month = 11;
        if (minYear === year) {
            min_month = minMonth;
        }
        if (maxYear === year) {
            max_month = maxMonth;
        }
        for (let i = min_month; i <= max_month; i++) {
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
        let min_day = 1;
        let max_day = this.getDateInMonth(date);
        if (minYear === year && minMonth === month) {
            min_day = minDay;
        }
        if (maxYear === year && maxMonth === month) {
            max_day = maxDay;
        }
        for (let i = min_day; i <= max_day; i++) {
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

    getTimeData = (date: any) => {
        let min_hour = 0;
        let max_hour = 23;
        let min_minutes = 0;
        let max_minutes = 59;
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
                min_hour = minHour;
                if (minHour === hour) {
                    min_minutes = minMinutes;
                }
            }
            if (year === maxYear && month === maxMonth && day === maxDay) {
                max_hour = maxHour;
                if (maxHour === hour) {
                    max_minutes = maxMinutes;
                }
            }
        } else {
           min_hour = minHour;
           if (minHour === hour) {
               min_minutes = minMinutes;
           }
           max_hour = maxHour;
           if (maxHour === hour) {
               max_minutes = maxMinutes;
           }
        }
        const hours: any = [];
        for (let i = min_hour; i <= max_hour; i++) {
            hours.push({
                label: i + '时',
                value: i,
            });
        }
        const minutes: any = [];
        const minute = date.getMinutes();
        for (let i = min_minutes; i <= max_minutes; i++) {
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

    getValueCols = () => {
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

    setMonth = (date: any, month: any) => {
        date.setDate(Math.min(date.getDate(), this.getDateInMonth(new Date(date.getFullYear(), month))));
        date.setMonth(month);
    }

    getNewDate = (values, idx) => {
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

    onChange = (values: any, idx: any) => {
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

    onOk = (values: any[] | undefined) => {
        const { onOk } = this.props;
        if (onOk) {
            const date = {} // new (Date.bind(null, ...values));
            onOk(date, values);
        }
    };

    render() {
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
