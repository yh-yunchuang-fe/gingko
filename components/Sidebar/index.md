---
category: Gingko
subtitle: 侧边导航
type: 导航
title: SideBar
---

用于让用户在不同的视图中进行切换。

## API

### SideBar

| 属性                     | 说明               | 类型   | 默认值    |
| ------------------------ | ------------------ | ------ | --------- |
| tabBarPosition           | tabs 的默认位置    | string | left      |
| initialPage              | 默认显示第几个 tab | number | 0         |
| tabs                     | 渲染 tabs 的数据   | array  | []        |
| style                    | 样式               | object | {}        |
| onTabClick               | tab 点击事件       | object | {}        |
| sidebarFillColor         | 默认背景色         | string | '#F5F5F5' |
| sidebarActionFillColor   | 选中背景色色       | string | '#FFFFFF' |
| sidebarActiveTextColor   | 选中文字颜色       | string | '#FE8F1D' |
| sidebarInactiveTextColor | 默认字体颜色       | string | '#212121' |
| sidebarPosition          | 当前 tab 显示位置  | object | {}        |
| sidebarTextStyle         | 文本样式           | object | {}        |
| sidebarTabStyle          | 容器样式           | object | {}        |

### SideBar. DefaultSideBar

| 属性                     | 说明             | 类型   | 默认值    |
| ------------------------ | ---------------- | ------ | --------- |
| tabs                     | 渲染 tabs 的数据 | array  | []        |
| activeTab                | 当前选中的 tab   | number | 0         |
| sidebarBackgroundColor   | 背景色           | string | '#F5F5F5' |
| sidebarActiveTextColor   | 选中字体颜色     | string | ''        |
| sidebarInactiveTextColor | 未选中字体颜色   | string | ''        |
| sidebarTextStyle         | 文本样式         | object | {}        |
