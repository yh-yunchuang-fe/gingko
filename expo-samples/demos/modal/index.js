/**
 * @author zhangyi
 * @date 2018/2/28
 */
import React, { Component } from 'react'
import {
    View,
    Text,
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
                    {/*<WhiteSpace/>*/}
                    {/*<Button*/}
                        {/*onClick={()=>{*/}
                            {/*this.setState({ visible: true, animationType: 'slide-up' })*/}
                        {/*}}*/}
                    {/*>open slide-up Dialog</Button>*/}
                    {/*<WhiteSpace/>*/}
                    {/*<Button*/}
                        {/*onClick={()=>{*/}
                            {/*this.setState({ visible: true, animationType: 'slide-down' })*/}
                        {/*}}*/}
                    {/*>open slide-up Dialog</Button>*/}
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
            </View>
        )
    }
}