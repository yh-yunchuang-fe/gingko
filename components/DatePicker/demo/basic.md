---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
mobile-render: ./datepicker.gif
---

```jsx
import React from 'react';
import { Text } from 'react-native';
import { Button, DatePicker, WhiteSpace, WingBlank } from 'gingko';

export default () => {
  const [state, setState] = React.useState({
    visible: false,
    visible2: false,
    visible3: false,
    visible4: false,
    visible5: false,
    visible6: false,
    date: null,
  });

  const onDismiss = () => {
    setState({
      ...state,
      visible: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      visible6: false,
    });
  };

  const onOk = (date: any, values: any) => {
    console.log('ok_date', date);
    console.log('ok_values', values);
    onDismiss();
  };

  const onDateChange = (date: any) => {
    console.log('date:', date);
    setState({
      ...state,
      date,
    });
  };

  const onValueChange = (values: any, idx: any) => {
    console.log('changed values:', values);
    console.log('changed value:', values[idx]);
  };

  const format = (date: any) => {
    if (date instanceof Date) {
      const year = date.getFullYear() + '年';
      const month = date.getMonth() + 1 + '月';
      const day = date.getDate() + '日';
      const hour = date.getHours() + '时';
      const minutes = date.getMinutes() + '分';
      return [year, month, day, hour, minutes].join(' ');
    }
    return null;
  };

  return (
    <WingBlank>
      <WhiteSpace />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
        }}
      >
        {format(state.date)}
      </Text>
      <WhiteSpace />
      <Button
        line
        onClick={() => {
          setState({
            ...state,
            visible: true,
          });
        }}
      >
        Date
      </Button>
      <WhiteSpace />
      <Button
        line
        onClick={() => {
          setState({
            ...state,
            visible2: true,
          });
        }}
      >
        Datetime
      </Button>
      <WhiteSpace />
      <Button
        line
        onClick={() => {
          setState({
            ...state,
            visible3: true,
          });
        }}
      >
        Time
      </Button>
      <WhiteSpace />
      <Button
        line
        onClick={() => {
          setState({
            ...state,
            visible4: true,
          });
        }}
      >
        Year
      </Button>
      <WhiteSpace />
      <Button
        line
        onClick={() => {
          setState({
            ...state,
            visible5: true,
          });
        }}
      >
        Month
      </Button>
      <WhiteSpace />
      <Button
        line
        onClick={() => {
          setState({
            ...state,
            visible6: true,
          });
        }}
      >
        组件状态自管理
      </Button>
      <WhiteSpace />
      <DatePicker
        visible={state.visible}
        onOk={onOk}
        mode="date"
        date={state.date}
        onDateChange={onDateChange}
        onValueChange={onValueChange}
        onDismiss={onDismiss}
      />
      <DatePicker
        visible={state.visible2}
        onOk={onOk}
        mode="datetime"
        date={state.date}
        onDateChange={onDateChange}
        onValueChange={onValueChange}
        onDismiss={onDismiss}
      />
      <DatePicker
        visible={state.visible3}
        onOk={onOk}
        mode="time"
        date={state.date}
        onDateChange={onDateChange}
        onValueChange={onValueChange}
        onDismiss={onDismiss}
      />
      <DatePicker
        visible={state.visible4}
        onOk={onOk}
        mode="year"
        date={state.date}
        onDateChange={onDateChange}
        onValueChange={onValueChange}
        onDismiss={onDismiss}
      />
      <DatePicker
        visible={state.visible5}
        onOk={onOk}
        mode="month"
        date={state.date}
        onDateChange={onDateChange}
        onValueChange={onValueChange}
        onDismiss={onDismiss}
        minDate={new Date(2010, 6, 1, 0, 0)}
        maxDate={new Date(2020, 11, 1, 0, 0)}
      />
      <DatePicker
        visible={state.visible6}
        onOk={onOk}
        onDismiss={onDismiss}
        defaultDate={new Date(2030, 0, 1, 0, 0)}
      />
      <Text>
        你也可以让组件自管理状态，即不传value prop,然后通过onOK, onValueChange,
        onDateChange回调来获取改变后的值
      </Text>
    </WingBlank>
  );
};
```
