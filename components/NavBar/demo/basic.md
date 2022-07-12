---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
mobile-render: ./navbar.png
---

```jsx
import React from 'react';
import { View } from 'react-native';
import { WhiteSpace, NavBar } from 'gingko';

export default () => {
  return (
    <View>
      <WhiteSpace />
      <NavBar>导航栏</NavBar>
    </View>
  );
};
```
