---
category: Gingko
subtitle: 选择器
type: 数据录入
title: Picker
---

一般用于地址、日期等选项的选择

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 选择器数据源 | Array<{label?: `string` \| `number` , value: `string` \| `number` }> | [] |
| value | 选中的值 | `number`\|`string[]` | back |
| defaultValue | 默认值 | `number`\|`string[]` | null |
| dismissText | 取消文本 | string | 取消 |
| okText | 确定文本 | string | 确定 |
| title | 选择器标题 | string |  |
| children | 内容区域元素 | ReactNode | -- |
| style | 自定义选择器样式 | Object | {} |
| visible | 是否显示选择器 | boolean | false |
| selectedValue | 选中的值 | string |  |
| itemStyle | 自定义选择项样式 | Object | {} |
| columnStyle | 自定义选择器列样式 | Object | {} |
| onChange | 选择项改变回调函数 | function | (values?: any, idx?: number) => {} |
| onDismiss | 取消事件回调函数 | function | (value?: any) => {} |
| onOk | 确定时间回调函数 | function | (value?: any) => {} |
