---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
mobile-render: ./empty.png
---

```jsx
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Empty } from 'gingko';

export default () => {
  return (
    <ScrollView>
      <Text>【样式1】图片+文字</Text>
      <Empty message="文字描述" source={require('../../../src/assets/imgs/empty-scheduling.png')} />
      <Text>【样式2】图片+文字+按钮</Text>
      <Empty
        source={require('../../../src/assets/imgs/empty-overtime.png')}
        title="搜索结果"
        message="文字描述"
        btn="按钮"
      />
    </ScrollView>
  );
};
```
