/**
 * @author zhangyi
 * @date 2018/2/28
 */
import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native'
import {
    Modal,
    Button,
    WingBlank,
    WhiteSpace,
} from '../../../components/index'

export default () => {
    const [state, setState] = React.useState({
        visibleBasic: false,
        visibleInput: false,
        animationType: ''
    })

    return (
        <View>
            <WhiteSpace/>
            <WingBlank>
                <Button line
                    onClick={()=> {
                        setState({ ...state, visibleBasic: true, animationType: 'none' })
                    }}
                >basic</Button>
                <WhiteSpace/>
                <Button line
                    onClick={()=> {
                        setState({ ...state, visibleInput: true, animationType: 'none' })
                    }}
                >Modal TextInput</Button>
                <WhiteSpace/>
                <Button line
                    onClick={()=> {
                        Modal.alert('弹窗标题', '弹窗正文单行限制宽度超出后折行', [
                            { text: '取消', onPress: () => console.log('cancel') },
                            { text: '确定', type: 'primary', onPress: () => console.log('ok') },
                        ])}
                    }
                >alert</Button>
                <WhiteSpace/>
                <Button line
                    onClick={()=> {
                        Modal.alert('', '弹窗正文单行限制宽度超出后折行弹窗正文单行限制宽度超出后折行', [
                            { text: '知道了', type: 'primary', onPress: () => console.log('ok') },
                        ])}
                    }
                >alert title empty</Button>
            </WingBlank>

            <Modal
                visible={state.visibleBasic}
                onClose={()=> {
                    setState({ ...state, visibleBasic: false })
                }}
                title={'弹窗标题'}
                content={'此样式弹窗文案区最小高度100px'}
                footer={[
                    { text: '取消' },
                    { text: '知道了', type: 'primary' },
                ]}
            />

            <Modal
                visible={state.visibleInput}
                onClose={()=> {
                    setState({ ...state, visibleInput: false })
                }}
                title={'这是title'}
                footer={[{
                    text: '知道了',
                    type: 'primary'
                }]}
                style={{top: -100}}
            >
                <Text>这是内容</Text>
                <TextInput
                    style={{
                        height: 28,
                        lineHeight: 28,
                        borderColor: '#333333',
                        borderWidth: StyleSheet.hairlineWidth
                    }}
                    placeholder='文本框'/>
                <Text>content</Text>
            </Modal>
        </View>
    )
}
