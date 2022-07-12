---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
mobile-render: ./switch.png
---

```jsx
import React from 'react';
import { View, Text } from 'react-native';
import { Switch, WhiteSpace, WingBlank } from 'gingko';

export default () => {
  const [toggleOn, setToggleOn] = React.useState(true);
  const [toggleOff, setToggleOff] = React.useState(false);

  return (
    <WingBlank>
      <WhiteSpace style={{ marginTop: 74 }} />
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Switch value={toggleOn} onValueChange={switchValue => setToggleOn(switchValue)} />
        <Text> 开关组件-开 </Text>
      </View>

      <WhiteSpace style={{ marginTop: 20 }} />
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Switch value={toggleOff} onValueChange={switchValue => setToggleOff(switchValue)} />
        <Text> 开关组件-关 </Text>
      </View>
    </WingBlank>
  );
};
```
