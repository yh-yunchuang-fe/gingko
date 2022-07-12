---
category: Gingko
subtitle: 轻提示
type: 反馈
title: Toast
---

一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。

## API

| 属性         | 说明                       | 类型     | 默认值 |
| ------------ | -------------------------- | -------- | ------ |
| duration     | 显示时间                   | number   | 2000   |
| animationEnd | 消失的动画效果             | function | (){}   |
| onClose      | 关闭                       | function | (){}   |
| position     | toast 显示位置 top, bottom | string   | center |
| mask         | toast 显示                 | boolean  | false  |
| type         | toast 类型                 | object   | {}     |
