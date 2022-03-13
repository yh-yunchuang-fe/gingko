"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by beilunyang on 2018/4/12
 */
const React = __importStar(require("react"));
const Picker_1 = __importDefault(require("../Picker"));
const propsType_1 = require("./propsType");
const ONE_DAY = 24 * 60 * 60 * 1000;
class DatePicker extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            date: this.props.date || this.props.defaultDate,
        };
        this.getDateInMonth = (date) => {
            return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        };
        this.cloneDate = (date) => {
            return new Date(+date);
        };
        this.clipDate = (date) => {
            const { mode, minDate, maxDate, } = this.props;
            if (mode === propsType_1.Mode.DateTime) {
                if (date < minDate) {
                    return this.cloneDate(minDate);
                }
                if (date > maxDate) {
                    return this.cloneDate(maxDate);
                }
            }
            else if (mode === propsType_1.Mode.Date) {
                if (+date + ONE_DAY <= +minDate) {
                    return this.cloneDate(minDate);
                }
                if (+date >= +maxDate + ONE_DAY) {
                    return this.cloneDate(maxDate);
                }
            }
            else {
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
        };
        this.getDate = () => {
            return this.clipDate(this.state.date || this.props.minDate);
        };
        this.getDateData = () => {
            const { mode, minDate, maxDate, } = this.props;
            const date = this.getDate();
            const year = date.getFullYear();
            const month = date.getMonth();
            const minYear = minDate.getFullYear();
            const minMonth = minDate.getMonth();
            const minDay = minDate.getDate();
            const maxYear = maxDate.getFullYear();
            const maxMonth = maxDate.getMonth();
            const maxDay = maxDate.getDate();
            const years = [];
            for (let i = minYear; i <= maxYear; i++) {
                years.push({
                    label: i + '年',
                    value: i,
                });
            }
            const yearCol = years;
            if (mode === propsType_1.Mode.Year) {
                return [yearCol];
            }
            const months = [];
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
            if (mode === propsType_1.Mode.Month) {
                return [yearCol, monthCol];
            }
            const days = [];
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
        };
        this.getTimeData = (date) => {
            let minHourNum = 0;
            let maxHourNum = 23;
            let minMinutesNum = 0;
            let maxMinutesNum = 59;
            const { mode, minDate, maxDate, } = this.props;
            const minMinutes = minDate.getMinutes();
            const maxMinutes = maxDate.getMinutes();
            const minHour = minDate.getHours();
            const maxHour = maxDate.getHours();
            const hour = date.getHours();
            if (mode === propsType_1.Mode.DateTime) {
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
            }
            else {
                minHourNum = minHour;
                if (minHour === hour) {
                    minMinutesNum = minMinutes;
                }
                maxHourNum = maxHour;
                if (maxHour === hour) {
                    maxMinutesNum = maxMinutes;
                }
            }
            const hours = [];
            for (let i = minHourNum; i <= maxHourNum; i++) {
                hours.push({
                    label: i + '时',
                    value: i,
                });
            }
            const minutes = [];
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
        };
        this.getValueCols = () => {
            const { mode } = this.props;
            const date = this.getDate();
            let cols = [];
            let value = [];
            if (mode === propsType_1.Mode.Year) {
                return {
                    cols: this.getDateData(),
                    value: [date.getFullYear()],
                };
            }
            if (mode === propsType_1.Mode.Month) {
                return {
                    cols: this.getDateData(),
                    value: [date.getFullYear(), date.getMonth()],
                };
            }
            if (mode === propsType_1.Mode.DateTime || mode === propsType_1.Mode.Date) {
                cols = this.getDateData();
                value = [date.getFullYear(), date.getMonth(), date.getDate()];
            }
            if (mode === propsType_1.Mode.DateTime || mode === propsType_1.Mode.Time) {
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
        };
        this.setMonth = (date, month) => {
            date.setDate(Math.min(date.getDate(), this.getDateInMonth(new Date(date.getFullYear(), month))));
            date.setMonth(month);
        };
        this.getNewDate = (values, idx) => {
            const value = parseInt(values[idx], 10);
            const { mode } = this.props;
            const newDate = this.cloneDate(this.getDate());
            if (mode === propsType_1.Mode.DateTime || mode === propsType_1.Mode.Date || mode === propsType_1.Mode.Year || mode === propsType_1.Mode.Month) {
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
            }
            else {
                switch (idx) {
                    case 0:
                        newDate.setHours(value);
                        break;
                    case 1:
                        newDate.setMinutes(value);
                        break;
                }
            }
            return this.clipDate(newDate);
        };
        this.onChange = (values, idx) => {
            const { onDateChange, onValueChange, } = this.props;
            const date = this.getNewDate(values, idx);
            if (!('date' in this.props)) {
                this.setState({
                    date,
                });
            }
            onValueChange && onValueChange(values, idx);
            onDateChange && onDateChange(date);
        };
        this.onOk = (values) => {
            const { onOk } = this.props;
            if (onOk) {
                const date = {}; // new (Date.bind(null, ...values));
                onOk(date, values);
            }
        };
    }
    componentWillReceiveProps(nextProps) {
        if ('date' in nextProps) {
            this.setState({
                date: nextProps.date || nextProps.defaultDate,
            });
        }
    }
    render() {
        const { value, cols } = this.getValueCols();
        const _a = this.props, { mode, date, onDateChange, onValueChange, defaultDate, minDate, maxDate, title, onOk, onDismiss } = _a, rest = __rest(_a, ["mode", "date", "onDateChange", "onValueChange", "defaultDate", "minDate", "maxDate", "title", "onOk", "onDismiss"]);
        return (<Picker_1.default {...rest} title={title} onDismiss={onDismiss} onOk={this.onOk} data={cols} value={value} onChange={this.onChange}/>);
    }
}
exports.default = DatePicker;
DatePicker.defaultProps = {
    mode: propsType_1.Mode.Date,
    minDate: new Date(2000, 0, 1, 0, 0),
    maxDate: new Date(2050, 0, 1, 23, 59),
};
//# sourceMappingURL=index.js.map