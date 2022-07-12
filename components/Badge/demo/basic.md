---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
mobile-render: ./badge.png
---

简单的徽章展示，当 `count` 为 `0` 时，默认不显示.

```jsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Badge, WhiteSpace } from 'gingko';

export default () => {
  return (
    <View style={styles.badgeContainer}>
      <WhiteSpace />
      <View style={styles.badgeItem}>
        <Text>徽标红点</Text>
        <Badge dot />
      </View>
      <View style={styles.badgeItem}>
        <Text>徽标1位数</Text>
        <Badge text={1} />
      </View>
      <View style={styles.badgeItem}>
        <Text>徽标3位数</Text>
        <Badge text={200} />
      </View>
      <View style={styles.badgeItem}>
        <Text>徽标2位数</Text>
        <Badge text={33} />
      </View>
      <View style={styles.badgeItem}>
        <Text>徽标2位数</Text>
        <Badge text={33} overflowCount={10} />
      </View>
      <View style={styles.badgeItem}>
        <Text>自定义徽标</Text>
        <Badge
          cornerContent={
            <View style={styles.custom}>
              <Text style={{ color: '#FFFFFF', fontSize: 10 }}>促</Text>
            </View>
          }
        >
          <View style={{ ...styles.box, borderRadius: 2 }} />
        </Badge>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    height: 300,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  badgeItem: {
    width: 132,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: '#999999',
  },
  custom: {
    width: 15,
    height: 15,
    backgroundColor: 'red',
    borderTopLeftRadius: 2,
    borderBottomRightRadius: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```
