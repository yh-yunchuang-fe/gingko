---
category: Gingko
subtitle: 蒙层
type: 反馈
title: Modal
---

用作显示系统的重要信息，并请求用户进行操作反馈，eg：删除某个重要内容时，弹出 Modal 进行二次确认。

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否可见 | boolean | false |
| title | 标题 | string | -- |
| content | 内容 | string | -- |
| maskClosable | 是否可以点击蒙层关闭蒙层 | boolean | true |
| footer | 底部按钮 | Array<[FooterAction](#footeraction)\> | [] |
| transparent | 蒙层是否透明 | boolean | true |
| animationType | 动画类型 | `none` \| `fade` \| `slide-up` \| `slide-down` | fade |
| animationDuration | 蒙层动画持续时间 | number | 300 |
| style | 容器样式 | Object | {} |
| bodyStyle | 内容样式 | Object | {} |
| contentStyle | 内容样式 | Object | {} |
| children | 内容区域元素 | ReactNode | -- |
| onClose | 关闭蒙层的事件 | function | (){} |
| onAnimationEnd | 动画渲染结束 | function | (){} |

### FooterAction

| 属性    | 说明     | 类型     | 默认值 |
| ------- | -------- | -------- | ------ |
| text    | 按钮文字 | string   | ''     |
| type    | 按钮类型 | string   | ''     |
| style   | 按钮样式 | object   | {}     |
| onPress | 点击事件 | function | (){}   |
| onClose | 关闭事件 | function | (){}   |

## alert

| 属性           | 说明         | 类型                                  | 默认值 |
| -------------- | ------------ | ------------------------------------- | ------ |
| title          | 弹窗标题     | string                                | ''     |
| content        | 弹窗内容     | string                                | ''     |
| actions        | 按钮组       | Array<[FooterAction](#footeraction)\> | -      |
| onAnimationEnd | 动画渲染结束 | function                              | -      |
