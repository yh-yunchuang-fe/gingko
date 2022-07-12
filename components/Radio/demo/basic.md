---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
mobile-render: ./radio.png
---

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Radio, WhiteSpace, RadioGroup } from 'gingko';

const CheckIcon = ({ checked }) => {
  const name = checked ? 'eye' : 'eye-off';
  return <Icon name={name} color="red" style={{ marginRight: 8 }} />;
};

export default () => {
  const [state, setState] = React.useState({
    checkedStyle: {},
    baiduStyle: {},
    singleValue: '',
    value: 1,
  });

  const onChangeRadio = (value: any) => {
    setState({
      ...state,
      value,
    });
  };

  const onChangeChildrenRadio = (data: any) => {
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
    <View style={style.radioContainer}>
      <Text style={{ fontSize: 22 }}>Radio</Text>
      <WhiteSpace />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Radio defaultChecked={true}>单选已选</Radio>
          <WhiteSpace />
          <Radio>单选未选</Radio>
          <WhiteSpace />
          <Radio disabled={true}>单选未选禁用</Radio>
          <WhiteSpace />
          <Radio disabled={true} defaultChecked={true}>
            单选已选禁用
          </Radio>
        </View>
        <View>
          <Radio
            checked={state.value === 1}
            onChange={() => {
              onChangeRadio(1);
            }}
          >
            选项一
          </Radio>
          <WhiteSpace />
          <Radio
            checked={state.value === 2}
            onChange={() => {
              onChangeRadio(2);
            }}
          >
            选项二
          </Radio>
          <WhiteSpace />
          <Radio
            checked={state.value === 3}
            onChange={() => {
              onChangeRadio(3);
            }}
          >
            选项三
          </Radio>
        </View>
      </View>
      <WhiteSpace />
      <WhiteSpace />

      <Radio disabled={true} defaultChecked={true} icon={CheckIcon} textStyle={{ color: 'red' }}>
        自定义禁用按钮
      </Radio>
      <WhiteSpace />
      <Radio style={{ ...style.radioWrap, ...state.checkedStyle }} onChange={onChangeChildrenRadio}>
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
      </Radio>
      <WhiteSpace />
      <Radio
        defaultChecked={true}
        dir="right"
        icon={({ checked }) => {
          return checked && <Icon name="icon-checkmark" color={'#FE8F1D'} size={20} />;
        }}
        style={{
          backgroundColor: '#F0F0F0',
          padding: 10,
        }}
      >
        <Text>custom icon and change the default icon's direction</Text>
      </Radio>
      <WhiteSpace />
      <WhiteSpace />

      <Text style={{ fontSize: 22 }}>RadioGroup</Text>
      <WhiteSpace />
      <RadioGroup mode="button" options={['飞行中', '已落地', '已落地', '已落地']} />
      <WhiteSpace />
      <WhiteSpace />
      <RadioGroup mode="button" options={['飞行中(12)', '已落地(0)']} />
      <WhiteSpace />
      <WhiteSpace />
      <RadioGroup mode="button" options={['飞行中(12)', '已落地']} />
    </View>
  );
};

const style = StyleSheet.create({
  radioContainer: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF',
  },
  radioWrap: {
    backgroundColor: '#F0F0F0',
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
});
```
