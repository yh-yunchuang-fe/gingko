/**
 * @author zhangyi
 * @date 2018/2/28
 */
import React, { Component } from 'react'
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

const alert = Modal.alert;

export default class ButtonDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleBasic: false,
            visibleInput: false,
            animationType: ''
        }
    }

    render() {
        return (
            <View>
                <WhiteSpace/>
                <WingBlank>
                    <Button
                        onClick={()=>{
                            this.setState({ visibleBasic: true, animationType: 'none' })
                        }}
                    >basic</Button>
                    <WhiteSpace/>
                    <Button
                        onClick={()=>{
                            this.setState({ visibleInput: true, animationType: 'none' })
                        }}
                    >Modal TextInput</Button>
                    <WhiteSpace/>
                    <Button
                        onClick={()=>{
                            alert('Title', 'This is content???', [
                                { text: 'Cancel', onPress: () => console.log('cancel') },
                                { text: 'Ok', type: 'primary', onPress: () => console.log('ok') },
                            ])}
                        }
                    >alert</Button>
                    <WhiteSpace/>
                    <Button
                        onClick={()=>{
                            alert('', '确认后拣货单将进入配送流程请确认拣货完毕', [
                                { text: '知道了', type: 'primary', onPress: () => console.log('ok') },
                            ])}
                        }
                    >alert title empty</Button>
                </WingBlank>

                <Modal
                    visible={this.state.visibleBasic}
                    onClose={()=>{
                        this.setState({ visibleBasic: false })
                    }}
                    title={'这是title'}
                    footer={[{
                        text: '知道了',
                        type: 'primary'
                    }]}
                >
                    <Text>这是内容</Text>
                    <Text>content</Text>
                </Modal>

                <Modal
                    visible={this.state.visibleInput}
                    onClose={()=>{
                        this.setState({ visibleInput: false })
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
                            borderColor: '#333',
                            borderWidth: StyleSheet.hairlineWidth
                        }}
                        placeholder="文本框"/>
                    <Text>content</Text>
                </Modal>
            </View>
        )
    }
}