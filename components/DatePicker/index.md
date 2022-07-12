---
category: Gingko
subtitle: 日期选择器
type: 数据录入
title: DatePicker
cover: /public/gingko_datepicker.svg
---

可配置的日期选择组件

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 控制选择器模式 | `date` \| `time` \| `datetime` \| `year` \| `month` | date |
| defaultDate | 默认值 | Date | null |
| minDate | 最小日期 | Date | 2000 |
| maxDate | 最大日期 | Date | 2050 |
| date | 初始日期，优先级>defaultDate | Date | -- |
| title | 初始日期，优先级>defaultDate | Date | -- |
| onDateChange | 日期发生变化触发的事件 | function | (value, index){} |
| onValueChange | 日期发生变化触发的事件 | function | (date){} |
| onOk | 点击确定触发的事件 | function | (){} |
| onDismiss | 点击取消触发的事件 | function | (){} |
| 其他 | 参考 Picker 组件 | -- |
