---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
mobile-render: ./searchbar.png
---

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WhiteSpace, SearchBar } from 'gingko';

export default () => {
  const [val, setVal] = React.useState('');

  return (
    <View style={{ backgroundColor: '#f8f8f8' }}>
      <Text>搜索页-跳转页</Text>
      <SearchBar
        onSubmit={value => {
          console.log('onSubmit value:', value);
        }}
        onChange={value => {
          setVal(value);
        }}
        value={val}
        onFocus={() => {
          console.log('onFocus');
        }}
        onBlur={() => {
          console.log('onBlur');
        }}
        onCancel={() => {
          console.log('onCancel');
        }}
        onClear={() => {
          console.log('onClear');
        }}
      />
      <WhiteSpace />
      <SearchBar
        cancelText="取消"
        autoFocus={true}
        onSubmit={value => {
          console.log('onSubmit value:', value);
        }}
        onChange={value => {
          console.log('onChange value:', value);
        }}
        onFocus={() => {
          console.log('onFocus');
        }}
        onBlur={() => {
          console.log('onBlur');
        }}
        onCancel={() => {
          console.log('onCancel');
        }}
        onClear={() => {
          console.log('onClear');
        }}
      />
      <WhiteSpace />
      <SearchBar cancelText="取消" defaultValue={'带皮五花肉'} />
      <Text>搜索页-当前页搜索</Text>
      <SearchBar searchText="搜索" />
      <WhiteSpace />
      <SearchBar searchText="搜索" value={'带皮五花肉'} placeholder="placeholder" />
    </View>
  );
};
```
