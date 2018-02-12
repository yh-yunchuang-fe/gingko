import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import {
    Icon,
    Card,
    WingBlank,
    WhiteSpace,
} from '../../../components/index'

export default class ButtonDemo extends Component {
    render() {
        return (
            <View>
                <WingBlank>
                    <WhiteSpace size="lg"/>
                    <Card>
                        <Card.Header>
                            这是title
                        </Card.Header>
                        <Card.Body>
                            <Text>content content</Text>
                        </Card.Body>
                        <Card.Footer>
                            footer
                        </Card.Footer>
                    </Card>
                    <WhiteSpace size="lg"/>
                    <Card>
                        <Card.Body>
                            <View>
                                <Icon name="camera" size="30"/>
                                <Icon name="scan" size="30"/>
                                <Text>This is content</Text>
                            </View>
                        </Card.Body>
                    </Card>
                    <WhiteSpace size="lg"/>
                </WingBlank>

                <Card full>
                    <Card.Header>
                        通栏卡片
                    </Card.Header>
                    <Card.Body>
                        <Text>content content</Text>
                        <WhiteSpace/>
                        <Text>content content</Text>
                        <WhiteSpace/>
                        <Text>content content</Text>
                    </Card.Body>
                    <Card.Footer style={{
                        paddingHorizontal: 0,
                        paddingVertical: 0
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#fafafa',
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row'
                        }}>
                            <Text style={{
                                color: '#24A8E8',
                                fontSize: 15,
                                marginRight: 5
                            }}>
                                展开明细
                            </Text>
                            <Icon name="arrow-down" color="#666" size="xs"/>
                        </TouchableOpacity>
                    </Card.Footer>
                </Card>
            </View>
        )
    }
}