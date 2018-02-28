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
    Popup,
    Button,
    WingBlank,
    WhiteSpace,
} from '../../../components/index'

export default class PopupDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    render() {
        return (
            <View>
                <WhiteSpace/>
                <WingBlank>
                    <Button
                        onClick={()=>{
                            this.setState({ visible: true })
                        }}
                    >basic</Button>
                </WingBlank>
                <Popup
                    visible={this.state.visible}
                    onClose={()=>{
                        this.setState({ visible: false })
                    }}
                >
                    <View style={{
                        height: 150,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text>Popup</Text>
                    </View>
                </Popup>
            </View>
        )
    }
}