---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
mobile-render: ./noticebar.png
---

```jsx
import React from 'react';
import { View, Text } from 'react-native';
import { WhiteSpace, NoticeBar } from 'gingko';

export default (props: any) => {
  return (
    <View>
      <NoticeBar>NoticeBar通告栏，这是一个单行的NoticeBar通告栏。</NoticeBar>
      <WhiteSpace />
      <NoticeBar icon="bell">这是一个单行的NoticeBar通告栏。</NoticeBar>
      <WhiteSpace />
      <NoticeBar
        mode="closeable"
        onClick={() => {
          console.log('close');
        }}
      >
        这是一个单行的NoticeBar通告栏。
      </NoticeBar>
      <WhiteSpace />
      <NoticeBar
        mode="link"
        onClick={() => {
          props.navigation.goBack();
        }}
      >
        这是一个单行的NoticeBar通告栏。
      </NoticeBar>
      <WhiteSpace />
      <NoticeBar
        mode="link"
        color="#FD7622"
        action={<Text style={{ fontSize: 14, color: '#333333' }}>去设置</Text>}
        onClick={() => {
          props.navigation.goBack();
        }}
      >
        这是一个单行的NoticeBar通告栏。
      </NoticeBar>
      <WhiteSpace />

      <NoticeBar icon="bell">
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#333333', marginBottom: 8 }}>
            自定义内容自定义内容自定义内容
          </Text>
          <Text style={{ fontSize: 14, color: '#666666', marginBottom: 8 }}>
            自定义内容自定义内容自定义内容
          </Text>
          <Text style={{ fontSize: 14, color: '#666666' }}>自定义内容自定义内容自定义内容</Text>
        </View>
      </NoticeBar>
    </View>
  );
};
```
