---
category: Gingko
subtitle: 宫格
type: 数据展示
title: Grid
---

一般用于首页展示模块

## API

| 属性       | 说明                 | 类型      | 默认值   |
| ---------- | -------------------- | --------- | -------- |
| hasLine    | 是否显示表格边框     | boolean   | true     |
| noWrap     | 是否显示表格上下边框 | boolean   | false    |
| blankWidth | 容器的那边距         | number    | 0        |
| columnNum  | 列的数量             | number    | 3        |
| data       | 宫格数据数组         | array     | []       |
| itemStyle  | 每个宫格的样式       | object    | {}       |
| onClick    | 宫格的点击事件       | funtion   | () => {} |
| renderItem | 每个宫格的自定义编写 | reactNode | 内部样式 |
