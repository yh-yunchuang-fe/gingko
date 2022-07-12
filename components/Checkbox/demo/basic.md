---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
mobile-render: ./checkbox.gif
---

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox, WhiteSpace } from 'gingko';

export default () => {
  const [state, setState] = React.useState({
    checkedStyle: {},
    baiduStyle: {},
    singleValue: '',
    value: 1,
  });

  const onChangeIconCheckbox = (data: any) => {
    setState({
      ...state,
      baiduStyle: data
        ? {
            color: '#FE8F1D',
          }
        : {},
    });
  };
  const onChangeChildrenCheckbox = (data: any) => {
    setState({
      ...state,
      checkedStyle: data
        ? {
            backgroundColor: 'rgba(254, 143, 29, 0.2)',
          }
        : {},
    });
  };

  return (
    <View style={style.checkboxContainer}>
      <Checkbox defaultChecked={true}>多选已选</Checkbox>
      <WhiteSpace />
      <Checkbox>多选未选</Checkbox>
      <WhiteSpace />
      <Checkbox disabled={true}>多选未选禁用</Checkbox>
      <WhiteSpace />
      <Checkbox disabled={true} defaultChecked={true}>
        多选已选禁用
      </Checkbox>
      <WhiteSpace />
      <WhiteSpace />

      <Checkbox
        style={{ ...style.checkboxWrap, ...state.checkedStyle }}
        onChange={onChangeChildrenCheckbox}
      >
        <View>
          <Text style={{ marginBottom: 10 }}>李荣斌</Text>
          <View
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}
          >
            <Text>待提单: 10</Text>
            <Text>配送中: 20</Text>
            <Text>详情</Text>
          </View>
        </View>
      </Checkbox>
      <WhiteSpace />
      <Checkbox icon={false} onChange={onChangeIconCheckbox}>
        <Text
          style={{
            backgroundColor: '#FFFFFF',
            paddingVertical: 15,
            ...state.baiduStyle,
          }}
        >
          no icon, just a checkable component
        </Text>
      </Checkbox>
      <WhiteSpace />
    </View>
  );
};

const style = StyleSheet.create({
  checkboxContainer: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF',
  },
  checkboxWrap: {
    backgroundColor: '#F0F0F0',
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
});
```
