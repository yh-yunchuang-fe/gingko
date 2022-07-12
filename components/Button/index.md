---
category: Gingko
subtitle: 按钮
type: 数据录入
title: Button
cover: /public/gingko_button.svg
---

用户可操作的页面元素之一

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 尺寸 | `md` \| `lg` \| `sm` | md |
| type | 类型 | `default` \| `link` \| `second` \| `disable` | default |
| solid | 按钮有无填充 | boolean | true |
| line | 按钮有无边框线 | boolean | false |
| link | 按钮类型 | boolean | false |
| style | 容器样式 | Obejct | {} |
| textStyle | 按钮文字样式 | React. CSSProperties | {} |
| loading | 按钮文字左侧的 loading | boolean | false |
| activeStyle | 按钮激活状态下的样式 | Obejct | {} |
| icon | 按钮的图标 | `string`\|`IconProps` | {} |
| onClick | 点击事件 | function | (){} |
| onShowUnderlay | 当底层的颜色被显示的时候调用 | function | (){} |
| onHideUnderlay | 当底层的颜色被隐藏的时候调用 | function | (){} |
