---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
mobile-render: ./shadow.png
---

```jsx
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Shadow, Card } from 'gingko';

const { width } = Dimensions.get('window');

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>投影（小）</Text>
      <Shadow type="small">
        <Card style={styles.shadowItem} />
      </Shadow>
      <Text style={styles.description}>投影（中）</Text>
      <Shadow>
        <Card style={styles.shadowItem} />
      </Shadow>
      <Text style={styles.description}>投影（大）</Text>
      <Shadow type="large">
        <Card style={styles.shadowItem} />
      </Shadow>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  shadowItem: {
    width: width - 76,
    height: 100,
    backgroundColor: '#FFFFFF',
    marginBottom: 30,
    flexDirection: 'row',
  },
  description: {
    fontSize: 12,
    lineHeight: 18,
    width: width - 76,
    textAlign: 'left',
    color: '#FF4E23',
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 16,
  },
});
```
