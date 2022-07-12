---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
mobile-render: ./divider.png
---

```jsx
import { View, Text } from 'react-native';
import { Divider, WhiteSpace } from 'gingko';

export default () => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 12,
        backgroundColor: '#FFFFFF',
      }}
    >
      <Text>分割线</Text>
      <Divider />
      <WhiteSpace />
      <Divider />
      <WhiteSpace />
      <Divider />
    </View>
  );
};
```
