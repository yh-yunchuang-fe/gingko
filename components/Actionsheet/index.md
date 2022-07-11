---
category: Gingko
subtitle: 动作面板
type: 反馈
title: Actionsheet
---

从底部弹出的模态框，提供和当前场景相关的 2 个以上的操作动作，也支持提供标题和描述。内置固定的展示样式、不支持特别灵活的修改。

## API

| 属性              | 说明                     | 类型      | 默认值 |
| ----------------- | ------------------------ | --------- | ------ |
| visible           | 显示/隐藏                | boolean   | false  |
| animateAppear     | 是否出现动画             | boolean   | true   |
| animationDuration | 动画效果的延迟           | number    | 300    |
| maskClosable      | 蒙层是否消失             | boolean   | true   |
| onClose           | 关闭选择器的事件         | function  | (){}   |
| onChange          | 点击事件                 | function  | (){}   |
| onAnimationEnd    | 消失动画                 | function  | (){}   |
| style             | 样式                     | object    | {}     |
| numberOfLines     | 显示行数                 | nuumber   | 2      |
| options           | 支持一维和多维数组的数据 | Array     | []     |
| children          | 内容区域元素             | ReactNode | --     |
| close             | 是否显示关闭按钮         | string    | ''     |
| title             | 是否显示标题             | string    | ''     |
| subTitle          | 是否显示副标题           | string    | ''     |
