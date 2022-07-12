---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
mobile-render: ./dialog.gif
---

```jsx
import React from 'react';
import { View, Text } from 'react-native';
import { Dialog, Button, WingBlank, WhiteSpace } from 'gingko';

export default () => {
  const [state, setState] = React.useState({
    visible: false,
    animationType: '',
  });

  const openDialog = (type: string) => {
    setState({
      visible: true,
      animationType: type,
    });
  };

  return (
    <View>
      <WhiteSpace />
      <WingBlank>
        <Button
          line
          onClick={() => {
            openDialog('none');
          }}
        >
          open Dialog
        </Button>
        <WhiteSpace />
        <Button
          line
          onClick={() => {
            openDialog('fade');
          }}
        >
          open fade Dialog
        </Button>
        <WhiteSpace />
        <Button
          line
          onClick={() => {
            openDialog('slide-up');
          }}
        >
          open slide-up Dialog
        </Button>
        <WhiteSpace />
        <Button
          line
          onClick={() => {
            openDialog('slide-down');
          }}
        >
          open slide-up Dialog
        </Button>
      </WingBlank>

      <Dialog
        visible={state.visible}
        animationType={state.animationType}
        wrapStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        maskCloseable={true}
        onClose={() => {
          setState({ ...state, visible: false });
        }}
      >
        <View
          style={{
            width: 200,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: 8,
            elevation: 10,
          }}
        >
          <Text>内容宽高圆角自定义</Text>
        </View>
      </Dialog>
    </View>
  );
};
```
