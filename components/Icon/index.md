---
category: Gingko
subtitle: 图标
type: 数据展示
title: Icon
---

图标的显示

- 打开 iOS 项目 `info.plist` 文件，添加 `Fonts provided by application`，指定一个 item 的值为 `anticon.ttf`， 将 `anticon.ttf` 拖进项目；
- Android 项目将 `anticon.ttf` 放在 `android/app/src/main/assets/fonts/` 目录下;

## API

| 属性  | 说明                   | 类型   | 默认值  |
| ----- | ---------------------- | ------ | ------- |
| name  | 特定的 icon 的样式名称 | string | --      |
| style | 传入的样式             | {}     | --      |
| size  | 字体的大小             | number | 16      |
| color | 字体颜色               | string | #333333 |
