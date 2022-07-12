---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
mobile-render: ./button.gif
---

```jsx
import React from 'react';
import { View, Text, Alert, StyleSheet, ScrollView } from 'react-native';
import { Button, WhiteSpace, WingBlank } from 'gingko';

export default () => {
  return (
    <ScrollView style={{ paddingHorizontal: 12, paddingVertical: 12 }}>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Button size={'lg'}>面性强调</Button>
          <WhiteSpace />
          <Button>面性强调</Button>
          <WhiteSpace />
          <Button size={'sm'}>面性强调</Button>
        </View>
        <WingBlank />
        <View>
          <Button size={'lg'} line>
            线性强调
          </Button>
          <WhiteSpace />
          <Button line>线性强调</Button>
          <WhiteSpace />
          <Button size={'sm'} line>
            线性强调
          </Button>
        </View>
      </View>
      <WhiteSpace />

      <View style={{ flexDirection: 'row' }}>
        <View>
          <Button type={'second'} size={'lg'}>
            面性次要
          </Button>
          <WhiteSpace />
          <Button type={'second'}>面性次要</Button>
          <WhiteSpace />
          <Button type={'second'} size={'sm'}>
            面性次要
          </Button>
        </View>
        <WingBlank />
        <View>
          <Button type={'second'} size={'lg'} line>
            线性次要
          </Button>
          <WhiteSpace />
          <Button type={'second'} line>
            线性次要
          </Button>
          <WhiteSpace />
          <Button type={'second'} size={'sm'} line>
            线性次要
          </Button>
        </View>
      </View>
      <WhiteSpace />

      <View style={{ flexDirection: 'row' }}>
        <View>
          <Button type={'disable'} size={'lg'}>
            面性禁用
          </Button>
          <WhiteSpace />
          <Button type={'disable'}>面性禁用</Button>
          <WhiteSpace />
          <Button type={'disable'} size={'sm'}>
            面性禁用
          </Button>
        </View>
        <WingBlank />
        <View>
          <Button type={'disable'} size={'lg'} line>
            线性禁用
          </Button>
          <WhiteSpace />
          <Button type={'disable'} line>
            线性禁用
          </Button>
          <WhiteSpace />
          <Button type={'disable'} size={'sm'} line>
            线性禁用
          </Button>
        </View>
      </View>
      <WhiteSpace />

      <View>
        <View style={styles.btnRow}>
          <Button link size={'lg'}>
            文字强调
          </Button>
          <WhiteSpace />
          <Button link>文字强调</Button>
          <WhiteSpace />
          <Button link size={'sm'}>
            文字强调
          </Button>
        </View>
        <WingBlank />
        <View style={styles.btnRow}>
          <Button link type={'second'} size={'lg'}>
            文字次要
          </Button>
          <WhiteSpace />
          <Button link type={'second'}>
            文字次要
          </Button>
          <WhiteSpace />
          <Button link type={'second'} size={'sm'}>
            文字次要
          </Button>
        </View>
        <WingBlank />
        <View style={styles.btnRow}>
          <Button link type={'disable'} size={'lg'}>
            文字禁用
          </Button>
          <WhiteSpace />
          <Button link type={'disable'}>
            文字禁用
          </Button>
          <WhiteSpace />
          <Button link type={'disable'} size={'sm'}>
            文字禁用
          </Button>
        </View>
      </View>
      <WhiteSpace />

      <Button
        icon="icon-footerScan"
        type="second"
        onClick={() => {
          Alert.alert('button');
        }}
      >
        default button
      </Button>
      <WhiteSpace />
      <Button
        line
        icon={{
          name: 'search',
          color: '#FE8F1D',
          size: 'lg',
        }}
      >
        primary button
      </Button>
      <WhiteSpace />
      <Button loading textStyle={{ fontSize: 12, color: 'red' }}>
        loading button
      </Button>
      <WhiteSpace />
      <Button>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Text style={{ color: '#FFFFFF', marginBottom: 5, fontSize: 18 }}>早班考勤</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 12 }}>请在7：45前考勤</Text>
        </View>
      </Button>
      <WhiteSpace />
      <View style={styles.btnRow}>
        <Button size={'sm'}>默认宽度</Button>
        <Button>默认宽度</Button>
        <Button size={'lg'}>默认宽度</Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  btnRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
```
