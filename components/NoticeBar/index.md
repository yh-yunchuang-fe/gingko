---
category: Gingko
subtitle: 通知栏
type: 数据展示
title: NoticeBar
---

## API

| 属性     | 说明                                  | 类型      | 默认值       |
| -------- | ------------------------------------- | --------- | ------------ | --- |
| style    | 样式                                  | object    | {}           |
| color    | 字体颜色                              | string    | #B97400      |
| mode     | 模式( `''` \| `link` \| `closeable` ) | string    |              |
| icon     | 通知栏图标                            | string    | --           |
| bgColor  | 通知栏背景颜色                        | string    | #FFEFD4      |
| action   | 通知栏右侧显示内容                    | string    | ReactElement |     |
| onClick  | 点击事件                              | function  | (){}         |
| children | 内容区域元素                          | ReactNode | --           |
