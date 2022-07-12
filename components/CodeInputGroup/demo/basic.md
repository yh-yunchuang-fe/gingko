---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
mobile-render: ./codeinputgroup.gif
---

```jsx
import React from 'react';
import { Text } from 'react-native';
import { WhiteSpace, WingBlank, CodeInputGroup } from 'gingko';

export default () => {
  const [value, setValue] = React.useState('');

  return (
    <WingBlank>
      <WhiteSpace />
      <CodeInputGroup
        onChange={val => {
          setValue(val);
        }}
      />
      <WhiteSpace />
      <Text>{value}</Text>
    </WingBlank>
  );
};
```
