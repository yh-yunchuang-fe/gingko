---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
mobile-render: ./actionsheet.gif
---

向用户反馈操作结果。

```jsx
import React from 'react';
import { View, Text } from 'react-native';
import { Actionsheet, Button, WingBlank, WhiteSpace } from 'gingko';

export default () => {
  const [visibleBasic, setVisibleBasic] = React.useState(false);
  const [visibleOptions, setVisibleOptions] = React.useState(false);

  const onChange = (item: any, idx: any) => {
    console.log('onChange', item, idx);
    setVisibleOptions(false);
  };

  return (
    <WingBlank>
      <WhiteSpace />
      <Button
        onClick={() => {
          setVisibleBasic(true);
        }}
      >
        basic
      </Button>
      <WhiteSpace />

      <Actionsheet
        visible={visibleBasic}
        onClose={() => {
          setVisibleBasic(false);
        }}
      >
        <View
          style={{
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Actionsheet</Text>
        </View>
      </Actionsheet>

      <Button
        onClick={() => {
          setVisibleOptions(true);
        }}
      >
        options
      </Button>

      <Actionsheet
        visible={visibleOptions}
        close="取消"
        onClose={() => {
          setVisibleOptions(false);
        }}
        onChange={onChange}
        options={['选项一', '选项二', '选项三', '选项四']}
        title="主标题"
        subTitle="这是提供二行注释, 通过信息澄清的方式，这是提供一行或二行注释"
      />
    </WingBlank>
  );
};
```
