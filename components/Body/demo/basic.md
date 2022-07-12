---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
mobile-render: ./body.png
---

```jsx
import React from 'react';
import { Text } from 'react-native';
import { Body, WhiteSpace } from 'gingko';

export default () => {
  return (
    <Body>
      <Text>Body</Text>

      <Body style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        <Body bgColor="skyblue">
          <Text>Body</Text>
        </Body>
        <Body bgColor="yellow">
          <Text>Body</Text>
        </Body>
      </Body>
      <WhiteSpace />
      <Body bgColor="rgba(254, 143, 29, 0.5)">
        <Text>Body</Text>
        <Body style={{ margin: 20 }}>
          <Text>Body</Text>
        </Body>
      </Body>
    </Body>
  );
};
```
