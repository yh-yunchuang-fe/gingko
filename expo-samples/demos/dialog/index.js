import React, { Component } from 'react'
import {
    View,
    Text,
} from 'react-native'
import {
    Dialog,
    Button,
    WingBlank,
    WhiteSpace,
} from '../../../components/index'

export default class ButtonDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
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
                            this.setState({ visible: true, animationType: 'none' })
                        }}
                    >open Dialog</Button>
                    <WhiteSpace/>
                    <Button
                        onClick={()=>{
                            this.setState({ visible: true, animationType: 'fade' })
                        }}
                    >open fade Dialog</Button>
                    <WhiteSpace/>
                    <Button
                        onClick={()=>{
                            this.setState({ visible: true, animationType: 'slide-up' })
                        }}
                    >open slide-up Dialog</Button>
                    <WhiteSpace/>
                    <Button
                        onClick={()=>{
                            this.setState({ visible: true, animationType: 'slide-down' })
                        }}
                    >open slide-up Dialog</Button>
                </WingBlank>

                <Dialog
                    visible={this.state.visible}
                    animationType={this.state.animationType}
                    wrapStyle={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    maskCloseable={true}
                    onClose={()=>{
                        this.setState({ visible: false })
                    }}
                >
                    <View style={{
                        width: 200,
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        borderRadius: 4,
                        shadowColor: '#333',
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                        shadowRadius: 3,
                        shadowOpacity: .2,
                        elevation: 10
                    }}>
                        <Text>Loading</Text>
                    </View>
                </Dialog>
            </View>
        )
    }
}