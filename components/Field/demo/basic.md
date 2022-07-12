---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
mobile-render: ./field.gif
---

```jsx
import { Text, ScrollView, StyleSheet } from 'react-native';
import { Field, WhiteSpace } from 'gingko';

export default () => {
  const onClick = (call = () => {}) => {
    call && call();
  };
  return (
    <ScrollView>
      <Text>输入框样式一（内容左对齐）</Text>
      <Field label={'标题文字'} value="" />
      <Field label={'标题文字'} value="输入文字左对齐" />
      <Field label={'标题文字'} value="必填项已输入的文字" />
      <Field
        label={'标题文字'}
        value="输入完成的文字超过一行末尾省略输入完成的文字超过一行末尾省略"
      />

      <Text>输入框样式二（内容右对齐）</Text>
      <Field label={'标题文字'} value="" textAlign="right" />
      <Field label={'标题文字'} value="输入文字右对齐" textAlign="right" />

      <Text>验证码</Text>
      <Field.verify label={'标题文字'} onClickVerify={onClick} />
      <Field.verify label={'标题文字'} value="601933" verifyTime={20} />

      <Text>备注或长文本</Text>
      <Field.textArea />
      <WhiteSpace />
      <Field.textArea value="我是正文超过内容滑动展示，我是正文超过内容 ,滚动展示，我是正文超过内容滚动展示，我是正 ,文超过内容滚动展示，我是正文超过内容滚动展示" />
      <WhiteSpace />
    </ScrollView>
  );
};
```
