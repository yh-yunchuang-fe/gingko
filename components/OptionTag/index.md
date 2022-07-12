---
category: Gingko
subtitle: 选项标签
type: 数据录入
title: OptionTag
---

用于多个项目的选择和展示

## API

| 属性       | 说明                   | 类型      | 默认值           |
| ---------- | ---------------------- | --------- | ---------------- |
| width      | 选项标签宽度           | number    | --               |
| height     | 选项标签高度           | number    | --               |
| style      | 选项标签自定义样式     | Object    | null             |
| textStyle  | 选项标签文本自定义样式 | Object    | null             |
| disabled   | 是否不可点击           | boolean   | false            |
| multiple   | 是否多选               | boolean   | false            |
| selected   | 是否选中               | boolean   | false            |
| onChange   | 选项变化回调函数       | function  | (selected) => {} |
| renderText | 自定义显示文本         | function  | (selected) => {} |
| children   | 内容区域元素           | ReactNode | --               |
