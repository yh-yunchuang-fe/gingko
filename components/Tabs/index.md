---
category: Gingko
subtitle: 标签页
type: 导航
title: Tabs
---

用于让用户在不同的视图中进行切换。具体使用可参考： [react-native-tab-view](https://www.npmjs.com/package/react-native-tab-view)

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tabStyle | 选项卡项的样式 | object | {} |
| tabBarStyle | 容器的样式 | object | {} |
| tabBarLabelStyle | 选项卡项标签的样式 | object | {} |
| tabBarIndicatorStyle | 活动指示器的样式 | object | {} |
| onIndexChange | 选项卡更改时调用的回调 | function | (){} |
| renderScene | 反应元素以呈现为选项卡的页面 | ReactElement | null |
| renderTabBar | 自定义 React 元素以用作标签栏 | ReactElement | null |
| renderLabel | 函数接受一个具有当前路线、焦点状态和颜色的对象，并返回一个自定义 React 元素以用作标签 | ReactElement | null |
| swipeEnabled | 是否启用滑动手势 | boolean | false |
| scrollEnabled | 指示是否使标签栏可滚动 | boolean | false |
| activeColor | 活动选项卡中图标和标签的自定义颜色 | string | #212121 |
| inactiveColor | 非活动选项卡中图标和标签的自定义颜色 | string | #212121 |
| tabIndex | 当前点击的下标 | number | 0 |
| routes | 包含用于渲染选项卡的路由对象列表 | Array[] | [{key: '', title: ''}] |
