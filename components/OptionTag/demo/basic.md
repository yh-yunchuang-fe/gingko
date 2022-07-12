---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
mobile-render: ./optiontag.png
---

```jsx
import React from 'react';
import { View, Text } from 'react-native';
import { WhiteSpace, WingBlank, OptionTag } from 'gingko';

export default () => {
  const [optionsIndex, setOptionsIndex] = React.useState(0);

  const options = ['水果二配', '蔬菜二配', '安徽'];

  const optionsNode = options.map((item, index) => {
    return (
      <OptionTag
        key={index}
        selected={index === optionsIndex}
        onChange={selected => {
          if (selected) {
            setOptionsIndex(index);
          }
        }}
      >
        {item}
      </OptionTag>
    );
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', paddingVertical: 12 }}>
      <WingBlank>
        <Text>单选</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>{optionsNode}</View>

        <Text>多选</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <OptionTag multiple>多选1</OptionTag>
          <OptionTag multiple>多选2</OptionTag>
          <OptionTag multiple>多选3</OptionTag>
        </View>
        <WhiteSpace />
        <OptionTag disabled>不可点击</OptionTag>

        <Text>自定义Text内容</Text>
        <View>
          <OptionTag
            style={{ marginTop: 10 }}
            width={315}
            renderText={selected => {
              return (
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{
                      width: 58,
                      marginRight: 15,
                      textAlign: 'right',
                      color: selected ? '#FE8F1D' : '#666666',
                    }}
                  >
                    我是
                  </Text>
                  <Text style={{ color: selected ? '#FE8F1D' : '#666666' }}>从多到少</Text>
                </View>
              );
            }}
          />
          <OptionTag
            style={{ marginTop: 10 }}
            width={315}
            renderText={selected => {
              return (
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{
                      width: 58,
                      marginRight: 15,
                      textAlign: 'right',
                      color: selected ? '#FE8F1D' : '#666666',
                    }}
                  >
                    建议补货
                  </Text>
                  <Text style={{ color: selected ? '#FE8F1D' : '#666666' }}>从多到少</Text>
                </View>
              );
            }}
          />
        </View>
      </WingBlank>
    </View>
  );
};
```
