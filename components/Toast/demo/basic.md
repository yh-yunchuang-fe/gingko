---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
mobile-render: ./toast.gif
---

```jsx
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Icon, Toast, Button, WhiteSpace, WingBlank } from 'gingko';

export default () => {
  const onChangeToast = (type: string) => {
    return Toast[type](`当前Toast类型：${type}`);
  };

  const onChangeLoading = () => {
    const id = Toast.loading(
      '我是loading toast\n并且默认永久存在,你可以将duration设置为大于0的值\n或者调用toast.hide使其消失',
      {
        style: { maxWidth: 300 },
      },
    );
    setTimeout(() => {
      Toast.hide(id);
    }, 10000);
  };

  const onChangeMask = () => {
    Toast.show('mask为true时不会响应事件,默认为false', {
      mask: true,
    });
  };

  const onChangePermanent = () => {
    const id = Toast.show('当duration为0时,toast永久显示', {
      type: 'success',
      duration: 0,
    });
    setTimeout(() => {
      Toast.hide(id);
    }, 10000);
  };

  const onChangeCustom = () => {
    Toast.show('自定义可选参数', {
      type: 'success',
      icon: null,
      duration: 4000,
      position: 'top',
      mask: false,
      style: {
        backgroundColor: 'red',
      },
      onClose() {
        console.log('onClose callback will be called when the animation ended');
      },
    });
  };

  const onChangeMore = () => {
    Toast.show('第一个toast', {
      style: {
        position: 'absolute',
        top: 100,
      },
    });
    Toast.show('第二个toast', {
      style: {
        position: 'absolute',
        bottom: 100,
      },
    });
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', height: 700, justifyContent: 'space-around' }}>
        <Button
          line
          onClick={() => {
            onChangeToast('success');
          }}
        >
          成功提示
        </Button>
        <Button
          line
          onClick={() => {
            onChangeToast('fail');
          }}
        >
          失败提示
        </Button>
        <Button
          line
          onClick={() => {
            onChangeToast('warn');
          }}
        >
          提示信息
        </Button>
        <Button
          line
          onClick={() => {
            onChangeToast('show');
          }}
        >
          默认提示
        </Button>
        <Button line onClick={onChangeLoading}>
          Loading
        </Button>
        <Button line onClick={onChangeMask}>
          Mask:true
        </Button>
        <Button
          line
          onClick={() => {
            Toast.show(
              <>
                <Text style={{ color: 'blue' }}>toast内容可以是一个组件</Text>
                <Text style={{ color: 'white' }}>其实应该说是ReactElement</Text>
              </>,
            );
          }}
        >
          自定义内容组件
        </Button>
        <Button
          line
          onClick={() => {
            Toast.show('icon可以是一个functional组件,或者ReactElement', {
              icon: <Icon name="eye-off" color="red" />,
            });
          }}
        >
          自定义Icon
        </Button>
        <Button line onClick={onChangePermanent}>
          永久显示Toast
        </Button>
        <Button line onClick={onChangeCustom}>
          自定义可选参数
        </Button>
        <Button line onClick={onChangeMore}>
          可以同时显示多个toast
        </Button>
        <Text style={{ textAlign: 'left' }}>
          {`1.Toast.show()会返回一个id,你可以通过调用Toast.hide(id),来提前隐藏这个toast\n\n2.Toast.hide(),会接受一个number类型的id,当id类型不为number时,会隐藏所有的toast\n\n3.Toast中有两个常量LONG = 3500和SHORT = 2000`}
        </Text>
      </View>
    </ScrollView>
  );
};
```
