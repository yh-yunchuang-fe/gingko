/**
 * Created by beilunyang on 2018/4/16
 */
import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import {
    Toast,
    Button,
    DatePicker,
    WhiteSpace,
} from '../../../components';

export default class extends Component {
    state = {
        visible: false,
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: false,
        visible6: false,
        date: null,
    };

    onDismiss = () => {
        this.setState({
            visible: false,
            visible2: false,
            visible3: false,
            visible4: false,
            visible5: false,
            visible6: false,
        });
    }

    onOk = (date, values) => {
        console.log('ok_date', date);
        console.log('ok_values', values);
        Toast.show(`date:${date}\nvalues:${values}`, Toast.LONG);
        this.onDismiss();
    }

    onDateChange = (date) => {
        console.log('date:', date);
        this.setState({
            date,
        });
    }

    onValueChange = (values, idx) => {
        console.log('changed values:', values);
        console.log('changed value:', values[idx]);
    }

    format = (date) => {
        if (date instanceof Date) {
            const year = date.getFullYear() + '年';
            const month = date.getMonth() + 1 + '月';
            const day = date.getDate() + '日';
            const hour = date.getHours() + '时';
            const minutes = date.getMinutes() + '分';
            return [year, month, day, hour, minutes].join(' ');
        }
        return null;
    }

    render() {
        return (
            <View>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 20,
                }}>{this.format(this.state.date)}</Text>
                <WhiteSpace />
                <Button
                    onClick={() => {
                        this.setState({
                            visible: true,
                        });
                    }}
                >date</Button>
                <WhiteSpace />
                <Button
                    onClick={() => {
                        this.setState({
                            visible2: true,
                        });
                    }}
                >datetime</Button>
                <WhiteSpace />
                <Button
                    onClick={() => {
                        this.setState({
                            visible3: true,
                        });
                    }}
                >time</Button>
                <WhiteSpace />
                <Button
                    onClick={() => {
                        this.setState({
                            visible4: true,
                        });
                    }}
                >year</Button>
                <WhiteSpace />
                <Button
                    onClick={() => {
                        this.setState({
                            visible5: true,
                        });
                    }}
                >month</Button>
                <WhiteSpace />
                <Button
                    onClick={() => {
                        this.setState({
                            visible6: true,
                        });
                    }}
                >组件状态自管理</Button>
                <WhiteSpace />
                <DatePicker
                    visible={this.state.visible}
                    onOk={this.onOk}
                    mode="date"
                    date={this.state.date}
                    onDateChange={this.onDateChange}
                    onValueChange={this.onValueChange}
                    onDismiss={this.onDismiss}
                />
                <DatePicker
                    visible={this.state.visible2}
                    onOk={this.onOk}
                    mode="datetime"
                    date={this.state.date}
                    onDateChange={this.onDateChange}
                    onValueChange={this.onValueChange}
                    onDismiss={this.onDismiss}
                />
                <DatePicker
                    visible={this.state.visible3}
                    onOk={this.onOk}
                    mode="time"
                    date={this.state.date}
                    onDateChange={this.onDateChange}
                    onValueChange={this.onValueChange}
                    onDismiss={this.onDismiss}
                />
                <DatePicker
                    visible={this.state.visible4}
                    onOk={this.onOk}
                    mode="year"
                    date={this.state.date}
                    onDateChange={this.onDateChange}
                    onValueChange={this.onValueChange}
                    onDismiss={this.onDismiss}
                />
                <DatePicker
                    visible={this.state.visible5}
                    onOk={this.onOk}
                    mode="month"
                    date={this.state.date}
                    onDateChange={this.onDateChange}
                    onValueChange={this.onValueChange}
                    onDismiss={this.onDismiss}
                    minDate={new Date(2010, 6, 1, 0, 0)}
                    maxDate={new Date(2020, 11, 1, 0, 0)}
                />
                <DatePicker
                    visible={this.state.visible6}
                    onOk={this.onOk}
                    onDismiss={this.onDismiss}
                    defaultDate={new Date(2030, 0, 1, 0, 0)}
                />
                <Text>你也可以让组件自管理状态，即不传value prop,然后通过onOK, onValueChange, onDateChange回调来获取改变后的值</Text>
            </View>
        );
    }
}

