---
category: Gingko
subtitle: 弹窗
type: 反馈
title: Popup
---

用作显示系统的重要信息，弹出二次确认

## API

| 属性              | 说明               | 类型     | 默认值 |
| ----------------- | ------------------ | -------- | ------ |
| visible           | 是否显示           | boolean  | false  |
| animateAppear     | 动画显示           | boolean  | true   |
| animationDuration | 动画时长           | number   | 300    |
| maskClosable      | 背景是否可点击关闭 | boolean  | true   |
| onClose           | 关闭               | function | (){}   |
| onAnimationEnd    | 消失动画           | function | (){}   |
| style             | 样式               | object   | {}     |
