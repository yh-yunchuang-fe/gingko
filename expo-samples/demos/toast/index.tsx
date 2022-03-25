/**
 * Created by beilunyang on 2018/3/27
 */
import React from 'react'
import {
    Text,
    View,
    ScrollView,
} from 'react-native'
import {
    Icon,
    Toast,
    Button,
    WhiteSpace,
} from '../../../components'

export default () => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button onClick={() => {
                    Toast.success('我是success toast')
                }}>success</Button>
                <WhiteSpace />
                <Button onClick={() => {
                    Toast.fail('我是fail toast')
                }}>fail</Button>
                <WhiteSpace />
                <Button onClick={() => {
                    Toast.loading('我是loading toast\n并且默认永久存在,你可以将duration设置为大于0的值\n或者调用toast.hide使其消失')
                }}>loading</Button>
                <WhiteSpace />
                <Button onClick={() => {
                    Toast.warn('我是warn toast')
                }}>warn</Button>
                <WhiteSpace />
                <Button onClick={() => {
                    Toast.show('我是normal toast')
                }}>normal</Button>
                <WhiteSpace />
                <Button onClick={() => {
                    Toast.show(
                        <View>
                            <Text style={{ color: 'blue' }}>toast内容可以是一个组件</Text>
                            <Text style={{ color: 'white' }}>其实应该说是ReactElement</Text>
                        </View>
                    )
                }}>自定义内容组件</Button>
                <WhiteSpace />
                <Button onClick={() => {
                    Toast.show(
                        'icon可以是一个functional组件,或者ReactElement',
                        {
                            icon: <Icon name='eye-off' color='red' />
                        }
                    )
                }}>自定义Icon</Button>
                <WhiteSpace />
                <Button onClick={() => {
                    const id = Toast.show('当duration为0时,toast永久显示', {
                        type: 'success',
                        duration: 0,
                    })
                    setTimeout(() => {
                        // remove manually
                        Toast.hide(id)
                    }, 10000)
                }}>永久显示Toast</Button>
                <WhiteSpace />
                <Button onClick={() => {
                    Toast.show('第一个toast', {
                        style: {
                            position: 'absolute',
                            top: 100,
                        },
                    })
                    Toast.show('第二个toast', {
                        style: {
                            position: 'absolute',
                            bottom: 100,
                        },
                    })
                }}>
                    可以同时显示多个toast
                </Button>
                <WhiteSpace />
                <Button onClick={() => {
                    Toast.show('type|duration|position|style|onClose', {
                        type: 'success',
                        icon: null,
                        duration: 4000,
                        position: 'top',
                        mask: false,
                        style: {
                            backgroundColor: 'red',
                        },
                        onClose() {
                            console.log('onClose callback will be called when the animation ended')
                        }
                    })
                }}>
                    自定义可选参数
                </Button>
                <WhiteSpace />
                <Button onClick={() => {
                    Toast.show('mask为true时不会响应事件,默认为false', {
                        mask: true,
                    })
                }}>
                    mask toast
                </Button>
                <View style={{ padding: 20 }}>
                    <Text>
                        1.Toast.show()会返回一个id,你可以通过调用Toast.hide(id),来提前隐藏这个toast
                    </Text>
                    <WhiteSpace />
                    <Text>
                        2.Toast.hide(),会接受一个number类型的id,当id类型不为number时,会隐藏所有的toast
                    </Text>
                    <WhiteSpace />
                    <Text>
                        3.Toast中有两个常量LONG = 3500和SHORT = 2000
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}
