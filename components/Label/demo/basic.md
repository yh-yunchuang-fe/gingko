---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
mobile-render: ./label.png
---

```jsx
import React from 'react';
import { View, Text } from 'react-native';
import { Tag, Label, Button, Divider, WhiteSpace } from 'gingko';

export default () => {
  const renderValue = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 10,
        }}
      >
        <Tag color="orange" font size="sm">
          工作中
        </Tag>
        <Button line size="sm">
          设为休息
        </Button>
      </View>
    );
  };

  return (
    <View>
      <Text>只读只可预览不可编辑</Text>
      <Label label="标题文字" value="只读文字" />
      <WhiteSpace />

      <Label label="标题文字" value="只读样式只可预览不可编辑，只读样式只可预览不可编辑。" />
      <Divider />
      <Label label="标题文字" value="只读样式只可预览不可编辑。" />

      <Text>自定义样式</Text>
      <Label label="标题文字" value={renderValue()} />
    </View>
  );
};
```
