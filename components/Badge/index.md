---
category: Gingko
subtitle: 徽标
type: 数据展示
title: Badge
---

一般用于标注任务数量

## API

| 属性            | 说明                        | 类型                 | 默认值  |
| --------------- | --------------------------- | -------------------- | ------- |
| text            | 角标的内容                  | `number` \| `string` | --      |
| style           | 容器的行内样式              | Obejct               | {}      |
| dot             | 是否把角标设置为圆点        | boolean              | false   |
| image           | 角标额外的图片              | boolean              | false   |
| source          | 角标额外图片的地址          | ImageURISource       | --      |
| overflowCount   | 溢出值，比如 100，会显示 99 | number               | 99      |
| bgColor         | 容器的背景颜色              | Color                | #FF0000 |
| color           | 角标文字颜色                | Color                | #FFFFFF |
| cornerContent   | 自定义角标元素              | ReactElement         | null    |
| badgeStyle      | 角标包裹样式                | StyleObjet           | {}      |
| badgeTextStyle  | 角标内部文字样式            | StyleObjet           | {}      |
| imageBadgeStyle | --                          | StyleObjet           | {}      |
| top             | 角标垂直方向偏移            | number               | -10     |
| right           | 角标水平方向偏移            | number               | -10     |
| children        | 内容区域元素                | ReactNode            | --      |
